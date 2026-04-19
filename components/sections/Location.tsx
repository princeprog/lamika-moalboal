'use client';

import { Cormorant_Garamond, Manrope } from 'next/font/google';
import { ArrowUpRight, Navigation, MapPin, Globe, Compass } from 'lucide-react';
import { motion } from 'motion/react';
import BlurText from '../BlurText';

const headlineFont = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['500', '600', '700'],
});

const bodyFont = Manrope({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

const visitDetails = [
    { label: 'Primary Terminal', value: 'Panagsama Road, Moalboal, Cebu', icon: <MapPin size={18} /> },
    { label: 'Operational Sync', value: 'Daily · 08:00 — 22:00', icon: <Compass size={18} /> },
    { label: 'System Access', value: '+63 917 000 0000', icon: <Globe size={18} /> },
];

export default function Location() {
    return (
        <section 
            id="location" 
            className={`${bodyFont.className} relative isolate bg-[#f6f2eb] pt-32 pb-48 overflow-hidden`}
        >
            {/* Massive Background Typography for Editorial Depth */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black uppercase tracking-tighter text-[#133a2b]/[0.02] select-none pointer-events-none whitespace-nowrap`}>
                Arrival 09.94°
            </div>

            <div className="mx-auto max-w-[1500px] px-6 lg:px-12 relative z-10">
                <div className="flex flex-col gap-24">
                    
                    {/* --- Part 1: The Narrative Header --- */}
                    <div className="grid lg:grid-cols-[1fr_0.8fr] gap-12 items-end">
                        <div className="space-y-8">
                            <motion.div 
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-4 text-[#1e5f46]"
                            >
                                <div className="h-px w-12 bg-[#1e5f46]/30" />
                                <span className="text-[0.6rem] font-black uppercase tracking-[0.5em]">The Terminal Point</span>
                            </motion.div>
                            
                            <BlurText
                                text="Where your sensory journey begins"
                                className={`${headlineFont.className} text-7xl md:text-[8rem] leading-[0.85] tracking-tighter text-[#133a2b] max-w-4xl`}
                                delay={30}
                            />
                        </div>

                        <div className="pb-4">
                             <p className="max-w-[400px] text-lg text-[#1e5f46]/70 leading-relaxed font-medium">
                                A curated space in the heart of Basdiot, designed to bridge luxury and coastal heritage. <span className="text-[#133a2b]">Accessible directly from Panagsama Road.</span>
                             </p>
                        </div>
                    </div>

                    {/* --- Part 2: The Core Interface --- */}
                    <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-4">
                        
                        {/* Info Column */}
                        <div className="grid gap-4">
                            {visitDetails.map((detail, idx) => (
                                <motion.div 
                                    key={detail.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-10 rounded-[2rem] bg-white shadow-sm border border-[#133a2b]/5 group hover:bg-[#133a2b] transition-all duration-500"
                                >
                                    <div className="flex flex-col gap-6">
                                        <div className="flex items-center justify-between">
                                            <div className="text-[#1e5f46] group-hover:text-emerald-300 transition-colors">
                                                {detail.icon}
                                            </div>
                                            <span className="text-[0.55rem] font-black uppercase tracking-[0.3em] text-[#1e5f46]/40 group-hover:text-white/40 transition-colors">
                                                {detail.label}
                                            </span>
                                        </div>
                                        <p className={`${headlineFont.className} text-3xl text-[#133a2b] group-hover:text-white transition-colors`}>
                                            {detail.value}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}

                            <motion.a
                                href="https://www.google.com/maps/dir/?api=1&destination=9.944230890117273,123.37753641026508"
                                target="_blank"
                                rel="noreferrer"
                                whileHover={{ gap: '2rem' }}
                                className="flex items-center justify-between p-10 rounded-[2rem] bg-emerald-100 text-[#133a2b] group transition-all"
                            >
                                <span className="text-sm font-black uppercase tracking-[0.2em]">Start Navigation</span>
                                <div className="h-12 w-12 rounded-full bg-[#133a2b] text-white flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                                    <ArrowUpRight size={24} />
                                </div>
                            </motion.a>
                        </div>

                        {/* Map Column */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="relative rounded-[2.5rem] overflow-hidden bg-white shadow-2xl border-[16px] border-white group"
                        >
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.8765176579104!2d123.37753641026508!3d9.944230890117273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33abe8efab6aa863%3A0x53a65f2e84a006b1!2sPanagsama%20Rd%2C%20Moalboal%2C%20Cebu!5e1!3m2!1sen!2sph!4v1776574668172!5m2!1sen!2sph" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0, filter: 'contrast(1.05) brightness(1.05) saturate(0.95)' }} 
                                className="min-h-[600px] transition-all duration-1000 group-hover:scale-110"
                                allowFullScreen 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                            
                            {/* Floating Map Label */}
                            <div className="absolute top-10 left-10 p-6 rounded-2xl bg-[#0a251c]/90 backdrop-blur-md text-white border border-white/10 shadow-2xl flex items-center gap-4">
                                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-emerald-400 text-[#0a251c]">
                                    <Navigation size={20} />
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-[0.55rem] font-black uppercase tracking-widest text-emerald-300">Target Reached</p>
                                    <p className="text-sm font-bold font-mono">Basdiot, Moalboal</p>
                                </div>
                            </div>

                            {/* Coordinate Scan Line (Pure Aesthetic) */}
                            <motion.div 
                                animate={{ y: ['0%', '100%'] }} 
                                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                                className="absolute top-0 left-0 w-full h-[2px] bg-emerald-400/20 z-20 pointer-events-none" 
                            />
                        </motion.div>
                    </div>

                    {/* --- Part 3: Meta Verification --- */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-[#133a2b]/10 pt-16">
                        <div className="flex gap-12 text-[0.6rem] font-black uppercase tracking-[0.4em] text-[#133a2b]/20">
                            <span className="flex items-center gap-2 underline decoration-emerald-400/30">Verified Point // B.Moalboal</span>
                            <span className="flex items-center gap-2">Update: April 2024</span>
                        </div>
                        <p className="text-[0.6rem] font-black uppercase tracking-[0.4em] text-[#133a2b]/30">© Lamika Cafe Sensory Lab</p>
                    </div>

                </div>
            </div>
        </section>
    );
}