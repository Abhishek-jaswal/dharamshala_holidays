'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.set(0, 2, 8);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mount.appendChild(renderer.domElement);

    // ── STAR FIELD ──
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 1500;
    const starPositions = new Float32Array(starCount * 3);
    const starSizes = new Float32Array(starCount);
    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 200;
      starPositions[i * 3 + 1] = Math.random() * 60 + 5;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 200;
      starSizes[i] = Math.random() * 1.5 + 0.3;
    }
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('size', new THREE.BufferAttribute(starSizes, 1));
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.15,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.8,
    });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // ── MOUNTAIN SILHOUETTES ──
    function makeMountain(points: [number, number][], z: number, color: number) {
      const shape = new THREE.Shape();
      shape.moveTo(points[0][0], points[0][1]);
      for (let i = 1; i < points.length; i++) shape.lineTo(points[i][0], points[i][1]);
      shape.closePath();
      const geo = new THREE.ShapeGeometry(shape);
      const mat = new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.z = z;
      mesh.rotation.x = -Math.PI * 0.02;
      return mesh;
    }

    // Far mountains (lighter)
    scene.add(makeMountain([[-30, -3], [-18, 8], [-8, 14], [0, 10], [8, 16], [18, 8], [30, -3]], -25, 0x1a2744));
    // Mid mountains
    scene.add(makeMountain([[-30, -3], [-20, 5], [-10, 12], [0, 7], [10, 13], [20, 5], [30, -3]], -15, 0x0f1d33));
    // Near mountains (darkest)
    scene.add(makeMountain([[-30, -3], [-22, 3], [-12, 9], [-4, 5], [4, 8], [12, 10], [22, 3], [30, -3]], -8, 0x0a1628));

    // ── ROAD ──
    const roadGeometry = new THREE.PlaneGeometry(6, 80, 8, 80);
    const roadMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a1a2e,
      roughness: 0.9,
      metalness: 0.1,
    });
    const road = new THREE.Mesh(roadGeometry, roadMaterial);
    road.rotation.x = -Math.PI / 2;
    road.position.y = -2.5;
    road.position.z = 10;
    road.receiveShadow = true;
    scene.add(road);

    // Road center dashes
    const dashGeometry = new THREE.PlaneGeometry(0.15, 3);
    const dashMaterial = new THREE.MeshBasicMaterial({ color: 0xffd700 });
    for (let i = 0; i < 18; i++) {
      const dash = new THREE.Mesh(dashGeometry, dashMaterial);
      dash.rotation.x = -Math.PI / 2;
      dash.position.set(0, -2.49, -35 + i * 5);
      scene.add(dash);
    }

    // Road side lines
    const sideLineMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.6 });
    for (let side of [-2.9, 2.9]) {
      const lineGeo = new THREE.PlaneGeometry(0.08, 80);
      const line = new THREE.Mesh(lineGeo, sideLineMat);
      line.rotation.x = -Math.PI / 2;
      line.position.set(side, -2.48, 10);
      scene.add(line);
    }

    // ── MOVING HEADLIGHTS (glowing orbs on road) ──
    const headlightGroup = new THREE.Group();
    scene.add(headlightGroup);

    function createHeadlightPair(zStart: number) {
      const group = new THREE.Group();
      const lightGeo = new THREE.SphereGeometry(0.12, 8, 8);
      const lightMat = new THREE.MeshBasicMaterial({ color: 0xfff5c3 });
      const leftLight = new THREE.Mesh(lightGeo, lightMat);
      const rightLight = new THREE.Mesh(lightGeo, lightMat);
      leftLight.position.set(-0.8, -2.3, 0);
      rightLight.position.set(0.8, -2.3, 0);
      group.add(leftLight, rightLight);

      const coneGeo = new THREE.ConeGeometry(1.2, 6, 8, 1, true);
      const coneMat = new THREE.MeshBasicMaterial({ color: 0xfff5c3, transparent: true, opacity: 0.07, side: THREE.DoubleSide });
      const cone = new THREE.Mesh(coneGeo, coneMat);
      cone.rotation.x = Math.PI / 2;
      cone.position.set(0, -2.2, -3);
      group.add(cone);

      group.position.z = zStart;
      return group;
    }

    const vehicles = [
      createHeadlightPair(-50),
      createHeadlightPair(-70),
      createHeadlightPair(-90),
    ];
    vehicles.forEach(v => headlightGroup.add(v));

    // ── FLOATING PARTICLES (dust/fireflies) ──
    const particleGeo = new THREE.BufferGeometry();
    const pCount = 120;
    const pPos = new Float32Array(pCount * 3);
    const pVel = new Float32Array(pCount);
    for (let i = 0; i < pCount; i++) {
      pPos[i * 3] = (Math.random() - 0.5) * 20;
      pPos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 20;
      pVel[i] = Math.random() * 0.02 + 0.005;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xffa500,
      size: 0.06,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // ── LIGHTS ──
    scene.add(new THREE.AmbientLight(0x223366, 0.8));
    const moonLight = new THREE.DirectionalLight(0x8899cc, 0.5);
    moonLight.position.set(-10, 20, -5);
    scene.add(moonLight);

    // Orange glow from below (road/city)
    const glow = new THREE.PointLight(0xff6600, 1.5, 30);
    glow.position.set(0, -1, 0);
    scene.add(glow);

    // ── RESIZE ──
    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // ── ANIMATION LOOP ──
    let animId: number;
    const clock = new THREE.Clock();

    function animate() {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Subtle camera sway
      camera.position.x = Math.sin(t * 0.15) * 0.4;
      camera.position.y = 2 + Math.sin(t * 0.2) * 0.1;

      // Stars twinkle
      starMaterial.opacity = 0.6 + Math.sin(t * 0.8) * 0.2;

      // Move vehicles along road (approaching from far, loop)
      vehicles.forEach((v, i) => {
        v.position.z += 0.3 + i * 0.05;
        if (v.position.z > 12) v.position.z = -90;
      });

      // Rotate particles slowly
      particles.rotation.y += 0.0008;
      const pPositions = particleGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < pCount; i++) {
        pPositions[i * 3 + 1] += pVel[i] * 0.15;
        if (pPositions[i * 3 + 1] > 6) pPositions[i * 3 + 1] = -4;
      }
      particleGeo.attributes.position.needsUpdate = true;

      // Glow pulse
      glow.intensity = 1.2 + Math.sin(t * 1.5) * 0.3;

      // Road dashes move (create illusion of movement)
      road.position.z = 10 + (t * 2) % 5;

      renderer.render(scene, camera);
    }

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 w-full h-full" />;
}
