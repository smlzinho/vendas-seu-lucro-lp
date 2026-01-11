"use client";

import { motion } from "framer-motion";
import { XCircle, AlertTriangle } from "lucide-react";

const pains = [
    { text: "Compra cursos caros e não tem resultado", delay: 0 },
    { text: "Perde horas procurando fornecedor no Google", delay: 0.1 },
    { text: "Não sabe qual produto está vendendo agora", delay: 0.2 },
    { text: "Gasta dinheiro com anúncios ruins", delay: 0.3 },
    { text: "Está travado por excesso de informação", delay: 0.4 },
];

export function Problem() {
    return (
        <section className="w-full py-20 bg-dark-card border-y border-white/5 relative overflow-hidden">

            {/* Background Noise */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

            <div className="container mx-auto px-6 md:px-4 max-w-2xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 text-neon-red font-bold uppercase tracking-widest text-sm mb-4">
                        <AlertTriangle size={16} />
                        Identificou o problema?
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight break-words max-w-[90%] mx-auto">
                        Por que você ainda não <span className="text-neon-red text-glow-red">ficou rico</span> com E-commerce?
                    </h2>
                </motion.div>

                <div className="space-y-4">
                    {pains.map((pain, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: pain.delay }}
                            className="flex items-start md:items-center gap-4 p-4 rounded-xl bg-black/40 border border-white/5 hover:border-neon-red/30 transition-colors group text-left"
                        >
                            <div className="min-w-[40px] h-[40px] rounded-full bg-neon-red/10 flex items-center justify-center text-neon-red group-hover:scale-110 transition-transform shrink-0">
                                <XCircle size={20} />
                            </div>
                            <p className="text-gray-300 font-medium text-sm md:text-lg leading-snug">
                                {pain.text}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-10 text-center"
                >
                    <p className="text-gray-500 italic">"O problema não é você. É que você está jogando sozinho contra robôs."</p>
                </motion.div>

            </div>
        </section>
    );
}
