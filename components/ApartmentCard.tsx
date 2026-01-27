'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import type { Apartment } from '@/content/apartments';

interface ApartmentCardProps {
    apartment: Apartment;
    index?: number;
}

export default function ApartmentCard({ apartment, index = 0 }: ApartmentCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative bg-cream-dark rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
        >
            {/* Image */}
            <div className="relative h-80 overflow-hidden">
                <Image
                    src={apartment.heroImage}
                    alt={apartment.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />

                {/* Location Badge */}
                <div className="absolute top-4 right-4 bg-cream/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-sm font-medium text-charcoal">📍 {apartment.location}</span>
                </div>
            </div>

            {/* Content */}
            <div className="p-8">
                <h3 className="text-3xl font-serif font-bold text-charcoal mb-3">
                    {apartment.title}
                </h3>

                <p className="text-charcoal/80 mb-6 line-clamp-2">
                    {apartment.shortDescription}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                    {apartment.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-charcoal/70">
                            <span>{feature.icon}</span>
                            <span>{feature.label}</span>
                        </div>
                    ))}
                </div>

                {/* Capacity */}
                <div className="flex items-center justify-between mb-6 pb-6 border-b border-charcoal/10">
                    <div className="flex items-center space-x-2">
                        <span className="text-2xl">👥</span>
                        <span className="text-charcoal font-medium">{apartment.capacity}</span>
                    </div>
                    <div className="text-right">
                        <div className="text-sm text-charcoal/60">Od</div>
                        <div className="text-xl font-bold text-copper">
                            {apartment.pricing[0].pricePerNight}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <Link
                    href={`/apartman/${apartment.id}`}
                    className="block w-full text-center px-6 py-3 bg-forest-dark text-cream rounded-full font-medium hover:bg-forest-medium transition-all group-hover:bg-copper group-hover:scale-105"
                >
                    Zobrazit detail
                </Link>
            </div>
        </motion.div>
    );
}
