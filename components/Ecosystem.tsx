"use client";

import { motion } from "framer-motion";
import { Search, TrendingUp, Video, Gamepad2, ShoppingBag, BarChart3, Bot, Globe } from "lucide-react";

const features = [
    {
        icon: Globe,
        title: "Radar de Fornecedores",
        desc: "IA que varre a internet 24h por dia encontrando fornecedores ocultos.",
        color: "text-neon-blue",
        border: "group-hover:border-neon-blue/50",
        bg: "group-hover:bg-neon-blue/5"
    },
    {
        icon: TrendingUp,
        title: "Minerador de Tendências",
        desc: "Descubra o produto que vai estourar amanhã, hoje.",
        color: "text-neon-purple",
        border: "group-hover:border-neon-purple/50",
        bg: "group-hover:bg-neon-purple/5"
    },
    {
        icon: Video,
        title: "Estúdio de Criativos IA",
        desc: "Gere vídeos de vendas e fotos de produtos em segundos.",
        color: "text-neon-green",
        border: "group-hover:border-neon-green/50",
        bg: "group-hover:bg-neon-green/5"
    },
    {
        icon: Gamepad2,
        title: "Game de Treinamento",
        desc: "Simule vendas reais no WhatsApp contra nossa IA e ganhe moedas.",
        color: "text-neon-red",
        border: "group-hover:border-neon-red/50",
        bg: "group-hover:bg-neon-red/5"
    },
    {
        icon: ShoppingBag,
        title: "Marketplace Exclusivo",
        desc: "Troque suas moedas por PLRs, Packs e Produtos Físicos.",
        color: "text-yellow-400",
        border: "group-hover:border-yellow-400/50",
        bg: "group-hover:bg-yellow-400/5"
    },
    {
        icon: Bot,
        title: "+10 Agentes Especialistas",
        desc: "Copywriter, Gestor de Tráfego e Estrategista no seu bolso.",
        color: "text-cyan-400",
        border: "group-hover:border-cyan-400/50",
        bg: "group-hover:bg-cyan-400/5"
    }
];

export function Ecosystem() {
    return (
        <section className="w-full py-24 bg-dark-bg relative">
            <div className="container mx-auto px-6 md:px-4 max-w-5xl">

                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-extrabold break-words">
                        O <span className="text-neon-purple">Ecossistema</span> Completo.
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto px-2">
                        Não é só uma ferramenta. É uma fábrica de negócios digitais.
                        Substitua <span className="text-white line-through decoration-neon-red">tudo isso</span> por um único acesso.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`group p-6 rounded-2xl bg-dark-card border border-white/5 transition-all duration-300 hover:-translate-y-2 ${feat.border} ${feat.bg}`}
                        >
                            <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 ${feat.color}`}>
                                <feat.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{feat.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{feat.desc}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
