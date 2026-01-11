"use client";

import { motion } from "framer-motion";
import { ArrowRight, Lock } from "lucide-react";
import { Button } from "./ui/Button";

export function AggressiveCTA() {
    return (
        <section className="w-full py-32 bg-black relative overflow-hidden flex flex-col items-center justify-center text-center px-4">

            {/* Background Pulse */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-green/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="relative z-10 max-w-2xl space-y-6 md:space-y-8"
            >
                <h2 className="text-4xl md:text-7xl font-extrabold text-white leading-tight">
                    Área do <span className="text-neon-green">Assinante</span>
                </h2>

                <p className="text-base md:text-xl text-gray-400 px-2">
                    Já possui acesso ao ecossistema? <br className="hidden md:block" />
                    Para logar na plataforma e iniciar sua operação, clique no botão abaixo.
                </p>

                <div className="flex flex-col items-center gap-4 w-full max-w-md mx-auto">
                    <motion.div
                        animate={{
                            scale: [1, 1.03, 1],
                            boxShadow: [
                                "0 0 20px rgba(0, 255, 148, 0.2)",
                                "0 0 50px rgba(0, 255, 148, 0.5)",
                                "0 0 20px rgba(0, 255, 148, 0.2)"
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
                            onClick={() => window.location.href = 'https://omniinvestia.com.br/login-kiwify'}
                        >
                            LOGAR AGORA
                        </Button>
                    </motion.div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Lock size={12} />
                        Compra 100% Segura e Acesso Imediato
                    </div>
                </div>
            </motion.div>

        </section>
    );
}
