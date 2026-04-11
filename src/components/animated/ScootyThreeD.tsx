'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function ScootyThreeD() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const w = mount.clientWidth;
    const h = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100);
    camera.position.set(0, 1, 6);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ── SCOOTY BODY (simplified geometric shapes) ──
    const group = new THREE.Group();

    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x0ea5e9, metalness: 0.6, roughness: 0.3 });
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.4, roughness: 0.5 });
    const chromeMat = new THREE.MeshStandardMaterial({ color: 0xd1d5db, metalness: 0.9, roughness: 0.1 });
    const redMat = new THREE.MeshStandardMaterial({ color: 0xef4444, metalness: 0.3, roughness: 0.5 });

    // Main body — elongated shape
    const bodyGeo = new THREE.CapsuleGeometry(0.35, 1.0, 8, 16);
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.rotation.z = Math.PI / 2;
    body.position.y = 0.5;
    group.add(body);

    // Front shield / fairing
    const shieldGeo = new THREE.CylinderGeometry(0.28, 0.32, 0.5, 12);
    const shield = new THREE.Mesh(shieldGeo, bodyMat);
    shield.position.set(0.6, 0.75, 0);
    group.add(shield);

    // Seat
    const seatGeo = new THREE.BoxGeometry(0.7, 0.12, 0.35);
    const seat = new THREE.Mesh(seatGeo, darkMat);
    seat.position.set(-0.1, 0.88, 0);
    group.add(seat);

    // Handlebar
    const handleGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.7, 8);
    const handle = new THREE.Mesh(handleGeo, chromeMat);
    handle.rotation.x = Math.PI / 2;
    handle.position.set(0.55, 1.0, 0);
    group.add(handle);

    // Wheels
    function makeWheel(x: number) {
      const g = new THREE.Group();
      const tireGeo = new THREE.TorusGeometry(0.38, 0.10, 12, 28);
      const tire = new THREE.Mesh(tireGeo, darkMat);
      g.add(tire);
      const rimGeo = new THREE.CylinderGeometry(0.25, 0.25, 0.08, 16);
      const rim = new THREE.Mesh(rimGeo, chromeMat);
      rim.rotation.x = Math.PI / 2;
      g.add(rim);
      // Spokes
      for (let i = 0; i < 6; i++) {
        const spokeGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.45, 6);
        const spoke = new THREE.Mesh(spokeGeo, chromeMat);
        spoke.rotation.z = (i / 6) * Math.PI;
        g.add(spoke);
      }
      g.position.set(x, 0, 0);
      return g;
    }

    const frontWheel = makeWheel(0.65);
    const rearWheel = makeWheel(-0.65);
    group.add(frontWheel, rearWheel);

    // Exhaust pipe
    const exGeo = new THREE.CylinderGeometry(0.04, 0.06, 0.6, 8);
    const exhaust = new THREE.Mesh(exGeo, chromeMat);
    exhaust.rotation.z = Math.PI / 3;
    exhaust.position.set(-0.6, 0.15, 0.18);
    group.add(exhaust);

    // Headlight
    const headGeo = new THREE.SphereGeometry(0.1, 12, 12);
    const headMat = new THREE.MeshStandardMaterial({ color: 0xfef9c3, emissive: 0xfbbf24, emissiveIntensity: 0.8 });
    const headlight = new THREE.Mesh(headGeo, headMat);
    headlight.position.set(0.78, 0.72, 0);
    group.add(headlight);

    // Tail light
    const tailGeo = new THREE.SphereGeometry(0.06, 8, 8);
    const tail = new THREE.Mesh(tailGeo, redMat);
    tail.position.set(-0.78, 0.65, 0);
    group.add(tail);

    // Floor board
    const floorGeo = new THREE.BoxGeometry(0.6, 0.08, 0.4);
    const floor = new THREE.Mesh(floorGeo, darkMat);
    floor.position.set(0, 0.15, 0);
    group.add(floor);

    // Ground shadow disc
    const shadowGeo = new THREE.CircleGeometry(0.9, 32);
    const shadowMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.15 });
    const shadow = new THREE.Mesh(shadowGeo, shadowMat);
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.y = -0.38;
    group.add(shadow);

    scene.add(group);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const key = new THREE.DirectionalLight(0xffffff, 1.2);
    key.position.set(5, 8, 5);
    scene.add(key);
    const fill = new THREE.DirectionalLight(0x93c5fd, 0.5);
    fill.position.set(-5, 2, -5);
    scene.add(fill);
    scene.add(new THREE.PointLight(0xfbbf24, 0.6, 8));

    // Particle sparkles
    const sparkGeo = new THREE.BufferGeometry();
    const sCount = 60;
    const sPos = new Float32Array(sCount * 3);
    for (let i = 0; i < sCount * 3; i++) {
      sPos[i] = (Math.random() - 0.5) * 5;
    }
    sparkGeo.setAttribute('position', new THREE.BufferAttribute(sPos, 3));
    const sparkMat = new THREE.PointsMaterial({ color: 0x7dd3fc, size: 0.04, transparent: true, opacity: 0.7 });
    scene.add(new THREE.Points(sparkGeo, sparkMat));

    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    let id: number;
    const clock = new THREE.Clock();

    function animate() {
      id = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      group.rotation.y = t * 0.5;
      group.position.y = Math.sin(t * 1.2) * 0.06;

      // Spin wheels
      frontWheel.rotation.x -= 0.05;
      rearWheel.rotation.x -= 0.05;

      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-br from-sky-950 to-slate-900" style={{ height: 280 }}>
      <div ref={mountRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute bottom-4 left-0 right-0 text-center text-sky-300 text-xs font-medium opacity-70">
        🛵 Scooty on Rent — Starting ₹400/day
      </div>
    </div>
  );
}
