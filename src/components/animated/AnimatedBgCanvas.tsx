'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useRef, useState, useEffect } from 'react';

function AnimatedBackground() {
    const meshRef = useRef<THREE.Mesh>(null);
    const materialsRef = useRef<THREE.Material[]>([]);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.0002;
            meshRef.current.rotation.y += 0.0003;
            meshRef.current.position.z = Math.sin(state.clock.elapsedTime * 0.5) * 2;
        }
    });

    return (
        <>
            {/* Animated background mesh */}
            <mesh ref={meshRef} scale={[2, 2, 2]}>
                <icosahedronGeometry args={[1, 8]} />
                <meshPhongMaterial
                    color="#FF6B35"
                    emissive="#ea580c"
                    wireframe={false}
                    opacity={0.3}
                    transparent
                />
            </mesh>

            {/* Particle system */}
            <ParticleSystem />

            {/* Lights */}
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} intensity={0.8} color="#FFB01B" />
            <pointLight position={[-10, -10, 10]} intensity={0.5} color="#FF6B35" />
        </>
    );
}

function ParticleSystem() {
    const particlesRef = useRef<THREE.Points>(null);

    useFrame(() => {
        if (particlesRef.current) {
            particlesRef.current.rotation.x += 0.0001;
            particlesRef.current.rotation.y += 0.0002;
        }
    });

    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 200;
    const positionArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
        positionArray[i] = (Math.random() - 0.5) * 10;
        positionArray[i + 1] = (Math.random() - 0.5) * 10;
        positionArray[i + 2] = (Math.random() - 0.5) * 10;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));

    return (
        <points ref={particlesRef} geometry={particleGeometry}>
            <pointsMaterial
                size={0.05}
                sizeAttenuation={true}
                color="#FCD34D"
                transparent={true}
                opacity={0.6}
            />
        </points>
    );
}

interface AnimatedBgProps {
    className?: string;
    opacity?: number;
}

export function AnimatedBgCanvas({ className = '', opacity = 0.5 }: AnimatedBgProps) {
    return (
        <div className={`absolute inset-0 -z-10 ${className}`}>
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                <AnimatedBackground />
            </Canvas>
            <div
                className="absolute inset-0 bg-gradient-to-r from-slate-900 to-brand-900"
                style={{ opacity }}
            />
        </div>
    );
}
