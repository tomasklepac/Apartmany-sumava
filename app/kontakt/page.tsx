import { siteData } from '@/content/site';
import SectionHeading from '@/components/SectionHeading';

export const metadata = {
    title: 'Kontakt',
    description: 'Kontaktujte nás pro rezervaci nebo dotazy k ubytování',
};

export default function KontaktPage() {
    return (
        <div className="pt-24 pb-16 bg-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Kontakt"
                    subtitle="Rádi zodpovíme vaše dotazy a pomůžeme s rezervací"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-cream-dark p-8 rounded-xl">
                            <h3 className="text-2xl font-serif font-bold text-charcoal mb-6">
                                Kontaktní údaje
                            </h3>

                            <div className="flex flex-col gap-3">
                                <a
                                    href={`tel:${siteData.contact.phone}`}
                                    className="inline-flex items-center space-x-3 px-5 py-3 bg-forest-dark text-cream rounded-full hover:bg-forest-medium transition-all shadow-md group w-fit"
                                >
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.22-.22.3-.53.24-0.83-.36-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3.51 3 4.06 3 4.98 3 14.28 10.7 22 20.02 22c.92 0 1.46-.65 1.46-1.19v3.83c0-.54-.45-.99-.99-.99z" />
                                    </svg>
                                    <span className="font-medium">{siteData.contact.phoneDisplay}</span>
                                </a>

                                <a
                                    href={`mailto:${siteData.contact.email}`}
                                    className="inline-flex items-center space-x-3 px-5 py-3 bg-forest-dark text-cream rounded-full hover:bg-forest-medium transition-all shadow-md group w-fit"
                                >
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                    </svg>
                                    <span className="font-medium">{siteData.contact.email}</span>
                                </a>
                            </div>
                        </div>

                        {/* FAQ */}
                        <div className="bg-mist p-8 rounded-xl">
                            <h3 className="text-2xl font-serif font-bold text-charcoal mb-6">
                                Často kladené otázky
                            </h3>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-charcoal mb-2">Kdy je check-in a check-out?</h4>
                                    <p className="text-charcoal/70">Check-in je od 14:00 do 18:00, check-out do 10:00. Pozdní check-in je možný po domluvě.</p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-charcoal mb-2">Jsou povoleni domácí mazlíčci?</h4>
                                    <p className="text-charcoal/70">V apartmánu Prášily jsou domácí mazlíčci povoleni. Pro Železnou Rudu nás prosím kontaktujte.</p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-charcoal mb-2">Jaké jsou storno podmínky?</h4>
                                    <p className="text-charcoal/70">Storno podmínky závisí na termínu a délce pobytu. Kontaktujte nás pro detaily.</p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-charcoal mb-2">Je k dispozici parkování?</h4>
                                    <p className="text-charcoal/70">Ano, u obou apartmánů je parkování zdarma.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Box */}
                    <div>
                        <div className="bg-forest-dark text-cream p-8 rounded-xl sticky top-24">
                            <h3 className="text-2xl font-serif font-bold mb-4">Rezervujte si pobyt</h3>
                            <p className="text-cream/80 mb-6">
                                Kontaktujte nás telefonicky nebo emailem. Rádi vám pomůžeme s výběrem termínu a odpovíme na všechny vaše dotazy.
                            </p>

                            <div className="space-y-4">
                                <a
                                    href={`tel:${siteData.contact.phone}`}
                                    className="block w-full text-center px-6 py-4 bg-copper text-cream rounded-full font-medium hover:bg-copper-light transition-all text-lg"
                                >
                                    Zavolat
                                </a>
                                <a
                                    href={`mailto:${siteData.contact.email}`}
                                    className="block w-full text-center px-6 py-4 bg-cream/10 border-2 border-cream text-cream rounded-full font-medium hover:bg-cream/20 transition-all text-lg"
                                >
                                    Napsat email
                                </a>
                            </div>

                            <div className="mt-8 pt-8 border-t border-cream/20">
                                <p className="text-cream/60 text-sm">
                                    Obvykle odpovídáme do 24 hodin
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
