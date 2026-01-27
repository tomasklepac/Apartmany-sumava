import Link from 'next/link';
import { siteData } from '@/content/site';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { href: '/', label: 'Domů' },
        { href: '/apartman/prasily', label: 'Prášily' },
        { href: '/apartman/zelezna-ruda', label: 'Železná Ruda' },
        { href: '/galerie', label: 'Galerie' },
        { href: '/cenik', label: 'Ceník' },
        { href: '/okoli', label: 'Okolí' },
        { href: '/kontakt', label: 'Kontakt' },
        { href: '/rezervace', label: 'Rezervace' },
    ];

    return (
        <footer className="bg-forest-dark text-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-serif font-bold mb-4">{siteData.name}</h3>
                        <p className="text-cream/80 mb-4">{siteData.description}</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Rychlé odkazy</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-cream/80 hover:text-copper transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href={`tel:${siteData.contact.phone}`}
                                    className="text-cream/80 hover:text-copper transition-colors flex items-center space-x-2"
                                >
                                    <span>📞</span>
                                    <span>{siteData.contact.phoneDisplay}</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`mailto:${siteData.contact.email}`}
                                    className="text-cream/80 hover:text-copper transition-colors flex items-center space-x-2"
                                >
                                    <span>✉️</span>
                                    <span>{siteData.contact.email}</span>
                                </a>
                            </li>
                        </ul>

                        {/* Social */}
                        {(siteData.social?.facebook || siteData.social?.instagram) && (
                            <div className="mt-6 flex space-x-4">
                                {siteData.social.facebook && (
                                    <a
                                        href={siteData.social.facebook}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-cream/80 hover:text-copper transition-colors"
                                        aria-label="Facebook"
                                    >
                                        Facebook
                                    </a>
                                )}
                                {siteData.social.instagram && (
                                    <a
                                        href={siteData.social.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-cream/80 hover:text-copper transition-colors"
                                        aria-label="Instagram"
                                    >
                                        Instagram
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 pt-8 border-t border-cream/20 text-center text-cream/60 text-sm">
                    <p>&copy; {currentYear} {siteData.name}. Všechna práva vyhrazena.</p>
                </div>
            </div>
        </footer>
    );
}
