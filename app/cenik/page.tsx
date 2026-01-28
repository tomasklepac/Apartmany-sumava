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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {apartments.map((apartment) => (
                        <div key={apartment.id} className="bg-cream-dark rounded-2xl overflow-hidden shadow-lg flex flex-col">
                            <div className="bg-forest-dark text-cream p-6">
                                <h2 className="text-xl font-serif font-bold mb-1">{apartment.title}</h2>
                                <p className="text-cream/80 text-sm">{apartment.location}</p>
                            </div>

                            <div className="p-6 space-y-4 flex-grow">
                                {apartment.pricing.map((price, index) => (
                                    <div key={index} className="pb-4 border-b border-charcoal/10 last:border-0">
                                        <div className="flex justify-between items-center mb-2">
                                            <div>
                                                <h3 className="text-lg font-semibold text-charcoal">{price.season}</h3>
                                                {price.minNights && (
                                                    <p className="text-charcoal/60 text-xs mt-1">
                                                        Minimálně {price.minNights} noci
                                                    </p>
                                                )}
                                            </div>
                                            <div className="text-xl font-bold text-copper">{price.pricePerNight}</div>
                                        </div>
                                    </div>
                                ))}

                                <div className="p-3 bg-mist/50 rounded-lg text-xs text-charcoal/80 italic">
                                    ℹ️ Konečná cena se mění v závislosti na konkrétním termínu a počtu osob.
                                </div>

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
