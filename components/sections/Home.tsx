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
        <section id="home" className={`${bodyFont.className} relative isolate min-h-screen overflow-hidden`}>
            <Image
                src="/lamika-bg.jpg"
                alt="Lamika dining space"
                fill
                priority
                className="object-cover"
            />

            <div className="absolute inset-0 bg-emerald-950/56" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/56 via-black/36 to-black/12" />

            <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
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
                        <a
                            href="#location"
                            className="inline-flex items-center justify-center rounded-full border border-emerald-100/60 px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-emerald-50 transition-colors duration-200 hover:bg-white/10"
                        >
                            Reserve
                        </a>
                    </div>
                </div>

                <div className="mx-auto w-full max-w-[26rem] lg:justify-self-end">
                    <div className="overflow-hidden rounded-[2rem] border border-white/25 bg-white/10 p-3 shadow-[0_38px_72px_-36px_rgba(0,0,0,0.86)] backdrop-blur-sm">
                        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                            <Image
                                src="/featured-dish.jpg"
                                alt="Lamika featured dish"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        <div className="mt-3 flex items-center justify-between px-1 pb-1">
                            <div>
                                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-emerald-200/85">
                                    Chef&apos;s Recommendation
                                </p>
                                <p className="mt-1 text-sm font-semibold text-white">Signature Seafood Pasta</p>
                            </div>
                            <p className="text-lg font-semibold text-emerald-100">$18</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}