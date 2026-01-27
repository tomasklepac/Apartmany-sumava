import Hero from '@/components/Hero';
import ApartmentCard from '@/components/ApartmentCard';
import SectionHeading from '@/components/SectionHeading';
import { apartments } from '@/content/apartments';
import { siteData, whyUs } from '@/content/site';
import { trips } from '@/content/trips';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title={siteData.tagline}
        subtitle="Klid, příroda a komfort pro vaši dovolenou v srdci Šumavy"
        backgroundImage="/images/shared/hero-homepage.jpg"
        primaryCTA={{
          label: 'Vybrat apartmán',
          href: '#apartmany',
        }}
        secondaryCTA={{
          label: 'Kontakt',
          href: '/kontakt',
        }}
      />

      {/* Výběr apartmánu */}
      <section id="apartmany" className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Vyberte si svůj apartmán"
            subtitle="Dva apartmány, jedna destinace. Každý s jedinečnou atmosférou."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {apartments.map((apartment, index) => (
              <ApartmentCard key={apartment.id} apartment={apartment} index={index} />
            ))}
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
                <h3 className="text-xl font-serif font-bold text-charcoal mb-3">
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
            {apartments.flatMap(apt => apt.gallery.slice(0, 3)).slice(0, 6).map((image, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden group">
                <Image
                  src={image}
                  alt={`Galerie ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
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
    </>
  );
}
