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

export default function Home() {
    return (
        <section id="home" className={`${bodyFont.className} relative isolate min-h-screen`}>
            <Image
                src="/lamika-bg.jpg"
                alt="Lamika dining space"
                fill
                priority
                className="object-cover"
            />

            <div className="absolute inset-0 bg-emerald-950/56" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/56 via-black/36 to-black/12" />

            <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4.5rem)] max-h-screen max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
                <div className="max-w-2xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-100/80">
                        Lamika Cafe and Restaurant
                    </p>

                    <h1 className={`${headlineFont.className} mt-5 text-5xl leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl`}>
                        Where cravings meet their
                        <span className="text-emerald-200"> perfect match</span>
                    </h1>

                    <p className="mt-5 max-w-xl text-base leading-relaxed text-emerald-50/88 sm:text-lg">
                        A refined dining experience in Moalboal, crafted with fresh ingredients and warm service from
                        first bite to last.
                    </p>

                    <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                        <a
                            href="#menu"
                            className="inline-flex items-center justify-center rounded-full bg-emerald-200 px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-emerald-950 transition-colors duration-200 hover:bg-emerald-100"
                        >
                            View Menu
                        </a>
                    </div>
                </div>

                <div className='relative w-full h-[38rem] mt-10'>
                    <Image
                        src="/landing-image.png"
                        alt="Lamika featured dish"
                        fill
                        className='object-contain'
                    />
                </div>
            </div>
        </section>
    );
}