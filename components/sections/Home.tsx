'use client';

import Image from 'next/image';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import { ArrowDown, MoveRight } from 'lucide-react';
import { motion } from 'motion/react';

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
        <section id="home" className={`${bodyFont.className} flex flex-col w-full bg-[#1e5f46]`}>
            {/* --- HERO SECTION ---  */}
            {/* Clean Flexbox structure. No absolute positioning overlaps for content. */}
            <div className="relative h-screen min-h-[600px] w-full flex flex-col justify-between pt-32 pb-16 md:pb-20 px-6 md:px-12">
                
                {/* Background Group (Absolutely positioned ONLY behind the content) */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div 
                        initial={{ scale: 1.15 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
                        className="relative h-full w-full"
                    >
                        <Image
                            src="/lamika-bg.jpg"
                            alt="Hero Background"
                            fill
                            priority
                            className="object-cover"
                        />
                    </motion.div>
                    {/* Gradients to ensure text legibility */}
                    <div className="absolute inset-0 bg-emerald-950/10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e5f46] via-emerald-950/20 to-transparent" />
                    <div className="dot-grain absolute inset-0 opacity-[0.1]" />
                </div>
                
                {/* Top Ribbons / Headers */}
                <div className="relative z-10 w-full flex flex-col items-center top-4 md:top-8">
                     <motion.p 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-[0.6rem] md:text-[0.75rem] font-bold uppercase tracking-[0.5em] md:tracking-[0.8em] text-white/50 text-center"
                    >
                        Experience the Language of Taste
                    </motion.p>
                </div>
                
                {/* Center Content: Headline & CTA */}
                <div className="relative z-10 w-full flex flex-col items-center justify-center flex-1 gap-12 md:gap-16">
                    <div className="flex flex-col items-center gap-0 md:gap-2">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className={`${headlineFont.className} text-[4.5rem] sm:text-[6rem] md:text-[9rem] font-medium leading-[0.85] tracking-tighter text-white text-center drop-shadow-2xl`}
                        >
                            Sunny food.
                        </motion.h1>
                        
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className={`${headlineFont.className} text-[4.5rem] sm:text-[6rem] md:text-[9rem] font-medium leading-[0.85] tracking-tighter text-emerald-300 text-center drop-shadow-2xl`}
                        >
                            <span className="italic">Golden</span> mood.
                        </motion.h1>
                    </div>

                    <motion.a
                        href="#menu"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-4 rounded-full bg-[#c2412c] px-8 md:px-12 py-4 md:py-6 text-[0.65rem] md:text-[0.8rem] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-white shadow-xl hover:shadow-2xl transition-all"
                    >
                        Explore Menu <ArrowDown className="h-4 w-4 md:h-5 md:w-5" />
                    </motion.a>
                </div>
            </div>

            {/* --- LAB / BRAND NARRATIVE SECTION --- */}
            {/* Regular flow section. No absolute positioning overlaps with the hero. */}
            <div className="w-full relative z-20 bg-[#1e5f46] border-t border-white/5">
                {/* Brand Marquee line separator */}
                <div className="flex w-full overflow-hidden bg-emerald-950/80 py-4 md:py-6 border-b border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
                    <div className="flex animate-marquee whitespace-nowrap gap-12 md:gap-24 px-12 text-[0.6rem] md:text-[0.7rem] font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] text-emerald-400/50">
                        {Array(8).fill(null).map((_, i) => (
                            <span key={i}>
                                Low-FODMAP // Zero Refined Sugar // Moalboal Heritage //
                            </span>
                        ))}
                    </div>
                </div>

                {/* Narrative Area */}
                <div className="mx-auto max-w-7xl px-6 md:px-12 py-20 md:py-32">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 place-items-start"
                    >
                        {/* Statement Left */}
                        <div className="flex flex-col">
                            <div className="mb-8 md:mb-12 flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-emerald-900/50 text-emerald-400 border border-emerald-400/20">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="h-8 w-8 md:h-10 md:w-10">
                                    <path d="M12 2C8 2 4 6 4 11s4 9 8 9 8-4 8-9-4-9-8-9z" />
                                    <path d="M12 20v-5" />
                                    <path d="M12 2s3 4 3 9-3 9-3 9" />
                                </svg>
                            </div>
                            
                            <h3 className={`${headlineFont.className} text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.1] md:leading-[1.05] text-emerald-50 mb-6`}>
                                A flavor-rich, <br />
                                moalboal-sourced <br />
                                <span className="text-emerald-400 italic font-light">prebiotic</span> experience.
                            </h3>
                        </div>

                        {/* Description Right */}
                        <div className="flex flex-col lg:justify-end lg:pt-10 gap-8 h-full">
                            <p className="text-[0.85rem] md:text-[1rem] font-medium leading-[1.8] md:leading-[2.2] text-emerald-100/70 max-w-lg lg:ml-auto">
                                Equilibrium reached through botanical science and coastal heritage. Every dish is a curated selection designed for vibrant longevity, using zero refined sugar and honoring our local roots.
                            </p>
                            
                            <div className="hidden lg:block w-full h-[1px] bg-white/10 my-4" />

                            <motion.a
                                href="#about-us"
                                whileHover={{ x: 10 }}
                                className="inline-flex items-center gap-4 text-[0.75rem] md:text-[0.85rem] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase text-emerald-400 transition-colors hover:text-white group w-fit lg:ml-auto"
                            >
                                Discover Our Science 
                                <MoveRight className="h-4 w-4 md:h-5 md:w-5" />
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}