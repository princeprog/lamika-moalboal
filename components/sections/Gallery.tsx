'use client';

import { Cormorant_Garamond, Manrope } from 'next/font/google';
import Image from 'next/image';
import { motion } from 'framer-motion';

const headlineFont = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['500', '600', '700'],
});

const bodyFont = Manrope({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

// The core gallery items with individual rotation values to create the "fanned" look
const galleryItems = [
    { image: '/gallery1.jpg', text: 'Seafood Pasta', rotate: -3 },
    { image: '/gallery2.jpg', text: 'Golden Lumpia', rotate: 2 },
    { image: '/gallery3.jpg', text: 'Special Gatherings', rotate: -4 },
    { image: '/gallery4.jpg', text: 'Signature Cut', rotate: 3 },
    { image: '/gallery5.jpg', text: 'Special Dinner', rotate: -2 },
    { image: '/gallery6.jpg', text: 'Chef Selection', rotate: 4 },
];

// Duplicate items twice to ensure a perfectly smooth infinite marquee
const marqueeItems = [...galleryItems, ...galleryItems, ...galleryItems];

export default function Gallery() {
    return (
        <section 
            id="gallery" 
            className={`${bodyFont.className} relative isolate min-h-screen flex flex-col justify-center overflow-hidden bg-[#f6f2eb] py-32`}
        >
            {/* --- Subtle Background Pattern --- */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5a25 25 0 1 0 0 50 25 25 0 1 0 0-50zM15 30a15 15 0 1 1 30 0 15 15 0 1 1-30 0z' fill='none' stroke='%23133a2b' stroke-width='1' stroke-dasharray='4 4'/%3E%3C/svg%3E")` }} />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0),rgba(255,255,255,0.4))]" />

            <div className="relative z-10 mx-auto w-full max-w-[1600px] flex flex-col items-center">
                
                {/* --- Typography Header --- */}
                <div className="flex flex-col items-center text-center space-y-6 mb-24 px-4">
                    <div className="inline-flex items-center justify-center rounded-full border border-[#133a2b]/20 px-4 py-1.5 backdrop-blur-sm">
                        <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#1e5f46]">
                            A Feast for the Eyes
                        </span>
                    </div>

                    <h2 className={`${headlineFont.className} text-5xl md:text-7xl lg:text-8xl tracking-tight text-[#133a2b]`}>
                        Taste the vibes through our gallery
                    </h2>
                </div>

                {/* --- Infinite Fanning Marquee --- */}
                <div className="w-full relative py-10 -mx-10 md:mx-0 overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                    <motion.div 
                        className="flex gap-4 md:gap-8 w-max"
                        animate={{ x: ["0%", "-33.333%"] }}
                        transition={{ 
                            repeat: Infinity, 
                            ease: "linear", 
                            duration: 65 // Significantly slower marquee speed for a premium experience
                        }}
                    >
                        {marqueeItems.map((item, index) => (
                            <div 
                                key={index}
                                className="group relative w-[260px] md:w-[340px] flex-shrink-0 origin-center transition-transform duration-500 hover:scale-[1.03] hover:z-20 cursor-pointer"
                                style={{ transform: `rotate(${item.rotate}deg)` }}
                            >
                                {/* Polaroid Card Body */}
                                <div className="rounded-[1.2rem] bg-white p-3 shadow-xl shadow-[#133a2b]/10 ring-1 ring-[#133a2b]/5">
                                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[0.8rem] bg-emerald-950">
                                        <Image
                                            src={item.image}
                                            alt={item.text}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            sizes="(max-width: 768px) 260px, 340px"
                                        />
                                        <div className="absolute inset-0 bg-[#133a2b]/5 transition-opacity duration-300 group-hover:opacity-0" />
                                    </div>
                                    <div className="pb-3 pt-6 text-center">
                                        <h3 className={`${headlineFont.className} text-2xl font-bold tracking-tight text-[#133a2b]`}>
                                            {item.text}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}