'use client';

import Image from 'next/image';
import { Cormorant_Garamond, Manrope } from 'next/font/google';

const headlineFont = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['500', '600', '700'],
});

const bodyFont = Manrope({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});


export default function Menu() {
    return (
        <section id="menu" className="bg-[#f6f7f4] px-6 py-20 min-h-screen">
            <div className="mx-auto max-w-7xl">
                <h2 className="text-3xl font-semibold text-emerald-950">Our Menu</h2>
                <p className="mt-3 max-w-2xl text-emerald-900/80">This is a simple menu page component.</p>
            </div>
        </section>
    );
}