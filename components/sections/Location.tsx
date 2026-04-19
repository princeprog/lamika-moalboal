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
            className={`${bodyFont.className} relative isolate bg-[#133a2b] min-h-screen flex flex-col justify-center py-32 overflow-hidden`}
        >
            {/* Massive Background Typography for Editorial Depth */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black uppercase tracking-tighter text-white/[0.02] select-none pointer-events-none whitespace-nowrap`}>
                Arrival 09.94°
            </div>

            <div className="mx-auto max-w-[1500px] px-6 lg:px-12 relative z-10">
                <div className="flex flex-col gap-24">

                    {/* --- Part 1: The Narrative Header --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="grid lg:grid-cols-[1fr_0.8fr] gap-12 items-end"
                    >
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 text-emerald-400">
                                <div className="h-px w-12 bg-emerald-400/30" />
                                <span className="text-[0.6rem] font-black uppercase tracking-[0.5em]">The Terminal Point</span>
                            </div>

                            <BlurText
                                text="Where your sensory journey begins"
                                className={`${headlineFont.className} text-7xl md:text-[8rem] leading-[0.85] tracking-tighter text-white max-w-4xl`}
                                delay={30}
                            />
                        </div>

                        <div className="pb-4">
                            <p className="max-w-[400px] text-lg text-emerald-100/60 leading-relaxed font-medium">
                                A curated space in the heart of Basdiot, designed to bridge luxury and coastal heritage. <span className="text-emerald-300">Accessible directly from Panagsama Road.</span>
                            </p>
                        </div>
                    </motion.div>

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
                                    className="p-10 rounded-[2rem] bg-white/5 backdrop-blur-sm shadow-xl border border-white/10 group hover:bg-emerald-400 transition-all duration-500"
                                >
                                    <div className="flex flex-col gap-6">
                                        <div className="flex items-center justify-between">
                                            <div className="text-emerald-400 group-hover:text-emerald-950 transition-colors">
                                                {detail.icon}
                                            </div>
                                            <span className="text-[0.55rem] font-black uppercase tracking-[0.3em] text-emerald-100/30 group-hover:text-emerald-950/40 transition-colors">
                                                {detail.label}
                                            </span>
                                        </div>
                                        <p className={`${headlineFont.className} text-3xl text-white group-hover:text-emerald-950 transition-colors`}>
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
                                className="flex items-center justify-between p-10 rounded-[2rem] bg-emerald-400 text-emerald-950 group transition-all"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="p-4 rounded-full bg-emerald-950 text-emerald-400">
                                        <Navigation size={24} />
                                    </div>
                                    <span className="text-xl font-bold uppercase tracking-widest">Get Directions</span>
                                </div>
                                <ArrowUpRight size={32} className="opacity-40" />
                            </motion.a>
                        </div>

                        {/* Map Column */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="relative rounded-[2.5rem] overflow-hidden bg-emerald-950 shadow-2xl border-[16px] border-emerald-900/50 group"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.8765176579104!2d123.37753641026508!3d9.944230890117273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33abe8efab6aa863%3A0x53a65f2e84a006b1!2sPanagsama%20Rd%2C%20Moalboal%2C%20Cebu!5e1!3m2!1sen!2sph!4v1776574668172!5m2!1sen!2sph"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.2)' }}
                                className="min-h-[600px] transition-all duration-1000 group-hover:scale-110"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />

                            {/* Floating Map Label */}
                            <div className="absolute top-10 left-10 p-6 rounded-2xl bg-[#0a251c]/90 backdrop-blur-md text-white border border-white/10 shadow-2xl flex items-center gap-4">
                                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-emerald-400 text-[#0a251c]">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-[0.6rem] font-bold uppercase tracking-widest text-emerald-400">Location Tag</p>
                                    <p className="text-sm font-semibold italic">Basdiot, Moalboal</p>
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
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/10"
                    >
                        <div className="flex gap-8 text-[0.6rem] font-black uppercase tracking-[0.4em] text-emerald-100/20">
                            <span>GPS: 10.3157 N</span>
                            <span>ALT: 24m MSL</span>
                        </div>
                        <div className="h-px flex-grow bg-white/5 hidden md:block" />
                        <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-emerald-400 bg-white/5 px-4 py-2 rounded-full">
                            Operational Status: Online
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}