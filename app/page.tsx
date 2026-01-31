'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import ApartmentCard from '@/components/ApartmentCard';
import SectionHeading from '@/components/SectionHeading';
import Lightbox from '@/components/Lightbox';
import { apartments } from '@/content/apartments';
import { siteData, whyUs } from '@/content/site';
import { trips } from '@/content/trips';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';

export default function HomePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);

  const openLightbox = (images: string[], index: number) => {
    setGalleryImages(images);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <>
      {/* Hero Section */}
      <Hero
        title={siteData.tagline}
        subtitle="Klid, příroda a komfort pro vaši dovolenou v srdci Šumavy"
        backgroundImage="/images/shared/hero-homepage.png"
        primaryCTA={{
          label: 'Vybrat apartmán',
          href: '#apartmany',
        }}
        secondaryCTA={{
          label: 'Kontakt',
          href: '/kontakt',
        }}
        showScrollIndicator={false}
      />

      {/* Výběr apartmánu */}
      <section id="apartmany" className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Vyberte si svůj apartmán"
            subtitle="Tři apartmány, dvě destinace. Každý s jedinečnou atmosférou."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apartments.map((apartment, index) => (
              <ApartmentCard key={apartment.id} apartment={apartment} index={index} />
            ))}
          </div>

          <div className="mt-8 text-center text-charcoal/70">
            <p>🐾 Domácí mazlíčci jsou vítáni ve všech apartmánech za poplatek.</p>
          </div>
        </div>
      </section>

      {/* Proč právě u nás */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-mist">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Proč právě u nás"
            subtitle="Co dělá naše apartmány výjimečnými"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item, index) => (
              <div
                key={index}
                className="bg-cream p-8 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  {item.title}
                </h3>
                <p className="text-charcoal/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie Teaser */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Galerie"
            subtitle="Nahlédněte do našich apartmánů"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {(() => {
              const allImages = Array.from(new Set(apartments.flatMap(apt => apt.gallery)));
              // For preview, we want a diverse selection.
              // Take the first 3 images from each apartment, then filter for uniqueness, then take 6.
              const previewCandidates = apartments.flatMap(apt => apt.gallery.slice(0, 3));
              const previewImages = Array.from(new Set(previewCandidates)).slice(0, 6);

              return previewImages.map((image, index) => (
                <div
                  key={index}
                  className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
                  onClick={() => openLightbox(allImages, allImages.indexOf(image))}
                >
                  <Image
                    src={image}
                    alt={`Galerie ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay hint */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              ));
            })()}
          </div>

          <div className="text-center">
            <Link
              href="/galerie"
              className="inline-block px-8 py-4 bg-forest-dark text-cream rounded-full font-medium hover:bg-forest-medium transition-all"
            >
              Zobrazit celou galerii
            </Link>
          </div>
        </div>
      </section>

      {/* Okolí - Tipy */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-mist">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Objevte okolí"
            subtitle="Tipy na výlety a aktivity v srdci Šumavy"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trips.slice(0, 4).map((trip, index) => (
              <div
                key={trip.id}
                className="bg-cream rounded-xl overflow-hidden hover:shadow-lg transition-all group"
              >
                <div className="relative h-48">
                  <Image
                    src={trip.image}
                    alt={trip.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                    {trip.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm line-clamp-3">
                    {trip.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/okoli"
              className="inline-block px-8 py-4 bg-copper text-cream rounded-full font-medium hover:bg-copper-light transition-all"
            >
              Více tipů na výlety
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            images={galleryImages}
            currentIndex={currentImageIndex}
            onClose={closeLightbox}
            onNavigate={setCurrentImageIndex}
          />
        )}
      </AnimatePresence>
    </>
  );
}
