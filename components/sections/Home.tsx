'use client';

import Image from 'next/image';

export default function Home() {
    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white px-6 py-20 md:py-32">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="flex flex-col justify-center space-y-8">
                        {/* Headline */}
                        <div>
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
                                All-time
                                <br />
                                <span className="text-orange-500">Highest Rated</span>
                                <br />
                                Recipes
                            </h1>
                            <p className="text-lg text-gray-600 max-w-md leading-relaxed">
                                We source sustainable & line caught seafood, as well as live crustaceans everyday.
                            </p>
                        </div>

                        {/* App Store Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a
                                href="#"
                                className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                            >
                                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.05 13.5c-.02-1.62.74-3.12 2.04-3.99-.84-.7-2.04-1.1-3.27-1.1-2.73 0-5.01 1.97-5.34 4.58H8.5c-.49 0-.96.07-1.4.21V6.5C7.1 5.12 8.22 4 9.6 4h4.8c1.38 0 2.5 1.12 2.5 2.5v7zm-5.72-2.24h2.72c-.29-.96-.98-1.72-1.86-2.03-.88.31-1.57 1.07-1.86 2.03z" />
                                </svg>
                                Download on the App Store
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                            >
                                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M3 13.5h8v8H5.5a2.5 2.5 0 0 1-2.5-2.5v-5.5zm17.84-9.34c.1.1.16.23.16.38 0 .35-.29.64-.64.64-.15 0-.28-.06-.38-.16L3.5 20.5l-.5-.5L19.84 4.16z" />
                                </svg>
                                Get it on Google Play
                            </a>
                        </div>
                    </div>

                    {/* Right Visual Element */}
                    <div className="flex flex-col items-center justify-center">
                        <div className="relative w-full max-w-md">
                            {/* Main Circle with Image */}
                            <div className="relative w-100 h-100 mx-auto rounded-full overflow-hidden shadow-2xl">
                                <Image
                                    src="/featured-dish.jpg"
                                    alt="Featured Dish"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Sample Order Card */}
                            <div className="absolute bottom-0 right-0 bg-white rounded-xl shadow-xl p-4 w-62 transform translate-y-12">
                                <div className="space-y-3">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-bold text-gray-900">Somatian Drink</h3>
                                            <p className="text-sm text-gray-500">Delicious Somatian Drink</p>
                                        </div>
                                        <span className="text-lg font-bold text-gray-900">$10.00</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <span className="text-yellow-400">★ 4.3 very Good</span>
                                        <span className="text-gray-500">(117)</span>
                                    </div>
                                    <p className="text-xs text-gray-600">2.5 km away · Free Delivery</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}