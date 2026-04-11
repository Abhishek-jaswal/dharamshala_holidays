'use client';

import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useInView } from 'react-intersection-observer';

function ScootyModel() {
    const groupRef = useRef<THREE.Group>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const { inView } = useInView({ threshold: 0.5, triggerOnce: true });

    useEffect(() => {
        if (inView) setIsAnimating(true);
    }, [inView]);

    useFrame((state) => {
        if (groupRef.current && isAnimating) {
            groupRef.current.rotation.y += 0.015;
            groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 1.2) * 0.1;
            groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.3) * 0.4;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Main body/platform */}
            <mesh position={[0, 0, 0]} castShadow receiveShadow>
                <boxGeometry args={[2, 0.8, 0.8]} />
                <meshStandardMaterial color="#FF6B35" metalness={0.5} roughness={0.3} />
            </mesh>

            {/* Seat */}
            <mesh position={[0, 0.65, 0]} castShadow receiveShadow>
                <boxGeometry args={[1.5, 0.5, 0.8]} />
                <meshStandardMaterial color="#F97316" metalness={0.4} roughness={0.4} />
            </mesh>

            {/* Handle bars - Left */}
            <mesh position={[-0.8, 1.2, 0]} castShadow receiveShadow>
                <boxGeometry args={[0.2, 0.8, 0.2]} />
                <meshStandardMaterial color="#1F2937" metalness={0.7} roughness={0.2} />
            </mesh>

            {/* Handle bars - Right */}
            <mesh position={[0.8, 1.2, 0]} castShadow receiveShadow>
                <boxGeometry args={[0.2, 0.8, 0.2]} />
                <meshStandardMaterial color="#1F2937" metalness={0.7} roughness={0.2} />
            </mesh>

            {/* Handle bar top */}
            <mesh position={[0, 1.7, 0]} castShadow>
                <boxGeometry args={[1.8, 0.2, 0.2]} />
                <meshStandardMaterial color="#1F2937" metalness={0.7} roughness={0.2} />
            </mesh>

            {/* Front wheel */}
            <mesh position={[-1.2, -0.6, 0]} castShadow receiveShadow rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.45, 0.45, 0.3, 32]} />
                <meshStandardMaterial color="#000000" metalness={0.8} roughness={0.5} />
            </mesh>

            {/* Front wheel rim */}
            <mesh position={[-1.2, -0.6, 0]} castShadow rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[0.45, 0.08, 16, 100]} />
                <meshStandardMaterial color="#FFB01B" metalness={0.9} roughness={0.1} />
            </mesh>

            {/* Back wheel */}
            <mesh position={[1.2, -0.6, 0]} castShadow receiveShadow rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.45, 0.45, 0.3, 32]} />
                <meshStandardMaterial color="#000000" metalness={0.8} roughness={0.5} />
            </mesh>

            {/* Back wheel rim */}
            <mesh position={[1.2, -0.6, 0]} castShadow rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[0.45, 0.08, 16, 100]} />
                <meshStandardMaterial color="#FFB01B" metalness={0.9} roughness={0.1} />
            </mesh>

            {/* Engine/Front cover */}
            <mesh position={[-0.8, 0.3, 0]} castShadow receiveShadow>
                <boxGeometry args={[0.8, 0.6, 0.6]} />
                <meshStandardMaterial color="#DC2626" metalness={0.4} roughness={0.5} />
            </mesh>

            {/* Headlight */}
            <mesh position={[-1.5, 0.4, 0.35]} castShadow>
                <sphereGeometry args={[0.2, 32, 32]} />
                <meshStandardMaterial color="#FBBF24" emissive="#FBBF24" emissiveIntensity={0.6} />
            </mesh>

            {/* Mirror - Left */}
            <mesh position={[-0.9, 1.1, -0.5]} castShadow>
                <sphereGeometry args={[0.15, 32, 32]} />
                <meshStandardMaterial color="#FCD34D" metalness={0.9} roughness={0.1} />
            </mesh>

            {/* Mirror - Right */}
            <mesh position={[-0.9, 1.1, 0.5]} castShadow>
                <sphereGeometry args={[0.15, 32, 32]} />
                <meshStandardMaterial color="#FCD34D" metalness={0.9} roughness={0.1} />
            </mesh>
        </group>
    );
}

function ScootyLight() {
    return (
        <>
            <ambientLight intensity={0.9} />
            <directionalLight position={[4, 8, 6]} intensity={1.8} castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
            <pointLight position={[-4, 5, 4]} intensity={0.6} color="#FF6B35" />
        </>
    );
}

export function ScootyThreeD() {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    return (
        <div ref={ref} className="w-full h-80 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {inView && (
                <Canvas
                    shadows
                    camera={{ position: [0, 1.5, 4], fov: 50 }}
                    style={{ width: '100%', height: '100%' }}
                >
                    <ScootyLight />
                    <ScootyModel />
                    <mesh position={[0, -1.2, 0]} receiveShadow>
                        <planeGeometry args={[10, 10]} />
                        <meshStandardMaterial color="#0F172A" metalness={0.1} roughness={0.8} />
                    </mesh>
                </Canvas>
            )}
        </div>
    );
}
