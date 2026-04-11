'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function TaxiThreeD() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const w = mount.clientWidth;
    const h = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
    camera.position.set(3, 2.5, 5);
    camera.lookAt(0, 0.3, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    mount.appendChild(renderer.domElement);

    // Materials
    const yellowMat = new THREE.MeshStandardMaterial({ color: 0xfbbf24, metalness: 0.4, roughness: 0.4 });
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x111827, metalness: 0.3, roughness: 0.6 });
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x93c5fd, metalness: 0.1, roughness: 0.05, transparent: true, opacity: 0.55 });
    const chromeMat = new THREE.MeshStandardMaterial({ color: 0xe5e7eb, metalness: 0.95, roughness: 0.05 });
    const lightMat = new THREE.MeshStandardMaterial({ color: 0xfef9c3, emissive: 0xfbbf24, emissiveIntensity: 1.0 });
    const redMat = new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xdc2626, emissiveIntensity: 0.5 });

    const group = new THREE.Group();

    // ── CAR BODY (lower) ──
    const bodyGeo = new THREE.BoxGeometry(2.2, 0.6, 1.0);
    const bodyBevel = new THREE.Mesh(bodyGeo, yellowMat);
    bodyBevel.position.y = 0.45;
    group.add(bodyBevel);

    // ── CAR CABIN (upper) ──
    const cabinGeo = new THREE.BoxGeometry(1.4, 0.55, 0.9);
    const cabin = new THREE.Mesh(cabinGeo, yellowMat);
    cabin.position.set(-0.15, 0.98, 0);
    group.add(cabin);

    // Front windshield
    const windGeo = new THREE.PlaneGeometry(0.5, 0.45);
    const windFront = new THREE.Mesh(windGeo, glassMat);
    windFront.rotation.y = -Math.PI / 2;
    windFront.rotation.z = 0.18;
    windFront.position.set(0.6, 1.0, 0);
    group.add(windFront);

    // Rear windshield
    const windRear = new THREE.Mesh(windGeo, glassMat);
    windRear.rotation.y = Math.PI / 2;
    windRear.rotation.z = -0.18;
    windRear.position.set(-0.9, 1.0, 0);
    group.add(windRear);

    // Side windows
    const sideWinGeo = new THREE.PlaneGeometry(1.1, 0.35);
    for (let side of [0.46, -0.46]) {
      const win = new THREE.Mesh(sideWinGeo, glassMat);
      win.rotation.x = side > 0 ? 0 : Math.PI;
      win.position.set(-0.15, 1.05, side);
      group.add(win);
    }

    // ── WHEELS ──
    function makeWheel(x: number, z: number) {
      const wg = new THREE.Group();
      const tireGeo = new THREE.CylinderGeometry(0.28, 0.28, 0.2, 20);
      const tire = new THREE.Mesh(tireGeo, darkMat);
      tire.rotation.z = Math.PI / 2;
      wg.add(tire);
      const rimGeo = new THREE.CylinderGeometry(0.16, 0.16, 0.22, 12);
      const rim = new THREE.Mesh(rimGeo, chromeMat);
      rim.rotation.z = Math.PI / 2;
      wg.add(rim);
      for (let i = 0; i < 5; i++) {
        const sg = new THREE.CylinderGeometry(0.025, 0.025, 0.23, 6);
        const spoke = new THREE.Mesh(sg, chromeMat);
        spoke.rotation.z = Math.PI / 2;
        spoke.position.y = Math.cos((i / 5) * Math.PI * 2) * 0.1;
        spoke.position.z = Math.sin((i / 5) * Math.PI * 2) * 0.1;
        wg.add(spoke);
      }
      wg.position.set(x, 0.28, z);
      return wg;
    }

    const wheels = [
      makeWheel(0.75, 0.55),
      makeWheel(0.75, -0.55),
      makeWheel(-0.75, 0.55),
      makeWheel(-0.75, -0.55),
    ];
    wheels.forEach(w => group.add(w));

    // ── HEADLIGHTS & TAIL LIGHTS ──
    const hGeo = new THREE.SphereGeometry(0.08, 8, 8);
    for (let z of [0.3, -0.3]) {
      const h = new THREE.Mesh(hGeo, lightMat);
      h.position.set(1.1, 0.5, z);
      group.add(h);
      const t = new THREE.Mesh(hGeo, redMat);
      t.position.set(-1.1, 0.5, z);
      group.add(t);
    }

    // ── TAXI SIGN on roof ──
    const signGeo = new THREE.BoxGeometry(0.4, 0.15, 0.25);
    const signMat = new THREE.MeshStandardMaterial({ color: 0xfef08a, emissive: 0xfbbf24, emissiveIntensity: 0.6 });
    const taxiSign = new THREE.Mesh(signGeo, signMat);
    taxiSign.position.set(0, 1.3, 0);
    group.add(taxiSign);

    // ── BUMPERS ──
    const bumperGeo = new THREE.BoxGeometry(0.12, 0.15, 1.1);
    const frontBumper = new THREE.Mesh(bumperGeo, chromeMat);
    frontBumper.position.set(1.16, 0.28, 0);
    group.add(frontBumper);
    const rearBumper = new THREE.Mesh(bumperGeo, chromeMat);
    rearBumper.position.set(-1.16, 0.28, 0);
    group.add(rearBumper);

    // Ground shadow
    const shadowGeo = new THREE.CircleGeometry(1.4, 32);
    const shadowMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.15 });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -0.01;
    group.add(shadowMesh);

    scene.add(group);

    // Road lines
    const lineGeo = new THREE.PlaneGeometry(0.08, 0.8);
    const lineMat = new THREE.MeshBasicMaterial({ color: 0xfbbf24, transparent: true, opacity: 0.4 });
    for (let i = -3; i <= 3; i++) {
      const line = new THREE.Mesh(lineGeo, lineMat);
      line.rotation.x = -Math.PI / 2;
      line.position.set(i * 1.4, 0, 0);
      scene.add(line);
    }

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const key = new THREE.DirectionalLight(0xfff7ed, 1.5);
    key.position.set(5, 10, 5);
    key.castShadow = true;
    scene.add(key);
    const fill = new THREE.DirectionalLight(0xfde68a, 0.4);
    fill.position.set(-5, 3, -3);
    scene.add(fill);

    // Glow light from headlights
    scene.add(new THREE.PointLight(0xfef08a, 1.2, 5, 2));

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

      group.rotation.y = Math.sin(t * 0.4) * 0.5;
      group.position.y = Math.sin(t * 1.0) * 0.04;

      // Spin wheels slowly
      wheels.forEach(w => { w.children[0].rotation.x += 0.04; });

      // Taxi sign pulse
      (taxiSign.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.4 + Math.sin(t * 2) * 0.3;

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
    <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-br from-amber-950 to-slate-900" style={{ height: 280 }}>
      <div ref={mountRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute bottom-4 left-0 right-0 text-center text-amber-300 text-xs font-medium opacity-70">
        🚕 Taxi Service — Starting ₹300
      </div>
    </div>
  );
}
