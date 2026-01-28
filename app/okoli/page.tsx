'use client';

import { trips } from '@/content/trips';
import SectionHeading from '@/components/SectionHeading';
import Image from 'next/image';

export default function OkoliPage() {
    return (
        <div className="pt-24 pb-16 bg-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Objevte okolí"
                    subtitle="Tipy na výlety a aktivity v srdci Šumavy"
                />

                {/* Intro */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <p className="text-lg text-charcoal/80 leading-relaxed">
                        Šumava nabízí nespočet možností pro aktivní odpočinek i relaxaci v přírodě.
                        Od turistických tras přes lyžařské areály až po klidná jezera - každý si zde najde to své.
                    </p>
                </div>

                {/* Trips Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {trips.map((trip) => (
                        <div key={trip.id} className="bg-cream-dark rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
                            <div className="relative h-64">
                                <Image
                                    src={trip.image}
                                    alt={trip.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-charcoal mb-3">
                                    {trip.title}
                                </h3>
                                <p className="text-charcoal/70">{trip.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
