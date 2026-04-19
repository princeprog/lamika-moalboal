'use client';

import Image from 'next/image';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import { ArrowDown } from 'lucide-react';
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
        <section 
            id="home" 
            className={`${bodyFont.className} relative isolate h-screen w-full bg-[#022c22] overflow-hidden flex flex-col`}
        >
            
            {/* --- Top Part: The Typographic Stage (Exactly 50%) --- */}
            <div className="relative h-1/2 w-full flex flex-col items-center justify-center p-6 text-center z-10">
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 px-6 py-2 rounded-full border border-emerald-400/20 bg-emerald-950/50 backdrop-blur-md"
                >
                    <span className="text-[0.6rem] font-black uppercase tracking-[0.4em] text-emerald-400">
                        Made with <span className="text-white">Love</span>, Served with <span className="text-white">Joy</span>
                    </span>
                </motion.div>

                <div className="max-w-5xl">
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className={`${headlineFont.className} text-3xl md:text-[7rem] lg:text-[10vw] leading-[0.85] tracking-tighter text-white`}
                    >
                        Experience the <br /> 
                        <span className="italic">Language</span> of Taste
                    </motion.h1>
                </div>
            </div>

            {/* --- The Overlap Action: Circular Button (Perfectly Centered) --- */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <motion.a
                    href="#reservation"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.5 }}
                    className="relative w-24 h-24 md:w-44 md:h-44 rounded-full bg-emerald-500 text-[#022c22] shadow-[0_0_50px_rgba(16,185,129,0.3)] flex flex-col items-center justify-center gap-1 md:gap-2 group transition-shadow hover:shadow-emerald-400/50"
                >
                    <div className="absolute inset-0 rounded-full border-[4px] md:border-[8px] border-[#022c22] opacity-80" />
                    <ArrowDown className="w-4 h-4 md:w-8 md:h-8 group-hover:translate-y-2 transition-transform duration-500" />
                    <span className="text-[0.45rem] md:text-[0.6rem] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-center px-4 md:px-6 leading-tight">
                        RESERVE A <br /> TABLE
                    </span>
                </motion.a>
            </div>

            {/* --- Bottom Part: The Immersive Reveal (Exactly 50%) --- */}
            <div className="relative h-1/2 w-full z-0 overflow-hidden">
                <Image
                    src="/lamika-bg.jpg"
                    alt="Lamika restaurant interior"
                    fill
                    priority
                    className="object-cover"
                />
                
                {/* Subtle Overlays for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#022c22] via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-black/10" />
                
                {/* Visual anchor dots */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                    <div className="h-1 w-10 rounded-full bg-emerald-400" />
                    <div className="h-1 w-3 rounded-full bg-white/20" />
                    <div className="h-1 w-3 rounded-full bg-white/20" />
                </div>
            </div>
        </section>
    );
}