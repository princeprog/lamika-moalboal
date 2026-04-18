'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Manrope } from 'next/font/google';

const navFont = Manrope({
    subsets: ['latin'],
    weight: ['500', '600', '700'],
});

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: '/#home', label: 'Home' },
        { href: '/#menu', label: 'Menu' },
        { href: '/#about-us', label: 'About Us' },
        { href: '/#location', label: 'Location' },
    ];

    return (
        <header className={`${navFont.className} sticky top-0 z-50`}>
            <nav className="border-b border-white/15 bg-emerald-950/64 backdrop-blur-lg">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
                    <Link href="/" className="flex items-center gap-3">
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
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200/85">Lamika</p>
                            <p className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-emerald-50/70">Moalboal</p>
                        </div>
                    </Link>

                    <div className="hidden md:flex items-center gap-7">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="group relative py-2 text-[0.76rem] font-semibold uppercase tracking-[0.14em] text-emerald-50/85 transition-colors duration-200 hover:text-white"
                            >
                                {link.label}
                                <span className="absolute -bottom-[1px] left-0 h-[2px] w-full origin-left scale-x-0 bg-emerald-200 transition-transform duration-300 group-hover:scale-x-100" />
                            </Link>
                        ))}
                    </div>

                    <Link
                        href="/#location"
                        className="hidden md:inline-flex items-center justify-center rounded-full border border-emerald-100/55 px-5 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-emerald-50 transition-colors duration-200 hover:bg-emerald-50 hover:text-emerald-950"
                    >
                        Reserve
                    </Link>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex flex-col space-y-1.5 rounded-md p-2 text-emerald-50 transition-colors hover:bg-white/10 md:hidden"
                        aria-label="Toggle navigation"
                        aria-expanded={isOpen}
                    >
                        <div className={`h-0.5 w-5 bg-current transition-all duration-300 ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
                        <div className={`h-0.5 w-5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                        <div className={`h-0.5 w-5 bg-current transition-all duration-300 ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
                    </button>
                </div>

                {isOpen && (
                    <div className="border-t border-emerald-100/20 px-4 py-3 sm:px-6 md:hidden">
                        <div className="space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="block rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-50/85 transition-colors duration-200 hover:bg-white/10 hover:text-white"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                        <Link
                            href="/#location"
                            onClick={() => setIsOpen(false)}
                            className="mt-3 inline-flex w-full items-center justify-center rounded-lg border border-emerald-100/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-50 transition-colors duration-200 hover:bg-emerald-50 hover:text-emerald-950"
                        >
                            Reserve
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    );
}