'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-dark">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/20 to-brand-dark z-0" />
            <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-brand-accent/10 rounded-full blur-3xl animate-pulse-glow" />
            <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl animate-pulse-glow delay-1000" />

            <div className="container mx-auto px-4 z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="space-y-6 text-center md:text-left"
                >
                    <div className="inline-block px-4 py-1 rounded-full border border-brand-accent/30 bg-brand-accent/5 backdrop-blur-sm text-brand-accent text-sm font-medium tracking-wide">
                        #1 Refreshing Choice
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                        Feel the <span className="text-brand-accent drop-shadow-[0_0_15px_rgba(0,229,255,0.6)]">Spark.</span><br />
                        Taste the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">Chill.</span>
                    </h1>
                    <p className="text-lg text-gray-300 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        Experience the ultimate burst of flavor with ALMARS COLA. Crafted with real fruit extracts and perfectly carbonated for that premium fizz.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                        <button className="px-8 py-4 bg-brand-accent text-brand-dark font-bold rounded-full hover:bg-white hover:shadow-[0_0_20px_rgba(0,229,255,0.6)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group">
                            Shop Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-sm">
                            Explore Products
                        </button>
                    </div>
                </motion.div>

                {/* Hero Image / 3D Visualization */}
                <div className="relative h-[500px] md:h-[700px] flex items-center justify-center">
                    {/* Main Bottle */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative w-full h-full"
                    >
                        {/* Abstract Floating Elements (Simulated with simple shapes if image includes them, but we add more depth) */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="relative w-full h-full flex items-center justify-center"
                        >
                            <div className="relative w-[500px] h-[500px] md:w-[650px] md:h-[650px]">
                                <Image
                                    src="/images/hero-bottle.png"
                                    alt="Almars Cola Refreshing Bottle"
                                    fill
                                    className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-brand-accent to-transparent" />
            </motion.div>
        </section>
    );
}
