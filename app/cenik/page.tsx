import { apartments } from '@/content/apartments';
import SectionHeading from '@/components/SectionHeading';
import Link from 'next/link';

export const metadata = {
    title: 'Ceník',
    description: 'Ceník ubytování v našich apartmánech na Šumavě',
};

export default function CenikPage() {
    return (
        <div className="pt-24 pb-16 bg-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Ceník"
                    subtitle="Přehled cen ubytování v našich apartmánech"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {apartments.map((apartment) => (
                        <div key={apartment.id} className="bg-cream-dark rounded-2xl overflow-hidden shadow-lg">
                            <div className="bg-forest-dark text-cream p-6">
                                <h2 className="text-3xl font-serif font-bold mb-2">{apartment.title}</h2>
                                <p className="text-cream/80">{apartment.location}</p>
                            </div>

                            <div className="p-8 space-y-6">
                                {apartment.pricing.map((price, index) => (
                                    <div key={index} className="pb-6 border-b border-charcoal/10 last:border-0">
                                        <div className="flex justify-between items-start mb-3">
                                            <div>
                                                <h3 className="text-xl font-semibold text-charcoal">{price.season}</h3>
                                                {price.minNights && (
                                                    <p className="text-charcoal/60 text-sm mt-1">
                                                        Minimálně {price.minNights} noci
                                                    </p>
                                                )}
                                            </div>
                                            <div className="text-3xl font-bold text-copper">{price.pricePerNight}</div>
                                        </div>
                                    </div>
                                ))}

                                <div className="pt-4">
                                    <p className="text-charcoal/70 text-sm mb-4">
                                        Kapacita: {apartment.capacity}
                                    </p>
                                    <Link
                                        href={`/apartman/${apartment.id}`}
                                        className="block w-full text-center px-6 py-3 bg-forest-dark text-cream rounded-full font-medium hover:bg-forest-medium transition-all"
                                    >
                                        Zobrazit detail
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="bg-mist p-8 rounded-xl">
                    <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">Důležité informace</h3>
                    <ul className="space-y-2 text-charcoal/80">
                        <li>✓ Ceny jsou uvedeny za noc</li>
                        <li>✓ Check-in: 14:00 - 18:00</li>
                        <li>✓ Check-out: do 10:00</li>
                        <li>✓ Možnost pozdního check-in po domluvě</li>
                        <li>✓ Platba v hotovosti nebo převodem</li>
                    </ul>

                    <div className="mt-6">
                        <Link
                            href="/kontakt"
                            className="inline-block px-8 py-4 bg-copper text-cream rounded-full font-medium hover:bg-copper-light transition-all"
                        >
                            Kontaktujte nás pro rezervaci
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
