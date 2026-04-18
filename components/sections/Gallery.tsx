import { Cormorant_Garamond, Manrope } from 'next/font/google';
import CircularGallery from '../CircularGallery';

const headlineFont = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['500', '600', '700'],
});

const bodyFont = Manrope({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

const galleryItems = [
    { image: '/featured-dish.jpg', text: 'Seafood Pasta' },
    { image: '/lumpia-lamike.jpg', text: 'Golden Lumpia' },
    { image: '/lumpia-lamika.jpg', text: 'Signature Starter' },
    { image: '/lamika-bg.jpg', text: 'Lamika Ambiance' },
    { image: '/featured-dish.jpg', text: 'Chef Selection' },
    { image: '/lumpia-lamike.jpg', text: 'Crisp and Fresh' },
];

export default function Gallery() {
    return (
        <section id="gallery" className={`${bodyFont.className} relative isolate overflow-hidden bg-[#071a14] px-6 py-20 md:py-24`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_12%,rgba(167,243,208,0.18),transparent_34%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(3,18,12,0.2),rgba(3,18,12,0.62))]" />

            <div className="relative z-10 mx-auto max-w-6xl">
                <div className="max-w-2xl">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-emerald-100/80">
                        Visual Tasting Journey
                    </p>

                    <h2 className={`${headlineFont.className} mt-4 text-4xl leading-[0.97] text-white sm:text-5xl`}>
                        Signature Dishes, Captured Simply
                    </h2>

                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/82 sm:text-base">
                        A curated flow of Lamika plates and moments with a clean, elegant presentation.
                    </p>
                </div>

                <div className="relative mt-10 overflow-hidden rounded-[1.75rem] border border-emerald-100/20 bg-emerald-950/45 p-3 shadow-[0_34px_64px_-40px_rgba(0,0,0,0.9)] backdrop-blur-md">
                    <div className="h-[420px] sm:h-[520px]">
                        <CircularGallery
                            items={galleryItems}
                            textColor="#ddf7e4"
                            bend={0.9}
                            borderRadius={0.06}
                            scrollSpeed={1.5}
                            scrollEase={0.05}
                            font='600 24px "Cormorant Garamond", serif'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}