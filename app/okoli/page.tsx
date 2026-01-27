import { trips } from '@/content/trips';
import SectionHeading from '@/components/SectionHeading';
import Image from 'next/image';

export const metadata = {
    title: 'Okolí a tipy na výlety',
    description: 'Objevte krásy Šumavy - tipy na výlety, turistiku, lyžování a další aktivity',
};

export default function OkoliPage() {
    const categories = {
        nature: { label: 'Příroda', icon: '🏞️' },
        hiking: { label: 'Turistika', icon: '🥾' },
        skiing: { label: 'Lyžování', icon: '⛷️' },
        cycling: { label: 'Cyklistika', icon: '🚴' },
        culture: { label: 'Kultura', icon: '🏛️' },
    };

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
                                <div className="absolute top-4 right-4 bg-cream/90 backdrop-blur-sm px-4 py-2 rounded-full">
                                    <span className="text-sm font-medium text-charcoal">
                                        {categories[trip.category].icon} {categories[trip.category].label}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-serif font-bold text-charcoal mb-3">
                                    {trip.title}
                                </h3>
                                <p className="text-charcoal/70 mb-4">{trip.description}</p>

                                <div className="flex flex-wrap gap-2 text-sm">
                                    {trip.distance && (
                                        <span className="px-3 py-1 bg-mist rounded-full text-charcoal/70">
                                            📍 {trip.distance}
                                        </span>
                                    )}
                                    {trip.difficulty && (
                                        <span className="px-3 py-1 bg-mist rounded-full text-charcoal/70">
                                            {trip.difficulty === 'easy' && '🟢 Snadné'}
                                            {trip.difficulty === 'medium' && '🟡 Střední'}
                                            {trip.difficulty === 'hard' && '🔴 Náročné'}
                                        </span>
                                    )}
                                    {trip.season && (
                                        <span className="px-3 py-1 bg-mist rounded-full text-charcoal/70">
                                            📅 {trip.season}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 bg-forest-dark text-cream p-12 rounded-2xl text-center">
                    <h3 className="text-3xl font-serif font-bold mb-4">
                        Naplánujte si dovolenou na Šumavě
                    </h3>
                    <p className="text-cream/80 text-lg mb-8 max-w-2xl mx-auto">
                        Naše apartmány jsou ideálním výchozím bodem pro objevování Šumavy.
                        Rezervujte si pobyt a užijte si vše, co tento region nabízí.
                    </p>
                    <a
                        href="/rezervace"
                        className="inline-block px-8 py-4 bg-copper text-cream rounded-full font-medium text-lg hover:bg-copper-light transition-all hover:scale-105"
                    >
                        Rezervovat apartmán
                    </a>
                </div>
            </div>
        </div>
    );
}
