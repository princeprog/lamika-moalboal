import { Cormorant_Garamond, Manrope } from 'next/font/google';

const headlineFont = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['500', '600', '700'],
});

const bodyFont = Manrope({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

const visitDetails = [
    { label: 'Address', value: 'Panagsama Road, Basdiot, Moalboal, Cebu' },
    { label: 'Open Hours', value: 'Daily · 8:00 AM to 10:00 PM' },
    { label: 'Reservations', value: '+63 917 000 0000' },
    { label: 'Ambiance', value: 'Relaxed coastal dining with upstairs seating' },
];

export default function Location() {
    return (
        <section id="location" className={`${bodyFont.className} relative overflow-hidden bg-[#eef3ed] px-6 py-20 md:py-24`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(12,123,92,0.12),transparent_46%)]" />

            <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.02fr_0.98fr]">
                <div className="max-w-2xl">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-emerald-700/85">
                        Location
                    </p>

                    <h2 className={`${headlineFont.className} mt-4 text-4xl leading-[0.97] text-emerald-950 sm:text-5xl`}>
                        Find Lamika in the heart of Moalboal
                    </h2>

                    <p className="mt-5 text-sm leading-relaxed text-emerald-900/78 sm:text-base">
                        Easy to reach and designed for lingering meals, Lamika offers a refined setting for family
                        gatherings, date nights, and relaxed afternoons by the coast.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <a
                            href="https://maps.google.com/?q=Moalboal+Cebu"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center rounded-full bg-emerald-950 px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-emerald-50 transition-colors duration-200 hover:bg-emerald-900"
                        >
                            Get Directions
                        </a>
                        <a
                            href="#menu"
                            className="inline-flex items-center justify-center rounded-full border border-emerald-950/30 px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-emerald-950 transition-colors duration-200 hover:bg-emerald-100/60"
                        >
                            Browse Menu
                        </a>
                    </div>
                </div>

                <div className="rounded-[2rem] border border-emerald-950/10 bg-white p-6 shadow-[0_28px_60px_-38px_rgba(2,16,12,0.55)] sm:p-7">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-emerald-700">
                        Visit Details
                    </p>

                    <div className="mt-5 space-y-3">
                        {visitDetails.map((detail) => (
                            <article key={detail.label} className="rounded-2xl border border-emerald-950/10 bg-emerald-50/55 p-4">
                                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-emerald-700/85">
                                    {detail.label}
                                </p>
                                <p className="mt-1 text-sm font-semibold text-emerald-950">{detail.value}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}