'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface HeroProps {
    title: string;
    subtitle: string;
    backgroundImage: string;
    primaryCTA?: {
        label: string;
        href: string;
    };
    secondaryCTA?: {
        label: string;
        href: string;
    };
    showScrollIndicator?: boolean;
    height?: 'full' | 'large' | 'medium';
}

export default function Hero({
    title,
    subtitle,
    backgroundImage,
    primaryCTA,
    secondaryCTA,
    showScrollIndicator = true,
    height = 'full',
}: HeroProps) {
    const heightClasses = {
        full: 'h-screen',
        large: 'h-[80vh]',
        medium: 'h-[60vh]',
    };

    return (
        <div className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}>
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/70" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6 text-balance max-w-5xl mx-auto"
                    style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.9)' }}
                >
                    {title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg sm:text-xl md:text-2xl text-cream mb-12 max-w-2xl mx-auto"
                    style={{ textShadow: '1px 1px 6px rgba(0, 0, 0, 0.9)' }}
                >
                    {subtitle}
                </motion.p>

                {/* CTAs */}
                {(primaryCTA || secondaryCTA) && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        {primaryCTA && (
                            <Link
                                href={primaryCTA.href}
                                className="px-8 py-4 bg-copper text-cream rounded-full font-medium text-lg hover:bg-copper-light transition-all hover:scale-105 shadow-lg"
                            >
                                {primaryCTA.label}
                            </Link>
                        )}
                        {secondaryCTA && (
                            <Link
                                href={secondaryCTA.href}
                                className="px-8 py-4 bg-cream/10 backdrop-blur-sm text-cream border-2 border-cream rounded-full font-medium text-lg hover:bg-cream/20 transition-all"
                            >
                                {secondaryCTA.label}
                            </Link>
                        )}
                    </motion.div>
                )}
            </div>

            {/* Scroll Indicator */}
            {showScrollIndicator && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="flex flex-col items-center text-cream/80"
                    >
                        <span className="text-sm mb-2">Scroll</span>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
}
