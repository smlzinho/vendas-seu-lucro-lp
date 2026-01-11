"use client";

import { Check, X, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";

export function Comparison() {
    return (
        <section id="pricing" className="w-full py-20 bg-dark-bg">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
                    Pare de <span className="text-neon-red">Rasgar Dinheiro</span>.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Old Way */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="p-6 md:p-8 rounded-2xl bg-dark-card/50 border border-white/11 transition-all"
                    >
                        <h3 className="text-lg md:text-xl font-bold text-gray-400 mb-6 uppercase tracking-widest">O Jeito Antigo</h3>
                        <ul className="space-y-4">
                            <OldItem text="Curso de Dropshipping (R$ 997)" />
                            <OldItem text="Ferramenta de Mineração (R$ 297/mês)" />
                            <OldItem text="Editor de Vídeo (R$ 500/mês)" />
                            <OldItem text="Hospedagem + Shopify (R$ 150/mês)" />
                            <OldItem text="Mentorias Vagas (R$ 2.000+)" />
                        </ul>
                        <div className="mt-8 pt-8 border-t border-white/10">
                            <p className="text-xs md:text-sm text-gray-500">Custo Mensal Estimado</p>
                            <p className="text-2xl md:text-3xl font-bold text-neon-red line-through">R$ 3.944,00</p>
                        </div>
                    </motion.div>

                    {/* New Way (The Platform) */}
                    <motion.div
                        id="new-way"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-dark-card to-neon-green/5 border border-neon-green/30 relative overflow-hidden shadow-neon-green"
                    >
                        <div className="absolute top-0 right-0 bg-neon-green text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                            INDISPENSÁVEL
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-widest text-glow-green">OmnInvest AI - Combo Gold</h3>
                        <p className="text-neon-green text-xs font-bold mb-6">+20 FUNCIONALIDADES PREMIUM</p>
                        <ul className="grid grid-cols-1 gap-y-3">
                            <NewItem text="Minerador de Produtos Virais" />
                            <NewItem text="Radar de Fornecedores 24h" />
                            <NewItem text="Criador de Criativos com IA" />
                            <NewItem text="Navegador de Nichos Ocultos" />
                            <NewItem text="Analista de Anúncios Profissional" />
                            <NewItem text="Gerador de Copy (VSL & Ads)" />
                            <NewItem text="Detector de Tendências" />
                            <NewItem text="Calculadora de ROI Automática" />
                            <NewItem text="Suporte Humanizado (WhatsApp)" />
                            <NewItem text="Treinamento Passo a Passo" />
                            <NewItem text="Acesso Vitalício e Imediato" />
                            <li className="text-neon-green text-xs font-bold pt-2 ml-8 italic">
                                + Outras 8 Ferramentas Exclusivas inclusas
                            </li>
                        </ul>
                        <div className="mt-8 pt-8 border-t border-neon-green/20">
                            <p className="text-sm text-neon-green mb-1">Investimento Único (Hoje)</p>
                            <div className="flex flex-col mb-6">
                                <span className="text-lg text-gray-500 line-through decoration-neon-red/50">de R$ 3.944,00</span>
                                <p className="text-5xl font-black text-white tracking-tighter text-glow-green">
                                    R$ 47,90
                                </p>
                            </div>

                            <motion.div
                                animate={{
                                    scale: [1, 1.02, 1],
                                    boxShadow: [
                                        "0 0 15px rgba(0, 255, 148, 0.2)",
                                        "0 0 35px rgba(0, 255, 148, 0.4)",
                                        "0 0 15px rgba(0, 255, 148, 0.2)"
                                    ]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="w-full"
                            >
                                <Button
                                    size="xl"
                                    fullWidth
                                    icon={ArrowRight}
                                    className="bg-neon-green text-black hover:bg-[#00D47A] border-none"
                                    onClick={() => window.open('https://pay.kiwify.com.br/P2vOqMs', '_blank')}
                                >
                                    COMEÇAR AQUI
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

function OldItem({ text }: { text: string }) {
    return (
        <li className="flex items-center gap-3 text-gray-500 line-through decoration-neon-red/50">
            <X size={18} className="text-neon-red shrink-0" />
            {text}
        </li>
    );
}

function NewItem({ text }: { text: string }) {
    return (
        <li className="flex items-center gap-3 text-white font-medium">
            <div className="w-5 h-5 rounded-full bg-neon-green/20 flex items-center justify-center shrink-0">
                <Check size={12} className="text-neon-green" />
            </div>
            {text}
        </li>
    );
}
