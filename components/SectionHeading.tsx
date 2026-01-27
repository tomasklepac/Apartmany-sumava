'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
}

export default function SectionHeading({ title, subtitle, centered = true }: SectionHeadingProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`mb-12 ${centered ? 'text-center' : ''}`}
        >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
                {title}
            </h2>
            {subtitle && (
                <p className="text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
}
