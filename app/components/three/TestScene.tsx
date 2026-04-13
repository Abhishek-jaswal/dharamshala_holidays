'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, Text } from '@react-three/drei'

export default function TestScene() {
    return (
        <div className="h-[400px] w-full">
            <Canvas camera={{ position: [0, 2, 6], fov: 50 }}>
                {/* Lights */}
                <ambientLight intensity={1.2} />
                <directionalLight position={[3, 3, 3]} intensity={2} />

                {/* Floating Bike Shape */}
                <Float speed={2} rotationIntensity={1} floatIntensity={2}>
                    <mesh position={[-2, 0, 0]}>
                        <torusGeometry args={[1, 0.3, 16, 100]} />
                        <meshStandardMaterial color="#38bdf8" />
                    </mesh>
                </Float>

                {/* Floating Scooty Shape */}
                <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
                    <mesh position={[2, 0, 0]}>
                        <boxGeometry args={[1.5, 0.6, 0.6]} />
                        <meshStandardMaterial color="#f472b6" />
                    </mesh>
                </Float>

                {/* Taxi Circle */}
                <Float speed={2} rotationIntensity={1} floatIntensity={2}>
                    <mesh position={[0, -1.5, 0]}>
                        <sphereGeometry args={[0.7, 32, 32]} />
                        <meshStandardMaterial color="#facc15" />
                    </mesh>
                </Float>

                {/* Text */}
                <Text
                    position={[0, 2, 0]}
                    fontSize={0.5}
                    color="white"
                    anchorX="center"
                    anchorY="middle"
                >
                    SKD Holidays
                </Text>

                {/* Controls (drag to rotate) */}
                <OrbitControls enableZoom={false} />
            </Canvas>
        </div>
    )
}