import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-brand-dark border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">ALMARS COLA</h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Feel the Spark. Taste the Chill. delivering the refreshing taste of premium fruit juices and sodas.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link href="/" className="text-gray-400 hover:text-brand-accent text-sm">Home</Link></li>
                            <li><Link href="/products" className="text-gray-400 hover:text-brand-accent text-sm">Our Products</Link></li>
                            <li><Link href="/about" className="text-gray-400 hover:text-brand-accent text-sm">About Us</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-brand-accent text-sm">Distributors</Link></li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Popular Products</h3>
                        <ul className="space-y-3">
                            <li><Link href="/products" className="text-gray-400 hover:text-brand-accent text-sm">Azir Mango</Link></li>
                            <li><Link href="/products" className="text-gray-400 hover:text-brand-accent text-sm">Paneer Soda</Link></li>
                            <li><Link href="/products" className="text-gray-400 hover:text-brand-accent text-sm">Black Bull Energy</Link></li>
                            <li><Link href="/products" className="text-gray-400 hover:text-brand-accent text-sm">Mizzt Green Apple</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-gray-400 text-sm">
                                <MapPin size={18} className="mt-0.5 text-brand-accent shrink-0" />
                                <span>123 Beverage Park, Industrial SIPCOT,<br />Chennai - 600001</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400 text-sm">
                                <Phone size={18} className="text-brand-accent shrink-0" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400 text-sm">
                                <Mail size={18} className="text-brand-accent shrink-0" />
                                <span>contact@almarscola.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} ALMARS COLA. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
