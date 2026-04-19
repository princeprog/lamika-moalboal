'use client';

import Image from 'next/image';
import { useMemo, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Cormorant_Garamond, Manrope } from 'next/font/google';

const headlineFont = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['500', '600', '700'],
});

const bodyFont = Manrope({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

const menuItems = [
    {
        title: 'Beef Bulgogi Bowl',
        description: 'Slow-cooked beef with pickled onion and sunny-side egg over turmeric rice.',
        price: 'PHP 340',
        tag: 'Best Seller',
        image: '/lamika-menu-1.jpg',
    },
    {
        title: 'Creamy Coconut Curry',
        description: 'Aromatic curry with tender cuts, scallions, and warm house spices.',
        price: 'PHP 365',
        tag: 'Chef Pick',
        image: '/lamika-menu-2.jpg',
    },
    {
        title: 'Citrus Chicken Quinoa',
        description: 'Grilled chicken breast, quinoa medley, mango salsa, and crisp greens.',
        price: 'PHP 320',
        tag: 'Healthy',
        image: '/lamika-menu-3.jpg',
    },
    {
        title: 'Golden Spring Rolls',
        description: 'Crispy vegetable spring rolls served with sweet and tangy dip.',
        price: 'PHP 240',
        tag: 'Starter',
        image: '/lamika-menu-4.jpg',
    },
    {
        title: 'Lamika Smash Burger',
        description: 'Double-seared beef patty, cheddar melt, fried egg, and house pickles.',
        price: 'PHP 390',
        tag: 'Popular',
        image: '/lamika-menu-5.jpg',
    },
    {
        title: 'Fresh Fruit Cooler',
        description: 'Cold-pressed tropical fruits with mint, served on ice.',
        price: 'PHP 180',
        tag: 'Refreshing',
        image: '/lamika-menu-6.jpg',
    },
];


export default function Menu() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const previousIndex = useMemo(
        () => (currentIndex - 1 + menuItems.length) % menuItems.length,
        [currentIndex]
    );
    const nextIndex = useMemo(() => (currentIndex + 1) % menuItems.length, [currentIndex]);

    const goToNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % menuItems.length);
    }, []);

    const goToPrevious = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + menuItems.length) % menuItems.length);
    }, []);

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            goToNext();
        }, 6000);
        return () => clearInterval(timer);
    }, [isPaused, goToNext]);

    return (
        <section id="menu" className={`${bodyFont.className} relative isolate overflow-hidden bg-[#f6f2eb] py-20 md:py-28`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_2%_2%,rgba(24,120,73,0.08),transparent_40%)]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-12 flex items-end justify-between gap-4 md:mb-16"
                >
                    <div>
                        <span className="mb-3 block text-[0.7rem] font-bold uppercase tracking-[0.3em] text-[#1e5f46]">Gastronomy</span>
                        <h2 className={`${headlineFont.className} text-5xl leading-none text-[#133a2b] sm:text-6xl md:text-7xl`}>
                            Popular Food
                        </h2>
                    </div>

                    <div className="hidden items-center gap-4 md:flex">
                        <button
                            type="button"
                            onClick={goToPrevious}
                            aria-label="Previous menu item"
                            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#1e5f46]/20 bg-white text-[#1e5f46] transition-all duration-300 hover:bg-[#1e5f46] hover:text-white"
                        >
                            <ArrowLeft size={20} />
                        </button>

                        <button
                            type="button"
                            onClick={goToNext}
                            aria-label="Next menu item"
                            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#1e5f46]/20 bg-white text-[#1e5f46] transition-all duration-300 hover:bg-[#1e5f46] hover:text-white"
                        >
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </motion.div>
            </div>

            <div
                className="relative w-full"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div className="relative flex h-[500px] items-center justify-center overflow-hidden sm:h-[620px] [perspective:2000px] [transform-style:preserve-3d]">
                    <AnimatePresence initial={false} mode="popLayout">
                        {menuItems.map((item, index) => {
                            let position = (index - currentIndex + menuItems.length) % menuItems.length;
                            if (position > menuItems.length / 2) position -= menuItems.length;

                            const isActive = position === 0;
                            const isPrevious = position === -1;
                            const isNext = position === 1;
                            const isVisible = Math.abs(position) <= 1;

                            if (!isVisible) return null;

                            return (
                                <motion.div
                                    key={item.title}
                                    initial={false}
                                    animate={{
                                        x: `${position * 75}%`,
                                        scale: isActive ? 1 : 0.8,
                                        rotateY: position * -30,
                                        z: isActive ? 0 : -250,
                                        opacity: isActive ? 1 : 0.4,
                                        zIndex: isActive ? 30 : 10,
                                    }}
                                    transition={{
                                        duration: 0.9,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                    className={`absolute h-[85%] w-[88%] overflow-hidden rounded-[0.5rem] shadow-[0_45px_100px_-30px_rgba(0,0,0,0.45)] sm:h-[80%] sm:w-[75%] md:w-[45%] ${isActive ? 'cursor-default' : 'cursor-pointer'
                                        }`}
                                    onClick={() => {
                                        if (isPrevious) goToPrevious();
                                        if (isNext) goToNext();
                                    }}
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        priority={isActive}
                                        sizes={isActive ? "(max-width: 768px) 100vw, 50vw" : "30vw"}
                                        className="object-cover"
                                    />

                                    {/* Minimalist Overlay for depth */}
                                    {!isActive && (
                                        <div className="absolute inset-0 bg-black/40 transition-opacity duration-700" />
                                    )}

                                    {/* Navigation Buttons inside side cards */}
                                    {!isActive && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/40 bg-white/10 text-white backdrop-blur-md transition-transform hover:scale-110">
                                                {isPrevious ? <ArrowLeft size={24} strokeWidth={2.5} /> : <ArrowRight size={24} strokeWidth={2.5} />}
                                            </div>
                                        </div>
                                    )}

                                    {/* Content info for active card */}
                                    {isActive && (
                                        <>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                                            <div className="absolute inset-x-0 bottom-0 p-8 text-white sm:p-12">
                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.3, duration: 0.6 }}
                                                    className="mb-4 flex items-center justify-between gap-3"
                                                >
                                                    <span className="text-[0.65rem] font-bold uppercase tracking-[0.4em] text-white/70">
                                                        {item.tag}
                                                    </span>
                                                    <div className="h-px flex-1 bg-white/20" />
                                                    <span className="text-sm font-medium tracking-widest">{item.price}</span>
                                                </motion.div>

                                                <motion.h3
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.4, duration: 0.6 }}
                                                    className={`${headlineFont.className} text-5xl leading-tight sm:text-6xl`}
                                                >
                                                    {item.title}
                                                </motion.h3>
                                                <motion.p
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.5, duration: 0.6 }}
                                                    className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-white/75"
                                                >
                                                    {item.description}
                                                </motion.p>
                                            </div>
                                        </>
                                    )}
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>

                    <div className="absolute inset-x-0 bottom-4 z-40 flex items-center justify-center gap-2.5 md:bottom-6">
                        {menuItems.map((_, index) => (
                            <span
                                key={index}
                                className={`h-2.5 rounded-full transition-all duration-300 ${currentIndex === index ? 'w-6 bg-white/95' : 'w-2.5 bg-white/55'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="relative z-50 mt-5 flex items-center justify-center gap-2 md:hidden">
                <button
                    type="button"
                    onClick={goToPrevious}
                    aria-label="Previous menu item"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#1e5f46]/25 bg-white text-[#1e5f46] shadow-sm transition-transform active:scale-90"
                >
                    <ArrowLeft size={18} strokeWidth={2.5} />
                </button>
                <button
                    type="button"
                    onClick={goToNext}
                    aria-label="Next menu item"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#1e5f46]/25 bg-white text-[#1e5f46] shadow-sm transition-transform active:scale-90"
                >
                    <ArrowRight size={18} strokeWidth={2.5} />
                </button>
            </div>
        </section>
    );
}