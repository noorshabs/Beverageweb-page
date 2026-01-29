'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingBag, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [lang, setLang] = useState<'EN' | 'TA'>('EN');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent',
                scrolled ? 'glass bg-brand-dark/80 border-brand-accent/20 py-2' : 'bg-transparent py-4'
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <span className="text-2xl font-bold bg-gradient-to-r from-brand-accent to-white bg-clip-text text-transparent group-hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.5)] transition-all">
                            ALMARS COLA
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-white/80 hover:text-brand-accent transition-colors font-medium relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="hidden md:flex items-center space-x-6">
                        <button
                            onClick={() => setLang(lang === 'EN' ? 'TA' : 'EN')}
                            className="flex items-center space-x-1 text-white/80 hover:text-white transition-colors"
                        >
                            <Globe size={18} />
                            <span className="text-sm font-medium">{lang}</span>
                        </button>

                        <button className="relative text-white/80 hover:text-brand-accent transition-colors">
                            <ShoppingBag size={24} />
                            <span className="absolute -top-1 -right-1 bg-brand-accent text-brand-dark text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                0
                            </span>
                        </button>

                        <Link
                            href="/products"
                            className="px-6 py-2 bg-brand-accent text-brand-dark font-bold rounded-full hover:bg-white hover:drop-shadow-[0_0_10px_rgba(0,229,255,0.5)] transition-all transform hover:scale-105"
                        >
                            Shop Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white hover:text-brand-accent transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                className="md:hidden overflow-hidden bg-brand-dark/95 backdrop-blur-xl border-b border-white/10"
            >
                <div className="px-4 pt-2 pb-6 space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="block text-lg text-white/80 hover:text-brand-accent py-2 border-b border-white/5"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex items-center justify-between pt-4">
                        <button
                            onClick={() => setLang(lang === 'EN' ? 'TA' : 'EN')}
                            className="flex items-center space-x-2 text-white/80"
                        >
                            <Globe size={20} />
                            <span>{lang === 'EN' ? 'English' : 'Tamil'}</span>
                        </button>
                        <Link
                            href="/products"
                            className="px-6 py-2 bg-brand-accent text-brand-dark font-bold rounded-full"
                            onClick={() => setIsOpen(false)}
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>
            </motion.div>
        </nav>
    );
}
