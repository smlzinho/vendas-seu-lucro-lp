"use client";

import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2 } from "lucide-react";

const testimonials = [
    {
        name: "Marcelo Santos",
        role: "Ex-CLT, agora Drop 6 dígitos",
        content: "Em 24h a IA achou um produto de nicho pet que eu nunca veria. Fiz minha primeira venda no mesmo dia. O sistema de criativos é bizarro de rápido.",
        result: "R$ 12.450,00 nos primeiros 15 dias",
        image: "/avatars/marcelo.png"
    },
    {
        name: "Ana Julia Lima",
        role: "Mãe e Empreendedora",
        content: "Eu não tinha tempo para minerar. Agora o Radar faz tudo enquanto cuido dos meus filhos. É literalmente apertar um botão e ver as sugestões.",
        result: "ROI de 4.5x em 1 semana",
        image: "/avatars/ana.png"
    },
    {
        name: "Ricardo Oliveira",
        role: "Dono de Loja Shopify",
        content: "O que eu gastava com ferramentas de mineração e editores era quase 2 mil por mês. Com a plataforma, economizei isso e ainda vendo mais.",
        result: "Economia de R$ 1.800/mês",
        image: "/avatars/ricardo.png"
    },
    {
        name: "Beatriz Costa",
        role: "Iniciante no Digital",
        content: "O game de treinamento me deu a confiança que faltava. Fechar vendas no WhatsApp com a IA me ensinou a converter qualquer cliente.",
        result: "Taxa de conversão subiu 35%",
        image: "/avatars/beatriz.png"
    }
];

export function Testimonials() {
    return (
        <section className="w-full py-24 bg-dark-bg relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,255,148,0.05)_0%,transparent_70%)] pointer-events-none" />

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-green/10 border border-neon-green/20 text-neon-green text-xs font-bold uppercase tracking-widest mb-4"
                    >
                        <Star size={12} fill="currentColor" /> Prova Real de Resultados
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-black text-white"
                    >
                        Quem usa, <span className="text-glow-green">não volta atrás.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 rounded-2xl bg-dark-card/40 border border-white/5 hover:border-neon-green/30 transition-all group relative"
                        >
                            <Quote className="absolute top-4 right-4 text-white/5 group-hover:text-neon-green/10 transition-colors" size={40} />

                            <div className="flex flex-col gap-1.5 mb-4">
                                <span className="text-[10px] font-bold text-yellow-500/80 uppercase tracking-widest">Avaliação 4.9/5</span>
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={14} fill="#FFD700" className="text-yellow-500" />
                                    ))}
                                </div>
                            </div>

                            <p className="text-gray-400 text-sm leading-relaxed mb-6 italic">
                                "{t.content}"
                            </p>

                            <div className="mt-auto pt-6 border-t border-white/5">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 shrink-0 bg-dark-bg">
                                        <img
                                            src={t.image}
                                            alt={t.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm tracking-tight">{t.name}</h4>
                                        <p className="text-[10px] text-gray-500 uppercase tracking-wider">{t.role}</p>
                                    </div>
                                </div>
                                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neon-green/5 text-neon-green text-[11px] font-bold border border-neon-green/10">
                                    <CheckCircle2 size={12} /> {t.result}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-500 text-sm">
                        Mais de 14.230 empreendedores usam este sistema para escalar suas vendas todos os dias.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
