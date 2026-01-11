"use client";

import { motion } from "framer-motion";
import { CheckCircle, Mail, Key, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function SuccessPage() {
    return (
        <main className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-4 overflow-hidden relative">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-green/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-xl w-full relative z-10">
                {/* Success Icon */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 12, stiffness: 200 }}
                    className="flex justify-center mb-8"
                >
                    <div className="w-24 h-24 bg-neon-green/20 rounded-full flex items-center justify-center border border-neon-green/50 shadow-[0_0_30px_rgba(0,255,148,0.2)]">
                        <CheckCircle size={48} className="text-neon-green" />
                    </div>
                </motion.div>

                {/* Main Content */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl text-center shadow-2xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tighter"
                    >
                        PAGAMENTO CONFIRMADO! 🚀
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg mb-10"
                    >
                        Sua jornada como investidor de elite no E-commerce acaba de começar.
                    </motion.p>

                    {/* Access Credentials Box */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-black/40 border border-neon-green/20 rounded-2xl p-6 mb-10 text-left relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-3 opacity-20">
                            <Key size={40} className="text-neon-green" />
                        </div>

                        <h2 className="text-neon-green font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                            <Key size={14} /> Suas Credenciais de Acesso
                        </h2>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-white/5 rounded-lg text-white">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold">Usuário</p>
                                    <p className="text-white font-medium">Seu E-mail de compra</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-white/5 rounded-lg text-white">
                                    <Key size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold">Senha Padrão</p>
                                    <p className="text-white font-medium italic">5 primeiros dígitos do seu CPF</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <div className="space-y-4">
                        <Button
                            variant="primary"
                            size="xl"
                            fullWidth
                            className="shadow-[0_0_20px_rgba(0,255,148,0.3)] font-black uppercase"
                            onClick={() => window.location.href = 'https://omninvest-ai-platform.vercel.app/login'}
                        >
                            ACESSAR PLATAFORMA <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>

                        <p className="text-[10px] text-gray-500 uppercase tracking-widest">
                            Um e-mail de confirmação também foi enviado para você.
                        </p>
                    </div>
                </div>

                {/* Support Link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 text-center"
                >
                    <a
                        href="#"
                        className="text-gray-500 hover:text-white transition-colors text-sm flex items-center justify-center gap-2"
                    >
                        Precisa de ajuda? Fale com o Suporte <ExternalLink size={14} />
                    </a>
                </motion.div>
            </div>
        </main>
    );
}
