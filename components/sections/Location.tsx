'use client';

import { Cormorant_Garamond, Manrope } from 'next/font/google';
import { MapPin, Clock, Phone, Sparkles, ArrowUpRight, Navigation } from 'lucide-react';
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
    { label: 'Operational Window', value: 'Daily · 08:00 — 22:00', icon: <Clock size={18} /> },
    { label: 'Direct Sync', value: '+63 917 000 0000', icon: <Phone size={18} /> },
    { label: 'Environment', value: 'Coastal Zen / Biophilic Design', icon: <Sparkles size={18} /> },
];

export default function Location() {
    return (
        <section 
            id="location" 
            className={`${bodyFont.className} relative isolate overflow-hidden bg-[#f6f2eb] py-28 pb-40 md:px-12 md:py-40`}
        >
            {/* --- Architectural Background Elements --- */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0v60M0 30h60' fill='none' stroke='%23133a2b' stroke-width='0.5'/%3E%3C/svg%3E")` }} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_2%_2%,rgba(24,120,73,0.08),transparent_40%)]" />

            <div className="relative mx-auto max-w-[1400px] z-10 px-6">
                <div className="grid gap-20 lg:grid-cols-[1fr_1fr] items-start">
                    
                    {/* --- Content Column --- */}
                    <div className="space-y-16">
                        <div className="space-y-6">
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-3 text-[#1e5f46]"
                            >
                                <Navigation size={14} className="animate-pulse" />
                                <span className="text-[0.65rem] font-black uppercase tracking-[0.4em]">Coordinates 09.9442° N</span>
                            </motion.div>
                            
                            <BlurText
                                text="Find us where the coast meets the craft"
                                className={`${headlineFont.className} text-6xl leading-[0.95] tracking-tight text-[#133a2b] sm:text-7xl md:text-8xl max-w-2xl`}
                                delay={40}
                                animateBy="words"
                            />
                            
                            <p className="max-w-xl text-lg text-[#1e5f46]/70 leading-relaxed font-medium">
                                Positioned along the iconic <span className="text-[#133a2b]">Panagsama Road</span>, Lamika serves as a sanctuary for those seeking refined gastronomy in the heart of Moalboal.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {visitDetails.map((detail, idx) => (
                                <motion.div 
                                    key={detail.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-8 rounded-2xl border border-[#133a2b]/5 bg-white shadow-sm hover:shadow-md transition-all group"
                                >
                                    <div className="flex items-center gap-3 text-[#1e5f46] mb-6 transition-transform group-hover:scale-105 origin-left">
                                        <div className="p-3 rounded-full bg-[#f6f2eb] text-[#133a2b]">
                                            {detail.icon}
                                        </div>
                                        <span className="text-[0.6rem] font-bold uppercase tracking-widest opacity-60">{detail.label}</span>
                                    </div>
                                    <p className="text-sm font-bold text-[#133a2b] leading-relaxed">{detail.value}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                            <motion.a
                                href="https://www.google.com/maps/dir/?api=1&destination=9.944230890117273,123.37753641026508"
                                target="_blank"
                                rel="noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex h-16 items-center justify-center rounded-full bg-[#133a2b] px-10 text-[0.7rem] font-black uppercase tracking-[0.2em] text-white shadow-lg shadow-[#133a2b]/10"
                            >
                                Get Directions <ArrowUpRight size={16} className="ml-2" />
                            </motion.a>
                            
                            <div className="px-6 py-4 rounded-full border border-[#133a2b]/10 text-[#1e5f46]/40 text-[0.6rem] font-bold uppercase tracking-widest hidden sm:block">
                                // Arrival Expected in 0m
                            </div>
                        </div>
                    </div>

                    {/* --- Map Column --- */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="relative"
                    >
                        {/* Custom Map Frame */}
                        <div className="absolute -inset-4 border border-[#133a2b]/10 rounded-[3rem] pointer-events-none" />
                        <div className="absolute -top-8 -right-8 w-32 h-32 border-t border-r border-[#133a2b]/20 rounded-tr-[4rem] pointer-events-none" />
                        
                        <div className="relative aspect-square w-full overflow-hidden rounded-[2.5rem] bg-white shadow-2xl border-[12px] border-white">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.8765176579104!2d123.37753641026508!3d9.944230890117273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33abe8efab6aa863%3A0x53a65f2e84a006b1!2sPanagsama%20Rd%2C%20Moalboal%2C%20Cebu!5e0!3m2!1sen!2sph!4v1776574668172!5m2!1sen!2sph" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0, filter: 'contrast(1.05) saturate(0.9) brightness(1.02)' }} 
                                allowFullScreen 
                                loading="lazy" 
                                referrerpolicy="no-referrer-when-downgrade"
                            />
                            
                            {/* Map UI Overlay */}
                            <div className="absolute top-8 left-8 p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-[#133a2b]/10 text-[#133a2b] shadow-xl space-y-2">
                                <p className="text-[0.55rem] font-black uppercase tracking-widest text-[#1e5f46]">Terminal Point</p>
                                <p className="text-sm font-bold font-mono">Basdiot, Moalboal</p>
                                <div className="h-px w-8 bg-[#1e5f46]/30" />
                                <p className="text-[0.6rem] opacity-50 font-medium font-mono tracking-tighter uppercase">Status: Accessible</p>
                            </div>

                            <div className="absolute bottom-10 right-10 h-16 w-16 rounded-full bg-[#133a2b] flex items-center justify-center text-white shadow-2xl animate-bounce">
                                <MapPin size={32} fill="currentColor" />
                            </div>
                        </div>

                        {/* Visual Meta */}
                        <div className="mt-12 flex justify-between items-center text-[0.6rem] font-mono text-[#133a2b]/30 uppercase tracking-[0.2em]">
                             <span>Navigation Data // SYNCED</span>
                             <span>© Lamika Sensory Lab — 2024</span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}