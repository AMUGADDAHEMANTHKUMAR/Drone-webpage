'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
    onContactClick: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        setMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }} animate={{ y: 0 }}
                className={`fixed top-6 left-0 right-0 z-50 transition-all duration-300`}
            >
                <div className={`max-w-7xl mx-auto px-6 transition-all ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-4 w-full' : 'mt-2 bg-white/5 backdrop-blur-md border border-white/10 py-3 rounded-full'}`}>
                    <div className="flex justify-between items-center px-4">
                        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                                <span className="text-black font-bold">H</span>
                            </div>
                            <span className="font-space font-bold tracking-widest text-white text-sm md:text-base">HEMANTH KUMAR.A</span>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex gap-8">
                            <button onClick={() => scrollTo('overview')} className="font-rajdhani text-sm tracking-wide text-white/70 hover:text-white transition">OVERVIEW</button>
                            <button onClick={() => scrollTo('specs')} className="font-rajdhani text-sm tracking-wide text-white/70 hover:text-white transition">SPECS</button>
                            <button onClick={onContactClick} className="font-rajdhani text-sm tracking-wide text-white/70 hover:text-white transition">CONTACT</button>
                        </div>

                        <div className="flex items-center gap-4">
                            <button
                                onClick={onContactClick}
                                className={`hidden md:block px-5 py-2 font-bold font-space text-xs rounded-lg transition ${scrolled ? 'bg-white text-black' : 'bg-white text-black hover:shadow-[0_0_15px_white]'}`}
                            >
                                INQUIRE
                            </button>

                            {/* Mobile Menu Button */}
                            <button
                                className="md:hidden text-white p-2"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                <div className="w-6 h-0.5 bg-white mb-1.5"></div>
                                <div className="w-6 h-0.5 bg-white mb-1.5"></div>
                                <div className="w-6 h-0.5 bg-white"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-32 px-8 md:hidden"
                    >
                        <div className="flex flex-col gap-8 text-center">
                            <button onClick={() => scrollTo('overview')} className="text-2xl font-space font-bold text-white">OVERVIEW</button>
                            <button onClick={() => scrollTo('specs')} className="text-2xl font-space font-bold text-white">SPECS</button>
                            <button onClick={() => { setMobileMenuOpen(false); onContactClick(); }} className="text-2xl font-space font-bold text-blue-500">CONTACT</button>
                            <button onClick={() => setMobileMenuOpen(false)} className="absolute top-8 right-8 text-white/50 p-4">✕</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
