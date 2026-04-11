'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Car } from 'lucide-react';

export function Taxi3D() {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50, rotateX: -90 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    };

    return (
        <div ref={ref} className="relative w-full h-96 flex items-center justify-center perspective">
            <motion.div
                className="relative w-full h-full flex items-center justify-center"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
            >
                {/* 3D Taxi Body */}
                <motion.div
                    className="relative w-80 h-48"
                    variants={itemVariants}
                    animate={inView ? {
                        rotateY: [0, 10, -10, 0],
                        rotateX: [0, 5, -5, 0],
                    } : {}}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: 'reverse',
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl shadow-2xl overflow-hidden"
                        style={{
                            transformStyle: 'preserve-3d',
                            transform: 'perspective(1200px)',
                        }}
                    >
                        {/* Taxi Front */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                            <Car className="w-24 h-24 mb-2" />
                            <div className="text-center">
                                <p className="font-bold text-lg">TAXI</p>
                                <p className="text-xs opacity-80">Premium Service</p>
                            </div>
                        </div>

                        {/* Shine Effect */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                            animate={{ x: ['−100%', '100%'] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                            }}
                        />
                    </div>

                    {/* Shadow */}
                    <motion.div
                        className="absolute -bottom-4 left-0 right-0 h-3 bg-black rounded-full blur-xl opacity-20"
                        animate={{
                            scaleX: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                        }}
                    />
                </motion.div>
            </motion.div>

            {/* Floating Particles */}
            {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-brand-400 rounded-full opacity-60"
                    animate={{
                        y: [0, -100, 0],
                        x: [Math.sin(i) * 50, Math.cos(i) * 100, Math.sin(i) * 50],
                        opacity: [0.6, 0.2, 0.6],
                    }}
                    transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    style={{
                        left: `${30 + i * 10}%`,
                        top: `${20 + i * 5}%`,
                    }}
                />
            ))}
        </div>
    );
}
