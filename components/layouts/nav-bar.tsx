'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Manrope } from 'next/font/google';
import { useLenis } from 'lenis/react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

const navFont = Manrope({
    subsets: ['latin'],
    weight: ['500', '600', '700'],
});

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const lenis = useLenis();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        handleScroll(); // Initial check
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock/Unlock scroll when mobile menu is open
    useEffect(() => {
        if (!lenis) return;
        if (isOpen) {
            lenis.stop();
        } else {
            lenis.start();
        }
    }, [isOpen, lenis]);

    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#about-us', label: 'About Us' },
        { href: '#menu', label: 'Menu' },
        { href: '#gallery', label: 'Gallery' },
        { href: '#location', label: 'Location' },
    ];

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();
        
        // 1. Close menu first to trigger Lenis unlock
        setIsOpen(false);
        
        // 2. Allow a brief moment for the state to update and Lenis to start
        requestAnimationFrame(() => {
            const id = href.replace('#', '');
            const target = document.getElementById(id) || (href !== '#' ? document.querySelector(href) : null);
            
            if (target && lenis) {
                lenis.scrollTo(target as HTMLElement, {
                    offset: 0,
                    duration: 2.2,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                });
            } else if (target) {
                (target as HTMLElement).scrollIntoView({ behavior: 'smooth' });
            }
        });
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
        exit: {
            opacity: 0,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        },
        exit: { opacity: 0, y: 20 },
    };

    return (
        <header className={`${navFont.className} fixed inset-x-0 top-0 z-50 w-full px-4 pt-4 sm:px-6`}>
            {/* Center the Pill */}
            <div className="mx-auto max-w-7xl">
                <div className={`mx-auto w-full transition-all duration-700 md:w-[75%] lg:w-[65%] ${isScrolled ? 'translate-y-0' : 'translate-y-2'}`}>
                    <nav className={`relative transition-all duration-500 rounded-full ${
                        isScrolled || isOpen
                        ? 'md:bg-emerald-950/70 md:backdrop-blur-2xl md:border md:border-emerald-100/15 md:shadow-2xl bg-transparent border-none' 
                        : 'md:bg-emerald-950/20 md:backdrop-blur-md md:border md:border-emerald-100/10 md:shadow-none bg-transparent border-none'
                    }`}>
                        <div className="flex items-center justify-between px-5 py-3 sm:px-6">
                            {/* Desktop Branding only - Hidden on Mobile */}
                            <Link 
                                href="#home" 
                                onClick={(e) => handleScrollTo(e, '#home')}
                                className="z-[60] hidden md:flex items-center gap-3 transition-transform hover:scale-105"
                            >
                                <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-emerald-100/40 sm:h-11 sm:w-11">
                                    <Image
                                        src="/lamika-logo.jpg"
                                        alt="Lamika Cafe and Restaurant"
                                        width={44}
                                        height={44}
                                        priority
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="hidden sm:block">
                                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-100">Lamika</p>
                                    <p className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-emerald-50/70">Moalboal</p>
                                </div>
                            </Link>

                            {/* Spacer for mobile to push logo to right, or hidden on MD */}
                            <div className="md:hidden flex-1" />

                            {/* Desktop Links */}
                            <div className="hidden md:flex items-center gap-8">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={(e) => handleScrollTo(e, link.href)}
                                        className="group relative py-2 text-[0.74rem] font-bold uppercase tracking-[0.16em] text-emerald-50/80 transition-colors duration-200 hover:text-white"
                                    >
                                        {link.label}
                                        <span className="absolute -bottom-[1px] left-0 h-[1.5px] w-full origin-left scale-x-0 bg-emerald-300/60 transition-transform duration-500 ease-out group-hover:scale-x-100" />
                                    </Link>
                                ))}
                            </div>

                            {/* Desktop Contact CTA */}
                            <Link
                                href="#contact"
                                onClick={(e) => handleScrollTo(e, '#contact')}
                                className={`hidden md:inline-flex items-center justify-center rounded-full border px-6 py-2.5 text-[0.68rem] font-bold uppercase tracking-[0.18em] transition-all duration-500 hover:scale-105 active:scale-95 ${
                                    isScrolled 
                                    ? 'border-emerald-100/40 text-emerald-50 hover:bg-emerald-50 hover:text-emerald-950 hover:border-emerald-50' 
                                    : 'border-emerald-300/40 text-emerald-50 bg-emerald-900/40 hover:bg-emerald-300 hover:text-emerald-950 hover:border-emerald-300'
                                }`}
                            >
                                Contact
                            </Link>

                            {/* Mobile Logo Trigger - Positioned Right */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="z-[60] flex h-12 w-12 items-center justify-center rounded-full bg-emerald-950/40 backdrop-blur-md border border-emerald-100/10 text-emerald-100 transition-all duration-300 hover:bg-emerald-950/60 active:scale-90 md:hidden"
                                aria-label="Toggle navigation"
                                aria-expanded={isOpen}
                            >
                                <div className="relative h-full w-full overflow-hidden rounded-full">
                                    <Image
                                        src="/lamika-logo.jpg"
                                        alt="Lamika Logo"
                                        fill
                                        className="object-cover scale-90"
                                    />
                                </div>
                            </button>
                        </div>
                    </nav>
                </div>
            </div>

            {/* Mobile Navigation Overlay - Isolated at Header Root */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[55] flex flex-col items-center justify-center bg-emerald-950/98 backdrop-blur-2xl md:hidden"
                    >
                        {/* Close button inside overlay for extra clarity */}
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute right-6 top-8 flex h-12 w-12 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-white/10"
                            aria-label="Close menu"
                        >
                            <div className="relative h-6 w-6">
                                <span className="absolute left-1/2 top-1/2 h-[1.5px] w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-emerald-50" />
                                <span className="absolute left-1/2 top-1/2 h-[1.5px] w-6 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-emerald-50" />
                            </div>
                        </motion.button>

                        <motion.div 
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="flex h-full w-full flex-col items-center justify-center px-8 text-center"
                        >
                            <div className="flex flex-col space-y-10">
                                {navLinks.map((link) => (
                                    <motion.div key={link.href} variants={itemVariants}>
                                        <Link
                                            href={link.href}
                                            onClick={(e) => handleScrollTo(e, link.href)}
                                            className="block text-3xl font-bold uppercase tracking-[0.25em] text-emerald-50/90 transition-colors hover:text-white"
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                                
                                <motion.div variants={itemVariants} className="pt-10">
                                    <Link
                                        href="#contact"
                                        onClick={(e) => handleScrollTo(e, '#contact')}
                                        className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-emerald-100/30 px-8 py-5 text-base font-bold uppercase tracking-[0.2em] text-emerald-50 transition-all active:scale-95 hover:bg-emerald-50 hover:text-emerald-950 hover:border-emerald-50"
                                    >
                                        Contact
                                    </Link>
                                </motion.div>
                            </div>
                            
                            {/* Subtle Footer inside menu */}
                            <motion.div 
                                variants={itemVariants}
                                className="absolute bottom-16 text-[0.7rem] font-medium uppercase tracking-[0.4em] text-emerald-100/20"
                            >
                                Lamika Moalboal · 2026
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
