'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageGalleryProps {
    images: string[];
    title: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = useCallback(() => {
        setLightboxOpen(false);
        // Restore body scroll
        document.body.style.overflow = 'unset';
    }, []);

    const nextImage = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const prevImage = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!lightboxOpen) return;

            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen, closeLightbox, nextImage, prevImage]);

    return (
        <>
            {/* Grid Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
                        onClick={() => openLightbox(index)}
                    >
                        <Image
                            src={image}
                            alt={`${title} - ${index + 1}`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 768px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                                Zvětšit
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
                        onClick={closeLightbox}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 text-white/70 hover:text-white z-50 p-2"
                        >
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 z-50 hidden sm:block bg-black/20 hover:bg-black/40 rounded-full transition-colors"
                        >
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 z-50 hidden sm:block bg-black/20 hover:bg-black/40 rounded-full transition-colors"
                        >
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Main Image */}
                        <div
                            className="relative w-full max-w-7xl h-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image wrapper
                        >
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                className="relative w-full h-full max-h-[90vh]"
                            >
                                <Image
                                    src={images[currentIndex]}
                                    alt={`${title} - detail ${currentIndex + 1}`}
                                    fill
                                    className="object-contain" // object-contain to show full image
                                    priority
                                />
                            </motion.div>
                        </div>

                        {/* Counter */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium">
                            {currentIndex + 1} / {images.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
