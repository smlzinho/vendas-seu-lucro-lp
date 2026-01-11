"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    { q: "Eu sou iniciante, vou conseguir usar?", a: "Com certeza. Além da IA fazer as partes difíceis (encontrar produtos, criar copy e vídeos), você terá acesso a um treinamento passo a passo que ensina como vender do zero absoluto, mesmo que você nunca tenha vendido nada na internet." },
    { q: "A IA realmente cria os anúncios sozinha?", a: "Sim. Nossa IA analisa o produto, escreve a copy persuasiva e gera o vídeo narrado. Você só precisa revisar e colocar para rodar. Não precisa aparecer nem contratar editores." },
    { q: "Vou precisar investir em estoque ou logística?", a: "Não, a menos que você queira. Temos treinamentos exclusivos de alavancagem de capital sem gastar nada, e trabalhamos também com o modelo de Drop Nacional e Internacional, onde você só compra o produto após o cliente pagar. Risco zero de estoque parado." },
    { q: "Quais ferramentas precisarei contratar por fora?", a: "Zero. O sistema substitui ferramentas de mineração, editores de vídeo, redatores e designers. Você economiza mais de R$ 800 todos os meses." },
    { q: "Funciona para quem mora no Brasil?", a: "Perfeitamente. O Radar de Fornecedores é focado em fornecedores nacionais (Brás, SP, SC) e importadores oficiais que entregam rápido." },
    { q: "Em quanto tempo vejo resultado?", a: "Nossos melhores alunos fazem a primeira venda em 24h a 48h usando o Radar de Produtos e o Gerador de Criativos." },
    { q: "Terei suporte humanizado?", a: "Com certeza. Além dos tutoriais dentro da plataforma, você tem acesso ao nosso time de suporte especializado via WhatsApp para garantir que você não pare no meio do caminho." },
    { q: "É uma assinatura ou pagamento único?", a: "Nesta Oferta Beta, o acesso é vitalício com pagamento único. Você paga uma vez e tem acesso a todas as ferramentas e futuras atualizações sem mensalidades." },
];

export function FAQ() {
    return (
        <section className="w-full py-20 bg-dark-card border-t border-white/5">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl font-bold text-center mb-12 text-white">
                    Perguntas Frequentes
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <FAQItem question={faq.q} answer={faq.a} />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center border-t border-white/5 pt-8">
                    <p className="text-gray-500 text-sm">
                        Domine o E-commerce © 2026. Todos os direitos reservados. <br />
                        Termos de Uso | Política de Privacidade
                    </p>
                </div>
            </div>
        </section>
    );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-white/10 rounded-xl bg-dark-bg/50 overflow-hidden transition-colors hover:border-white/20">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left"
            >
                <span className="font-medium text-white text-lg">{question}</span>
                {isOpen ? <Minus className="text-neon-green" /> : <Plus className="text-gray-400" />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="p-6 pt-0 text-gray-400 leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
