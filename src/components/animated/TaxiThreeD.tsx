'use client';

import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useInView } from 'react-intersection-observer';

function TaxiModel() {
    const groupRef = useRef<THREE.Group>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

    useEffect(() => {
        if (inView) setIsAnimating(true);
    }, [inView]);

    useFrame((state) => {
        if (groupRef.current && isAnimating) {
            groupRef.current.rotation.y += 0.01;
            groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.3;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Main body */}
            <mesh position={[0, 0, 0]} castShadow receiveShadow>
                <boxGeometry args={[3, 1.5, 2]} />
                <meshStandardMaterial color="#FDE047" metalness={0.4} roughness={0.4} />
            </mesh>

            {/* Cabin */}
            <mesh position={[0.3, 1, 0]} castShadow receiveShadow>
                <boxGeometry args={[2, 1.2, 1.8]} />
                <meshStandardMaterial color="#FBBF24" metalness={0.3} roughness={0.3} />
            </mesh>

            {/* Front windshield */}
            <mesh position={[1.2, 0.8, 0]} castShadow>
                <boxGeometry args={[0.3, 0.8, 1.5]} />
                <meshStandardMaterial color="#1F2937" metalness={0.8} roughness={0.1} />
            </mesh>

            {/* Wheels - Front Left */}
            <mesh position={[-1, -0.9, -0.7]} castShadow receiveShadow rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.5, 0.5, 0.4, 32]} />
                <meshStandardMaterial color="#1F2937" metalness={0.6} roughness={0.4} />
            </mesh>

            {/* Wheels - Front Right */}
            <mesh position={[-1, -0.9, 0.7]} castShadow receiveShadow rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.5, 0.5, 0.4, 32]} />
                <meshStandardMaterial color="#1F2937" metalness={0.6} roughness={0.4} />
            </mesh>

            {/* Wheels - Back Left */}
            <mesh position={[1, -0.9, -0.7]} castShadow receiveShadow rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.5, 0.5, 0.4, 32]} />
                <meshStandardMaterial color="#1F2937" metalness={0.6} roughness={0.4} />
            </mesh>

            {/* Wheels - Back Right */}
            <mesh position={[1, -0.9, 0.7]} castShadow receiveShadow rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.5, 0.5, 0.4, 32]} />
                <meshStandardMaterial color="#1F2937" metalness={0.6} roughness={0.4} />
            </mesh>

            {/* Headlights */}
            <mesh position={[1.5, 0.4, -0.5]} castShadow>
                <sphereGeometry args={[0.25, 32, 32]} />
                <meshStandardMaterial color="#FCD34D" emissive="#FCD34D" emissiveIntensity={0.5} />
            </mesh>
            <mesh position={[1.5, 0.4, 0.5]} castShadow>
                <sphereGeometry args={[0.25, 32, 32]} />
                <meshStandardMaterial color="#FCD34D" emissive="#FCD34D" emissiveIntensity={0.5} />
            </mesh>
        </group>
    );
}

function TaxiLight() {
    return (
        <>
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 10, 7]} intensity={1.5} castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
            <pointLight position={[-5, 5, 5]} intensity={0.5} />
        </>
    );
}

export function TaxiThreeD() {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    return (
        <div ref={ref} className="w-full h-80 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {inView && (
                <Canvas
                    shadows
                    camera={{ position: [0, 2, 5], fov: 50 }}
                    style={{ width: '100%', height: '100%' }}
                >
                    <TaxiLight />
                    <TaxiModel />
                    <mesh position={[0, -1.5, 0]} receiveShadow>
                        <planeGeometry args={[10, 10]} />
                        <meshStandardMaterial color="#0F172A" metalness={0.1} roughness={0.8} />
                    </mesh>
                </Canvas>
            )}
        </div>
    );
}
