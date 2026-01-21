'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitted(true);
                setTimeout(() => {
                    setSubmitted(false);
                    onClose();
                    setFormData({ name: '', email: '', message: '' });
                }, 3000);
            } else {
                alert("Transmission failed. Secure channel compromised.");
            }
        } catch (error) {
            console.error(error);
            alert("Transmission error.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        className="bg-zinc-900 border border-white/10 p-8 rounded-2xl w-full max-w-md shadow-2xl relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-white/50 hover:text-white"
                        >
                            ✕
                        </button>

                        {!submitted ? (
                            <>
                                <h2 className="text-2xl font-bold font-space text-white mb-2">SECURE CHANNEL</h2>
                                <p className="text-gray-400 text-sm font-rajdhani mb-6">Enter your credentials to establish contact with Command.</p>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-space text-blue-400 mb-1 tracking-widest">IDENTITY</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
                                            placeholder="Full Name as per records"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-space text-blue-400 mb-1 tracking-widest">COMMs LINK</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
                                            placeholder="Email Address"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-space text-blue-400 mb-1 tracking-widest">TRANSMISSION</label>
                                        <textarea
                                            required
                                            rows={4}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
                                            placeholder="Message content..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 text-white font-bold font-space py-4 rounded transition-all shadow-[0_0_20px_rgba(0,122,255,0.3)] hover:shadow-[0_0_30px_rgba(0,122,255,0.5)] flex justify-center"
                                    >
                                        {isLoading ? (
                                            <span className="animate-pulse">ESTABLISHING LINK...</span>
                                        ) : (
                                            "ESTABLISH LINK"
                                        )}
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-green-500 text-2xl">✓</span>
                                </div>
                                <h3 className="text-xl font-bold font-space text-white">TRANSMISSION SENT</h3>
                                <p className="text-gray-400 mt-2 font-rajdhani">Stand by for response from Command.</p>
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
