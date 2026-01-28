import Link from 'next/link';
import { siteData } from '@/content/site';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const apartmentLinks = [
        { href: '/apartman/prasily', label: 'Prášily (3 os.)' },
        { href: '/apartman/prasily-2', label: 'Prášily (4 os.)' },
        { href: '/apartman/zelezna-ruda', label: 'Železná Ruda' },
    ];

    const pageLinks = [
        { href: '/', label: 'Domů' },
        { href: '/galerie', label: 'Galerie' },
        { href: '/cenik', label: 'Ceník' },
        { href: '/okoli', label: 'Okolí' },
        { href: '/kontakt', label: 'Kontakt' },
    ];

    return (
        <footer className="bg-forest-dark text-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-serif font-bold mb-4">{siteData.name}</h3>
                        <p className="text-cream/80 text-sm leading-relaxed">
                            {siteData.description}
                        </p>
                    </div>

                    {/* Apartmány */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Apartmány</h4>
                        <ul className="space-y-2">
                            {apartmentLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-cream/80 hover:text-copper transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Stránky */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Stránky</h4>
                        <ul className="space-y-2">
                            {pageLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-cream/80 hover:text-copper transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Kontakt */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href={`tel:${siteData.contact.phone}`}
                                    className="text-cream/80 hover:text-copper transition-colors flex items-center space-x-2 text-sm"
                                >
                                    <span>📞</span>
                                    <span>{siteData.contact.phoneDisplay}</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`mailto:${siteData.contact.email}`}
                                    className="text-cream/80 hover:text-copper transition-colors flex items-center space-x-2 text-sm"
                                >
                                    <span>✉️</span>
                                    <span>{siteData.contact.email}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 pt-8 border-t border-cream/20 text-center text-cream/60 text-sm">
                    <p>&copy; {currentYear} {siteData.name}. Všechna práva vyhrazena.</p>
                    <p className="mt-2">Vytvořil Tomáš Klepač</p>
                </div>
            </div>
        </footer>
    );
}
