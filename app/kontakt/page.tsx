import dynamic from 'next/dynamic';
import { siteData } from '@/content/site';
import { apartments } from '@/content/apartments';
import SectionHeading from '@/components/SectionHeading';

const ContactMap = dynamic(() => import('@/components/ContactMap'), {
    ssr: false,
    loading: () => <div className="h-[500px] w-full bg-gray-100 animate-pulse rounded-xl" />
});

export const metadata = {
    title: 'Kontakt',
    description: 'Kontaktujte nás pro rezervaci nebo dotazy k ubytování',
};

export default function KontaktPage() {
    // Příprava dat pro mapu
    const locations = apartments.map(apt => ({
        id: apt.id,
        title: apt.title,
        description: apt.shortDescription,
        coordinates: apt.coordinates,
        address: apt.address || apt.location // Fallback
    }));

    return (
        <div className="pt-24 pb-16 bg-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Kontakt"
                    subtitle="Rádi zodpovíme vaše dotazy a pomůžeme s rezervací"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Levý sloupec: Kontakty */}
                    <div className="space-y-8">
                        <div className="bg-cream-dark p-10 rounded-2xl shadow-lg">
                            <h3 className="text-2xl font-bold text-charcoal mb-8">
                                Kontaktní údaje
                            </h3>

                            <div className="flex flex-col gap-4 items-start">
                                <a
                                    href={`tel:${siteData.contact.phone}`}
                                    className="inline-flex items-center space-x-4 px-8 py-4 bg-forest-dark text-cream rounded-full hover:bg-forest-medium transition-all shadow-md group w-fit"
                                >
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.22-.22.3-.53.24-0.83-.36-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3.51 3 4.06 3 4.98 3 14.28 10.7 22 20.02 22c.92 0 1.46-.65 1.46-1.19v3.83c0-.54-.45-.99-.99-.99z" />
                                    </svg>
                                    <span className="font-medium text-lg">{siteData.contact.phoneDisplay}</span>
                                </a>

                                <a
                                    href={`mailto:${siteData.contact.email}`}
                                    className="inline-flex items-center space-x-4 px-8 py-4 bg-forest-dark text-cream rounded-full hover:bg-forest-medium transition-all shadow-md group w-fit"
                                >
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                    </svg>
                                    <span className="font-medium text-lg">{siteData.contact.email}</span>
                                </a>
                            </div>

                            {/* Fakturační údaje */}
                            <div className="mt-12 pt-8 border-t border-charcoal/10">
                                <h4 className="text-lg font-bold text-charcoal mb-4">Provozovatel</h4>
                                <p className="text-charcoal/80 text-lg">Mgr. Milan Klepač</p>
                                <p className="text-charcoal/60 mt-1">IČO: 88209431</p>
                            </div>
                        </div>
                    </div>

                    {/* Pravý sloupec: Mapa */}
                    <div className="h-full min-h-[500px]">
                        <ContactMap locations={locations} />
                    </div>
                </div>
            </div>
        </div>
    );
}
