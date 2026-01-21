'use client';
import { droneData } from '@/data/droneData';
import { motion } from 'framer-motion';

export default function PricingTiers({ onContactClick }: { onContactClick: () => void }) {
    return (
        <section className="py-24 bg-black relative" id="pricing">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-5xl font-bold font-space text-center mb-16 text-white">MISSION PARAMETERS</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {droneData.pricing.map((tier, i) => (
                        <motion.div
                            key={tier.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className={`p-8 rounded-2xl border ${tier.id === 'government' ? 'bg-zinc-900 border-blue-500/50 shadow-[0_0_30px_rgba(0,122,255,0.2)]' : 'bg-black/50 border-white/10'} hover:border-white/30 transition-all group`}
                        >
                            <h3 className="text-xl font-bold font-space text-white mb-2">{tier.name}</h3>
                            <p className="text-3xl font-rajdhani text-exec-blue font-bold mb-6">{tier.price}</p>
                            <ul className="space-y-4 mb-8">
                                {tier.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-sm font-rajdhani text-gray-400">
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button
                                onClick={onContactClick}
                                className={`w-full py-3 font-bold font-space text-sm tracking-widest rounded transition ${tier.id === 'government' ? 'bg-blue-600 text-white hover:bg-blue-500' : 'border border-white/20 text-white hover:bg-white/10'}`}
                            >
                                SELECT
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
