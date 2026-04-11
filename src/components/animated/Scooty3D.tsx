'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bike } from 'lucide-react';

export function Scooty3D() {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50, rotateZ: -90 },
        visible: {
            opacity: 1,
            x: 0,
            rotateZ: 0,
            transition: {
                duration: 0.7,
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
                {/* 3D Scooty Body */}
                <motion.div
                    className="relative w-72 h-56"
                    variants={itemVariants}
                    animate={inView ? {
                        rotateY: [0, 15, -15, 0],
                        rotateZ: [0, -3, 3, 0],
                    } : {}}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: 'reverse',
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-red-500 to-rose-600 rounded-2xl shadow-2xl overflow-hidden"
                        style={{
                            transformStyle: 'preserve-3d',
                            transform: 'perspective(1200px)',
                        }}
                    >
                        {/* Scooty Front */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                            <Bike className="w-20 h-20 mb-2" />
                            <div className="text-center">
                                <p className="font-bold text-lg">SCOOTY</p>
                                <p className="text-xs opacity-80">₹400/day</p>
                            </div>
                        </div>

                        {/* Shine Effect */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-25"
                            animate={{ x: ['−100%', '100%'] }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                            }}
                        />
                    </div>

                    {/* Shadow */}
                    <motion.div
                        className="absolute -bottom-3 left-0 right-0 h-2.5 bg-black rounded-full blur-lg opacity-25"
                        animate={{
                            scaleX: [0.75, 1.15, 0.75],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                        }}
                    />
                </motion.div>
            </motion.div>

            {/* Floating Spark Particles */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
                <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-orange-300 rounded-full opacity-70"
                    animate={{
                        y: [0, -120, 0],
                        x: [Math.cos(i) * 60, Math.sin(i * 1.5) * 100, Math.cos(i) * 60],
                        opacity: [0.7, 0.1, 0.7],
                        scale: [1, 0.5, 1],
                    }}
                    transition={{
                        duration: 3.5 + i * 0.4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    style={{
                        left: `${25 + i * 12}%`,
                        top: `${15 + i * 4}%`,
                    }}
                />
            ))}
        </div>
    );
}
