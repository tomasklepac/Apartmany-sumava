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

                            <div className="space-y-6">
                                <div>
                                    <div className="flex items-center space-x-3 mb-2">
                                        <span className="text-3xl">📞</span>
                                        <h4 className="text-lg font-semibold text-charcoal">Telefon</h4>
                                    </div>
                                    <a
                                        href={`tel:${siteData.contact.phone}`}
                                        className="text-copper hover:text-copper-light text-lg font-medium transition-colors ml-11"
                                    >
                                        {siteData.contact.phoneDisplay}
                                    </a>
                                </div>

                                <div>
                                    <div className="flex items-center space-x-3 mb-2">
                                        <span className="text-3xl">✉️</span>
                                        <h4 className="text-lg font-semibold text-charcoal">Email</h4>
                                    </div>
                                    <a
                                        href={`mailto:${siteData.contact.email}`}
                                        className="text-copper hover:text-copper-light text-lg font-medium transition-colors ml-11"
                                    >
                                        {siteData.contact.email}
                                    </a>
                                </div>
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
                                    📞 Zavolat
                                </a>
                                <a
                                    href={`mailto:${siteData.contact.email}`}
                                    className="block w-full text-center px-6 py-4 bg-cream/10 border-2 border-cream text-cream rounded-full font-medium hover:bg-cream/20 transition-all text-lg"
                                >
                                    ✉️ Napsat email
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
