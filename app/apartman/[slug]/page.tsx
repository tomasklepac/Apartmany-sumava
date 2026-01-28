import { notFound } from 'next/navigation';
import { apartments, getApartmentById } from '@/content/apartments';
import Hero from '@/components/Hero';
import ApartmentMap from '@/components/ApartmentMap';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

interface ApartmentPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return apartments.map((apartment) => ({
        slug: apartment.id,
    }));
}

export async function generateMetadata({ params }: ApartmentPageProps): Promise<Metadata> {
    const { slug } = await params;
    const apartment = getApartmentById(slug);

    if (!apartment) {
        return {};
    }

    return {
        title: apartment.title,
        description: apartment.shortDescription,
    };
}

export default async function ApartmentPage({ params }: ApartmentPageProps) {
    const { slug } = await params;
    const apartment = getApartmentById(slug);

    if (!apartment) {
        notFound();
    }

    const otherApartment = apartments.find(apt => apt.id !== apartment.id);

    return (
        <>
            {/* Hero */}
            <Hero
                title={apartment.title}
                subtitle={apartment.shortDescription}
                backgroundImage={apartment.heroImage}
                height="large"
                showScrollIndicator={false}
            />

            {/* Quick Info */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-cream border-b border-charcoal/10">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap gap-6 justify-center items-center">
                        <div className="flex items-center space-x-2 text-charcoal">
                            <span className="text-2xl">👥</span>
                            <span className="font-medium">{apartment.capacity}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-charcoal">
                            <span className="text-2xl">📍</span>
                            <span className="font-medium">{apartment.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-charcoal">
                            <span className="text-2xl">💰</span>
                            <span className="font-medium">{apartment.pricing[0].pricePerNight}</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Description */}
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-charcoal mb-4">O apartmánu</h2>
                            <p className="text-charcoal/80 text-lg leading-relaxed">{apartment.longDescription}</p>
                        </div>

                        {/* Features */}
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-charcoal mb-6">Vybavení</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {apartment.features.map((feature, index) => (
                                    <div key={index} className="flex items-center space-x-3 p-4 bg-cream-dark rounded-lg">
                                        <span className="text-2xl">{feature.icon}</span>
                                        <span className="text-charcoal font-medium">{feature.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Gallery */}
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-charcoal mb-6">Galerie</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {apartment.gallery.map((image, index) => (
                                    <div key={index} className="relative h-64 rounded-lg overflow-hidden group">
                                        <Image
                                            src={image}
                                            alt={`${apartment.title} - ${index + 1}`}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Pricing */}
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-charcoal mb-6">Ceník</h2>
                            <div className="space-y-4">
                                {apartment.pricing.map((price, index) => (
                                    <div key={index} className="p-6 bg-cream-dark rounded-lg">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h3 className="text-xl font-semibold text-charcoal">{price.season}</h3>
                                                {price.minNights && (
                                                    <p className="text-charcoal/60 text-sm mt-1">
                                                        Minimálně {price.minNights} noci
                                                    </p>
                                                )}
                                            </div>
                                            <div className="text-2xl font-bold text-copper">{price.pricePerNight}</div>
                                        </div>
                                    </div>
                                ))}
                                <div className="mt-4 p-4 bg-mist/50 rounded-lg text-sm text-charcoal/80 italic">
                                    ℹ️ Uvedená cena je minimální. Konečná cena se mění v závislosti na konkrétním termínu (sezóna/mimo sezónu) a počtu ubytovaných osob. Pro přesnou kalkulaci nás prosím kontaktujte.
                                </div>
                            </div>
                        </div>

                        {/* Location & Map */}
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-charcoal mb-6">Poloha</h2>
                            <div className="mb-4">
                                <p className="text-charcoal/70 mb-2">
                                    <span className="font-semibold">Adresa:</span> {apartment.address}
                                </p>
                            </div>
                            <ApartmentMap address={apartment.address} coordinates={apartment.coordinates} />

                            <div className="mt-6 text-center">
                                <Link
                                    href="/okoli"
                                    className="inline-block px-8 py-3 bg-forest-dark text-cream rounded-full font-medium hover:bg-forest transition-all hover:scale-105"
                                >
                                    🏞️ Objevte okolí
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Sticky Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            {/* CTA Box */}
                            <div className="bg-forest-dark text-cream p-8 rounded-xl">
                                <h3 className="text-2xl font-serif font-bold mb-4">Rezervujte si pobyt</h3>
                                <p className="text-cream/80 mb-6">
                                    Kontaktujte nás pro rezervaci nebo dotazy k dostupnosti.
                                </p>
                                <div className="space-y-4">
                                    <a
                                        href="tel:+420123456789"
                                        className="block w-full text-center px-6 py-3 bg-copper text-cream rounded-full font-medium hover:bg-copper-light transition-all"
                                    >
                                        📞 Zavolat
                                    </a>
                                    <Link
                                        href="/kontakt"
                                        className="block w-full text-center px-6 py-3 bg-cream/10 border-2 border-cream text-cream rounded-full font-medium hover:bg-cream/20 transition-all"
                                    >
                                        ✉️ Napsat
                                    </Link>
                                </div>
                            </div>

                            {/* Other Apartment */}
                            {otherApartment && (
                                <div className="bg-cream-dark p-6 rounded-xl">
                                    <h3 className="text-lg font-semibold text-charcoal mb-3">
                                        Podívejte se také na
                                    </h3>
                                    <Link
                                        href={`/apartman/${otherApartment.id}`}
                                        className="block group"
                                    >
                                        <div className="relative h-32 rounded-lg overflow-hidden mb-3">
                                            <Image
                                                src={otherApartment.heroImage}
                                                alt={otherApartment.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>
                                        <h4 className="font-semibold text-charcoal group-hover:text-copper transition-colors">
                                            {otherApartment.title}
                                        </h4>
                                        <p className="text-charcoal/70 text-sm mt-1">
                                            {otherApartment.shortDescription}
                                        </p>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
