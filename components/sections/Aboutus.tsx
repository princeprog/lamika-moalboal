import Image from 'next/image';
import { Cormorant_Garamond, Manrope } from 'next/font/google';

const headlineFont = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['500', '600', '700'],
});

const bodyFont = Manrope({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

const pillars = [
    {
        title: 'Ingredient-First Kitchen',
        description: 'Fresh produce, thoughtful sourcing, and dishes prepared with consistency every service.',
    },
    {
        title: 'Coastal Hospitality',
        description: 'Warm, attentive service designed to make every visit feel calm, personal, and memorable.',
    },
    {
        title: 'Balanced Craft',
        description: 'A menu that blends comfort with elegance, from light starters to signature seafood plates.',
    },
];

export default function Aboutus() {
    return (
        <section id="about-us" className={`${bodyFont.className} relative isolate overflow-hidden px-6 py-20 md:py-24`}>
            <div className="absolute inset-0 opacity-20">
                <Image
                    src="/lamika-bg.jpg"
                    alt="Lamika interior ambiance"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/95 via-emerald-950/88 to-black/90" />

            <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.08fr_0.92fr]">
                <div className="max-w-2xl">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-emerald-100/80">
                        Our Story
                    </p>

                    <h2 className={`${headlineFont.className} mt-4 text-4xl leading-[0.97] text-white sm:text-5xl`}>
                        A coastal table built on craft, calm, and consistency
                    </h2>

                    <p className="mt-5 text-sm leading-relaxed text-emerald-50/85 sm:text-base">
                        Lamika was created for guests who appreciate flavor, atmosphere, and intentional service. Every
                        plate is designed to feel familiar yet elevated, whether you are here for brunch, sunset
                        coffee, or dinner with friends.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <a
                            href="#menu"
                            className="inline-flex items-center justify-center rounded-full bg-emerald-200 px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-emerald-950 transition-colors duration-200 hover:bg-emerald-100"
                        >
                            Explore Menu
                        </a>
                        <a
                            href="#location"
                            className="inline-flex items-center justify-center rounded-full border border-emerald-100/60 px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-emerald-50 transition-colors duration-200 hover:bg-white/10"
                        >
                            Visit Lamika
                        </a>
                    </div>
                </div>

                <div className="rounded-[2rem] border border-white/20 bg-white/10 p-6 shadow-[0_38px_72px_-36px_rgba(0,0,0,0.86)] backdrop-blur-sm sm:p-7">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-emerald-100/85">
                        What Defines Us
                    </p>

                    <div className="mt-5 space-y-4">
                        {pillars.map((pillar) => (
                            <article key={pillar.title} className="rounded-2xl border border-white/12 bg-black/25 p-4">
                                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-emerald-100">
                                    {pillar.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-emerald-50/80">{pillar.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}