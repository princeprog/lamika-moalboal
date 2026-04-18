'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/menu', label: 'Menu' },
        { href: '/about', label: 'About Us' },
        { href: '/location', label: 'Location' },
    ];

    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-2">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
                        <div className="w-14 h-14 relative">
                            <Image
                                src="/lamika-logo.jpg"
                                alt="Lamika Cafe and Restaurant"
                                width={56}
                                height={56}
                                priority
                                className="w-full h-full rounded-[50%]"
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="relative px-4 py-2 text-gray-700 font-medium text-sm transition-colors duration-200 group"
                            >
                                {link.label}
                                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                            </Link>
                        ))}
                    </div>

                    {/* Contact Button */}
                    <div className="hidden md:block">
                        <button className="bg-orange-600 text-white px-5 py-2 rounded-lg font-medium text-sm hover:bg-orange-700 transition-colors duration-200 shadow-md hover:shadow-lg">
                            Contact Us
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden flex flex-col space-y-1.5 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        <div className={`w-5 h-0.5 bg-gray-900 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                        <div className={`w-5 h-0.5 bg-gray-900 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
                        <div className={`w-5 h-0.5 bg-gray-900 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden mt-3 pt-3 border-t border-gray-200 space-y-1 pb-3 animate-in fade-in slide-in-from-top-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block px-4 py-2 text-gray-700 font-medium hover:text-orange-600 hover:bg-orange-50 rounded-md transition-all duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <button className="w-full bg-orange-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors duration-200 mt-3">
                            Contact Us
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
}