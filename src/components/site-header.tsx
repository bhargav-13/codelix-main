'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export const SiteHeader = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    
    const navItems = [
        { label: 'Home', href: '#home' },
        { label: 'Services', href: '#services' },
        { label: 'Technologies', href: '#technologies' },
        { label: 'Testimonials', href: '#testimonials' },
        { label: 'Contact', href: '#contact' }
    ];

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Check if current route is active
    const isActive = (path: string) => {
        if (!pathname) return false;
        if (path === '/home') {
            return pathname === '/' || pathname === '/home';
        }
        return pathname.startsWith(path);
    };

    // Close mobile menu when navigating
    const handleNavigation = (href: string) => {
        setMobileMenuOpen(false);
        router.push(href);
    };

    return (
        <header className={`w-full fixed top-0 z-50 transition-all duration-300 ${
            scrolled ? 'bg-white py-2 shadow-md' : 'bg-white py-4'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center">
                        <Image 
                            src="/logo.svg" 
                            alt="Codelix Logo" 
                            width={120} 
                            height={40}
                            className="h-8 w-auto md:h-12"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => {
                            const active = isActive(item.href);
                            return (
                                <motion.div
                                    key={item.href}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative"
                                >
                                    <Link href={item.href} onClick={() => handleNavigation(item.href)}
                                        className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                                            active ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                    {active && (
                                        <motion.div
                                            layoutId="activeNav"
                                            className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300"
                                            initial={false}
                                            transition={{
                                                type: 'spring',
                                                stiffness: 500,
                                                damping: 30
                                            }}
                                        />
                                    )}
                                </motion.div>
                            );
                        })}
                    </nav>

                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>

                    {/* Desktop: Call to Action Button */}
                    <div className="hidden md:block">
                        <Link
                            href="#connect"
                            className="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-4 py-2 rounded-md hover:from-blue-900 hover:to-blue-700 transition-all text-sm font-semibold border-0 shadow-none focus:outline-none"
                        >
                            Let&apos;s Connect
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.15 }}
                            className="md:hidden absolute top-16 right-4 left-auto w-64 bg-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden p-3"
                        >
                            <div className="py-1 flex flex-col gap-1">
                                {navItems.map((item) => (
                                    <button
                                        key={item.href}
                                        onClick={() => handleNavigation(item.href)}
                                        className={`block px-4 py-3 text-base w-full text-left rounded-lg transition-colors font-medium ${
                                            isActive(item.href) ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                                        }`}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                                <div className="border-t border-gray-100 my-2"></div>
                                <Link
                                    href="#connect"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block w-full px-4 py-3 text-base text-center font-semibold text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 transition-all shadow"
                                >
                                    Let&apos;s Connect
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Mobile menu indicator */}
                <div className="md:hidden h-1 bg-gradient-to-r from-blue-500 to-cyan-400" style={{
                    width: '100%',
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.3s ease-in-out',
                    ...(pathname ? { transform: 'scaleX(1)' } : {})
                }}
            />
            </div>
        </header>
    );
};
