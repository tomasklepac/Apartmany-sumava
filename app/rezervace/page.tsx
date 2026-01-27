import { siteData } from '@/content/site';
import { apartments } from '@/content/apartments';
import SectionHeading from '@/components/SectionHeading';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: 'Rezervace',
    description: 'Rezervujte si pobyt v našich apartmánech na Šumavě',
};

export default function RezervacePage() {
    return (
        <div className="pt-24 pb-16 bg-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Rezervace"
                    subtitle="Vyberte si apartmán a kontaktujte nás pro rezervaci"
                />

                {/* Apartments Quick Select */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {apartments.map((apartment) => (
                        <div key={apartment.id} className="bg-cream-dark rounded-xl overflow-hidden shadow-lg">
                            <div className="relative h-64">
                                <Image
                                    src={apartment.heroImage}
                                    alt={apartment.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-serif font-bold text-charcoal mb-2">
                                    {apartment.title}
                                </h3>
                                <p className="text-charcoal/70 mb-4">{apartment.shortDescription}</p>

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

                                <Link
                                    href={`/apartman/${apartment.id}`}
                                    className="block w-full text-center px-6 py-3 bg-forest-dark text-cream rounded-full font-medium hover:bg-forest-medium transition-all"
                                >
                                    Zobrazit detail
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="bg-forest-dark text-cream p-12 rounded-2xl">
                    <div className="max-w-3xl mx-auto text-center">
                        <h3 className="text-3xl font-serif font-bold mb-4">
                            Jak rezervovat?
                        </h3>
                        <p className="text-cream/80 text-lg mb-8">
                            Kontaktujte nás telefonicky nebo emailem a sdělte nám požadovaný termín a apartmán.
                            Rádi vám potvrdíme dostupnost a zodpovíme všechny vaše dotazy.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <a
                                href={`tel:${siteData.contact.phone}`}
                                className="flex flex-col items-center p-6 bg-cream/10 backdrop-blur-sm rounded-xl hover:bg-cream/20 transition-all group"
                            >
                                <span className="text-5xl mb-3">📞</span>
                                <h4 className="text-xl font-semibold mb-2">Zavolejte nám</h4>
                                <p className="text-copper text-lg font-medium group-hover:text-copper-light">
                                    {siteData.contact.phoneDisplay}
                                </p>
                            </a>

                            <a
                                href={`mailto:${siteData.contact.email}`}
                                className="flex flex-col items-center p-6 bg-cream/10 backdrop-blur-sm rounded-xl hover:bg-cream/20 transition-all group"
                            >
                                <span className="text-5xl mb-3">✉️</span>
                                <h4 className="text-xl font-semibold mb-2">Napište nám</h4>
                                <p className="text-copper text-lg font-medium group-hover:text-copper-light">
                                    {siteData.contact.email}
                                </p>
                            </a>
                        </div>

                        <div className="pt-8 border-t border-cream/20">
                            <p className="text-cream/60">
                                Obvykle odpovídáme do 24 hodin • Check-in 14:00-18:00 • Check-out do 10:00
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
