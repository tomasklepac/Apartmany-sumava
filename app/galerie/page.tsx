'use client';

import { useState } from 'react';
import { apartments, getAllGalleryImages } from '@/content/apartments';
import Image from 'next/image';
import SectionHeading from '@/components/SectionHeading';

export default function GaleriePage() {
    const [filter, setFilter] = useState<'all' | 'prasily' | 'zelezna-ruda'>('all');

    const getFilteredImages = () => {
        if (filter === 'all') {
            return getAllGalleryImages();
        }
        const apartment = apartments.find(apt => apt.id === filter);
        return apartment ? apartment.gallery : [];
    };

    const filteredImages = getFilteredImages();

    return (
        <div className="pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Galerie"
                    subtitle="Prohlédněte si fotografie našich apartmánů"
                />

                {/* Filter */}
                <div className="flex justify-center gap-4 mb-12">
                    <button
                        onClick={() => setFilter('all')}
                        className={`px-6 py-3 rounded-full font-medium transition-all ${filter === 'all'
                                ? 'bg-copper text-cream'
                                : 'bg-cream-dark text-charcoal hover:bg-mist'
                            }`}
                    >
                        Vše
                    </button>
                    <button
                        onClick={() => setFilter('prasily')}
                        className={`px-6 py-3 rounded-full font-medium transition-all ${filter === 'prasily'
                                ? 'bg-copper text-cream'
                                : 'bg-cream-dark text-charcoal hover:bg-mist'
                            }`}
                    >
                        Prášily
                    </button>
                    <button
                        onClick={() => setFilter('zelezna-ruda')}
                        className={`px-6 py-3 rounded-full font-medium transition-all ${filter === 'zelezna-ruda'
                                ? 'bg-copper text-cream'
                                : 'bg-cream-dark text-charcoal hover:bg-mist'
                            }`}
                    >
                        Železná Ruda
                    </button>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredImages.map((image, index) => (
                        <div key={index} className="relative h-80 rounded-lg overflow-hidden group cursor-pointer">
                            <Image
                                src={image}
                                alt={`Galerie ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
