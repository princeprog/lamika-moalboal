'use client';

import { Cormorant_Garamond, Manrope } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, ArrowRight } from 'lucide-react';

const headlineFont = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['500', '600', '700'],
});

const bodyFont = Manrope({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

export default function Footer() {
    return (
        <footer className={`${bodyFont.className} bg-[#f6f2eb] text-[#133a2b]/80 py-20 px-6 md:px-12 relative isolate overflow-hidden`}>
            {/* Subtle background texture for a premium tactile feel */}
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/paper.png")` }} />
            
            <div className="mx-auto max-w-7xl relative z-10">
                
                {/* --- Part 1: Newsletter Section --- */}
                <div className="mb-24">
                    <h3 className={`${headlineFont.className} text-3xl text-[#133a2b] mb-2`}>Sign up for our newsletter!</h3>
                    <p className="text-sm text-[#1e5f46]/60 mb-8 max-w-lg">
                        Stay up to date with culinary innovations, seasonal menu reveals, and exclusive events at Lamika.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 max-w-4xl">
                        <input 
                            type="email" 
                            placeholder="Enter your email address here" 
                            className="flex-1 bg-white border border-[#133a2b]/10 rounded-lg px-6 py-4 text-[#133a2b] placeholder:text-[#133a2b]/30 focus:outline-none focus:border-[#133a2b]/30 transition-colors shadow-sm"
                        />
                        <button className="bg-[#133a2b] text-[#f6f2eb] font-bold px-8 py-4 rounded-lg hover:bg-[#1e5f46] transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-md uppercase tracking-widest text-xs">
                            Subscribe
                        </button>
                    </div>
                </div>

                <div className="h-px w-full bg-[#133a2b]/10 mb-16" />

                {/* --- Part 2: Main Links Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
                    
                    {/* Brand Column */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 relative rounded-full overflow-hidden ring-1 ring-[#133a2b]/20">
                                <Image src="/lamika-logo.jpg" alt="Lamika Logo" fill className="object-cover" />
                            </div>
                            <span className={`${headlineFont.className} text-3xl text-[#133a2b] tracking-widest uppercase`}>Lamika</span>
                        </div>
                        
                        <p className="max-w-[340px] text-sm leading-relaxed text-[#1e5f46]/70 font-medium italic">
                            "Our philosophy resides at the intersection of artisanal heritage and contemporary culinary science."
                        </p>
                        
                        {/* Social Indices with High-Fidelity SVGs */}
                        <div className="flex gap-6 text-[#133a2b]/40">
                            {/* Instagram */}
                            <Link href="https://www.instagram.com/lamikamoalboal" target="_blank" rel="noopener noreferrer" className="hover:text-[#133a2b] transition-all hover:scale-110">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </Link>
                            {/* Facebook */}
                            <Link href="https://www.facebook.com/profile.php?id=61584968672749" target="_blank" rel="noopener noreferrer" className="hover:text-[#133a2b] transition-all hover:scale-110">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </Link>
                            {/* Email Link */}
                            <Link href="mailto:lamikamoalboal@gmail.com" className="hover:text-[#133a2b] transition-all hover:scale-110">
                                <Mail size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#133a2b]">Section Links</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><Link href="#home" className="hover:text-[#133a2b] transition-colors">Home Page</Link></li>
                            <li><Link href="#menu" className="hover:text-[#133a2b] transition-colors">Curated Menu</Link></li>
                            <li><Link href="#about-us" className="hover:text-[#133a2b] transition-colors">Our Philosophy</Link></li>
                            <li><Link href="#gallery" className="hover:text-[#133a2b] transition-colors">Visual Archive</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#133a2b]">Experience</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><Link href="#" className="hover:text-[#133a2b] transition-colors">Private Events</Link></li>
                            <li><Link href="#" className="hover:text-[#133a2b] transition-colors">Group Dining</Link></li>
                            <li><Link href="#" className="hover:text-[#133a2b] transition-colors">Wine Cellar</Link></li>
                            <li><Link href="#" className="hover:text-[#133a2b] transition-colors">Gift Vouchers</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#133a2b]">Connections</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li className="text-[#133a2b]/60 lowercase italic">Basdiot, Moalboal, Cebu</li>
                            <li><Link href="mailto:lamikamoalboal@gmail.com" className="hover:text-[#133a2b] transition-colors">lamikamoalboal@gmail.com</Link></li>
                            <li><Link href="tel:+639170000000" className="hover:text-[#133a2b] transition-colors">+63 917 000 0000</Link></li>
                            <li><Link href="#location" className="text-[#133a2b] font-bold flex items-center gap-2">Find our space <ArrowRight size={14}/></Link></li>
                        </ul>
                    </div>
                </div>

                {/* --- Part 3: Bottom Legal Bar --- */}
                <div className="border-t border-[#133a2b]/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[0.7rem] uppercase font-bold tracking-[0.2em] text-[#133a2b]/25">
                    <p>© 2025 LAMIKA MOALBOAL. ALL RIGHTS RESERVED.</p>
                    <div className="flex gap-10">
                        <Link href="#" className="hover:text-[#133a2b] transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-[#133a2b] transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-[#133a2b] transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}