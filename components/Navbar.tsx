'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';

// ... (zbytek importů zůstává stejný, jen přidána AnimatePresence)

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const isHomepage = pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const navLinks = [
        { href: '/', label: 'Domů' },
        { href: '/apartman/prasily', label: 'Prášily (3 os.)' },
        { href: '/apartman/prasily-2', label: 'Prášily (4 os.)' },
        { href: '/apartman/zelezna-ruda', label: 'Železná Ruda' },
        { href: '/galerie', label: 'Galerie' },
        { href: '/cenik', label: 'Ceník' },
        { href: '/okoli', label: 'Okolí' },
        { href: '/kontakt', label: 'Kontakt' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: isHomepage && !isScrolled ? -100 : 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isMobileMenuOpen ? 'bg-transparent' : 'bg-cream/95 backdrop-blur-md shadow-md'}`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <Link href="/" className={`flex items-center space-x-2 z-50 relative ${isMobileMenuOpen ? 'text-cream' : 'text-forest-dark'}`}>
                            <span className="text-2xl font-bold transition-colors">
                                {siteData.name}
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-base font-bold transition-colors relative group text-forest-dark hover:text-copper"
                                >
                                    {link.label}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-copper transition-all duration-300 group-hover:w-full" />
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`lg:hidden p-2 rounded-md transition-colors z-50 relative ${isMobileMenuOpen ? 'text-cream' : 'text-forest-dark'}`}
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMobileMenuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Fullscreen Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-forest-dark flex flex-col items-center justify-center lg:hidden"
                    >
                        {/* Background Decoration */}
                        <div className="absolute inset-0 pattern-dots opacity-5 pointer-events-none" />

                        <div className="flex flex-col space-y-6 text-center z-10 p-6">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 + 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-2xl font-serif font-bold text-cream hover:text-copper transition-colors block py-2"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Additional Info in Menu */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="absolute bottom-10 left-0 right-0 text-center text-cream/60 text-sm"
                        >
                            <p>Těšíme se na vaši návštěvu</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
