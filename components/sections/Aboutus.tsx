'use client';

import Image from 'next/image';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import { ArrowRight, Info, MapPin, Wind } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import BlurText from '../BlurText';

const headlineFont = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['500', '600', '700'],
});

const bodyFont = Manrope({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

const categories = [
    {
        id: '01',
        title: 'Heirloom Proteins',
        description: 'Sustainable seafood and precision-seared cuts from local harvesters.',
        category: 'Main Course',
        image: '/lamika-menu-1.jpg',
    },
    {
        id: '02',
        title: 'Botanical Broths',
        description: 'Light, reductive extractions of seasonal greens and aromatic spices.',
        category: 'Soups & Salads',
        image: '/lamika-menu-2.jpg',
    },
    {
        id: '03',
        title: 'Green Synthesis',
        description: 'Artisanal vegan textures designed to challenge the traditional palate.',
        category: 'Plant Based',
        image: '/lamika-menu-3.jpg',
    },
    {
        id: '04',
        title: 'Infusion Lab',
        description: 'Crafted refreshments, cold-pressed ferments, and signature elixirs.',
        category: 'Beverage',
        image: '/lamika-menu-4.jpg',
    },
];

export default function Aboutus() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const yImg = useTransform(scrollYProgress, [0, 1], [-60, 60]);

    return (
        <section 
            id="about-us" 
            ref={containerRef}
            className={`${bodyFont.className} bg-[#133a2b] px-6 py-28 pb-40 md:px-12 md:py-40 relative isolate overflow-hidden`}
        >
            {/* --- Architectural Grid & Grain --- */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40L40 0M0 0l40 40' fill='none' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/svg%3E")` }} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.1),transparent_70%)]" />
            
            <div className="mx-auto max-w-[1400px] relative z-20">
                {/* --- Context Header --- */}
                <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-4">
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: 60 }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="h-px bg-emerald-400" 
                            />
                            <span className="text-[0.65rem] font-bold uppercase tracking-[0.4em] text-emerald-400">Established 2024 / Moalboal</span>
                        </div>
                        
                        <BlurText
                            text="Blending tradition & innovation"
                            className={`${headlineFont.className} text-6xl leading-[1.05] tracking-tight text-white sm:text-7xl md:text-9xl max-w-5xl`}
                            delay={30}
                            animateBy="words"
                            easing="easeOut"
                        />
                    </div>

                    <div className="flex flex-col gap-8 lg:text-right lg:items-end">
                         <div className="flex items-center gap-3 lg:justify-end text-emerald-200/40 text-[0.7rem] font-medium tracking-widest">
                            <MapPin size={12} />
                            <span>GPS 10.3157° N, 123.8854° E</span>
                         </div>
                         <p className="max-w-[340px] text-sm leading-relaxed text-emerald-100/60 font-medium">
                            Our philosophy resides at the intersection of artisanal heritage and contemporary culinary science. Every plate is a study in <span className="text-white">equilibrium</span>.
                         </p>
                    </div>
                </div>

                {/* --- Layered Hero Image --- */}
                <div className="mt-24 grid items-center gap-20 lg:grid-cols-[0.8fr_1.2fr]">
                    <div className="relative group">
                         {/* Decorative Background Frame */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-emerald-400/30" />
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-emerald-400/30" />
                        
                        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] bg-emerald-950 shadow-2xl">
                            <motion.div style={{ y: yImg }} className="relative h-[120%] w-full">
                                <Image
                                    src="/dining-experience.jpg"
                                    alt="Dining experience"
                                    fill
                                    className="object-cover scale-110 filter grayscale-[0.2] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-100"
                                />
                            </motion.div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#133a2b] via-transparent to-transparent opacity-60" />
                            
                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                    <span className="text-[0.6rem] font-bold uppercase tracking-widest text-emerald-300">Live Status</span>
                                </div>
                                <h4 className={`${headlineFont.className} text-4xl`}>The Atmosphere</h4>
                            </div>
                    </div>
                </div>

                <div className="space-y-16">
                    <div className="grid gap-8 sm:grid-cols-2">
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-sm">
                            <Wind size={24} className="text-emerald-400 mb-6" />
                            <h5 className="text-lg font-bold text-white mb-2">Oceanic Sourcing</h5>
                            <p className="text-sm text-emerald-100/50 leading-relaxed">Daily arrivals from the Visayan Sea, handled with clinical precision to preserve oceanic integrity.</p>
                        </div>
                         <div className="p-8 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-sm">
                            <Info size={24} className="text-emerald-400 mb-6" />
                            <h5 className="text-lg font-bold text-white mb-2">Reductive Craft</h5>
                            <p className="text-sm text-emerald-100/50 leading-relaxed">Focusing on fewer, higher-quality ingredients to amplify the inherent character of the land.</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-8 border-t border-white/5 pt-16">
                        <button className="h-20 w-20 flex items-center justify-center rounded-full bg-[#c2412c] text-white shadow-xl transition-transform hover:scale-110 active:scale-90">
                            <ArrowRight size={28} />
                        </button>
                        <div>
                            <p className="text-xl font-bold text-white">Inquire & Discover</p>
                            <p className="text-sm text-emerald-100/40">Our curated space accommodates up to 40 enthusiasts.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- The Culinary Archive (Staggered Grid) --- */}
            <div className="mt-48 relative">
                <div className="flex flex-col gap-6 md:flex-row md:items-end justify-between mb-20">
                    <div className="space-y-2">
                         <p className="text-[0.6rem] font-black uppercase tracking-[0.5em] text-emerald-500">Exhibit 02</p>
                         <h3 className={`${headlineFont.className} text-5xl tracking-tight text-white md:text-8xl`}>
                            The Sensory Archive
                         </h3>
                    </div>
                    <p className="max-w-[400px] text-xs leading-relaxed text-emerald-100/40 uppercase tracking-widest font-bold">
                        A systematic exploration of flavor profiles divided into four essential pillars.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-0">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.15, duration: 0.8 }}
                            className="group relative"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-700">
                                <Image 
                                    src={cat.image} 
                                    alt={cat.title} 
                                    fill 
                                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                                />
                                <div className="absolute inset-0 bg-emerald-950/40 group-hover:bg-transparent transition-all duration-700" />
                                <div className="absolute top-6 left-6 text-white/40 font-mono text-xs">{cat.id}</div>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="inline-block px-3 py-1 rounded-full border border-white/10 text-[0.6rem] uppercase font-bold tracking-widest text-emerald-400">
                                    {cat.category}
                                </div>
                                <h4 className={`${headlineFont.className} text-3xl text-white`}>{cat.title}</h4>
                                <p className="text-sm text-emerald-100/50 leading-relaxed line-clamp-2">{cat.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* --- Floating Meta Info --- */}
            <div className="absolute bottom-10 right-10 flex gap-10 text-[0.6rem] font-bold tracking-[0.3em] text-emerald-100/20 uppercase vertical-text hidden xl:flex">
                 <span>Lamika Sensory Lab</span>
                 <span>Archive Volume I</span>
                 <span>// 2024.0.1</span>
            </div>
          </div>
        </section>
    );
}