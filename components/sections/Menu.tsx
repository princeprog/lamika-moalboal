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
        <section id="menu" className={`${bodyFont.className} relative isolate min-h-screen overflow-hidden`}>
            <Image
                src="/lumpia-lamike.jpg"
                alt="Lamika signature lumpia plate"
                fill
                className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/78 via-emerald-950/58 to-black/35" />

            <div className="relative z-10 mx-auto grid min-h-[88vh] max-w-6xl items-center gap-10 px-6 py-16 md:py-20 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="max-w-2xl">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-emerald-100/80">
                        Featured Starter
                    </p>

                    <h2 className={`${headlineFont.className} mt-4 max-w-3xl text-4xl leading-[0.97] text-white sm:text-5xl lg:text-6xl`}>
                        Lumpia Ala Lamika
                    </h2>

                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/82 sm:text-base">
                        Crisp hand-rolled spring rolls with vibrant vegetables and herbs, served with Lamika&apos;s
                        signature dip for a clean balance of sweetness and heat.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <a
                            href="#gallery"
                            className="inline-flex items-center justify-center rounded-full bg-emerald-200 px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-emerald-950 transition-colors duration-200 hover:bg-emerald-100"
                        >
                            View Gallery
                        </a>
                        <a
                            href="#location"
                            className="inline-flex items-center justify-center rounded-full border border-emerald-100/60 px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-emerald-50 transition-colors duration-200 hover:bg-white/10"
                        >
                            Reserve Table
                        </a>
                    </div>
                </div>

                <div className="rounded-[1.75rem] border border-white/25 bg-white/10 p-6 shadow-[0_34px_64px_-40px_rgba(0,0,0,0.9)] backdrop-blur-md sm:p-7">
                    <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-emerald-100/85">
                        Chef&apos;s Notes
                    </p>

                    <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/82">
                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-200" />
                            <span>Freshly rolled in-house daily for a delicate but crisp bite.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-200" />
                            <span>Balanced filling with carrots, cabbage, herbs, and light seasoning.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-200" />
                            <span>Paired with a bright house-made sauce for a clean finish.</span>
                        </li>
                    </ul>

                    <div className="mt-6 flex items-end justify-between border-t border-white/20 pt-5">
                        <div>
                            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-emerald-100/85">
                                Starting at
                            </p>
                            <p className="mt-1 text-3xl font-semibold text-emerald-200">$8</p>
                        </div>

                        <span className="rounded-full border border-emerald-100/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-50/90">
                            Signature
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}