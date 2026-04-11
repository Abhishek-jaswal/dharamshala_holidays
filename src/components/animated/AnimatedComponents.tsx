'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { staggerContainerVariants, staggerItemVariants } from '@/lib/animations';
import { ReactNode } from 'react';

interface AnimatedCardProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export function AnimatedCard({ children, className = '', delay = 0 }: AnimatedCardProps) {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50, rotateX: -20 }}
            animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{
                duration: 0.6,
                delay,
                ease: 'easeOut',
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

interface AnimatedContainerProps {
    children: ReactNode;
    className?: string;
}

export function AnimatedContainer({ children, className = '' }: AnimatedContainerProps) {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <motion.div
            ref={ref}
            variants={staggerContainerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className={className}
        >
            {children}
        </motion.div>
    );
}

interface AnimatedItemProps {
    children: ReactNode;
    className?: string;
}

export function AnimatedItem({ children, className = '' }: AnimatedItemProps) {
    return (
        <motion.div variants={staggerItemVariants} className={className}>
            {children}
        </motion.div>
    );
}

export function AnimatedRevealText({ text, className = '' }: { text: string; className?: string }) {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    const characters = text.split('');

    return (
        <motion.span ref={ref} className={className}>
            {characters.map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                        duration: 0.3,
                        delay: i * 0.03,
                    }}
                >
                    {char}
                </motion.span>
            ))}
        </motion.span>
    );
}
