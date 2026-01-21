'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavbarProps {
    onContactClick: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
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
                        <span className="font-space font-bold tracking-widest text-white">HEMANTH KUMAR.A</span>
                    </div>
                    <div className="hidden md:flex gap-8">
                        <button onClick={() => scrollTo('overview')} className="font-rajdhani text-sm tracking-wide text-white/70 hover:text-white transition">OVERVIEW</button>
                        <button onClick={() => scrollTo('specs')} className="font-rajdhani text-sm tracking-wide text-white/70 hover:text-white transition">SPECS</button>
                        <button onClick={onContactClick} className="font-rajdhani text-sm tracking-wide text-white/70 hover:text-white transition">CONTACT</button>
                    </div>
                    <button
                        onClick={onContactClick}
                        className={`px-5 py-2 font-bold font-space text-xs rounded-lg transition ${scrolled ? 'bg-white text-black' : 'bg-white text-black hover:shadow-[0_0_15px_white]'}`}
                    >
                        INQUIRE
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}
