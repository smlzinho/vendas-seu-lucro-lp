'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './landing.module.css';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.faqItem} onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4 style={{ fontSize: '18px', fontWeight: 600 }}>{question}</h4>
        <span style={{ fontSize: '24px', color: '#86868b' }}>{isOpen ? '−' : '+'}</span>
      </div>
      {isOpen && <p style={{ marginTop: '16px', color: '#86868b', lineHeight: 1.6 }}>{answer}</p>}
    </div>
  );
};

export default function LandingPage() {
  return (
    <div className={styles.landingWrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.badge}>Acesso Vitalício Liberado</div>
        <h1 className={styles.headline}>Suas Vendas,<br />Seu Lucro.</h1>
        <p className={styles.subheadline}>
          A plataforma tudo-em-um que usa Inteligência Artificial avançada para minerar produtos, criar estratégias e multiplicar seus resultados.
        </p>

        <div className={styles.pricingCard}>
          <span className={styles.oldPrice}>De R$ 3.944,00</span>
          <div className={styles.newPrice}>
            R$ 47<span className={styles.priceCents}>,90</span>
          </div>
          <Link href="/checkout" className={`${styles.ctaButton} ${styles.ctaGold}`}>
            QUERO MEU ACESSO AGORA
          </Link>
          <p style={{ marginTop: '16px', fontSize: '12px', color: '#86868b' }}>
            Pagamento único. Sem mensalidades ocultas.
          </p>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className={styles.section} id="problem-solution">
        <h2 style={{ textAlign: 'center', fontSize: '40px', marginBottom: '40px' }}>O Jogo Mudou.</h2>
        <div className={styles.comparisonGrid}>
          <div className={`${styles.comparisonBox} ${styles.oldWay}`}>
            <h3 style={{ color: '#ff3b30' }}>❌ Jeito Antigo</h3>
            <ul className={styles.comparisonList}>
              <li>Gastar R$ 2.000+ em ferramentas separadas</li>
              <li>Perder horas minerando produtos manualmente</li>
              <li>Ficar no prejuízo sem saber onde errou</li>
              <li>Depender da sorte para escolher o nicho</li>
              <li>Trabalho manual e cansativo</li>
            </ul>
          </div>
          <div className={`${styles.comparisonBox} ${styles.newWay}`}>
            <h3 style={{ color: '#34c759' }}>✅ Com SVSL</h3>
            <ul className={styles.comparisonList}>
              <li>Tudo em um só lugar por um valor simbólico</li>
              <li>IA encontra os produtos virais em segundos</li>
              <li>Simulador de lucro real para evitar prejuízo</li>
              <li>Estratégias validadas com Claude 3.5 e DeepSeek</li>
              <li>Automação que trabalha para você</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ background: '#f5f5f7', padding: '80px 20px' }}>
        <div className={styles.section}>
          <h2 style={{ textAlign: 'center', fontSize: '40px', marginBottom: '16px' }}>+20 Ferramentas Integradas</h2>
          <p style={{ textAlign: 'center', color: '#86868b', marginBottom: '40px' }}>Tudo o que você precisa para dominar o mercado digital.</p>

          <div className={styles.featuresGrid}>
            {[
              { title: "Mineração de Elite", desc: "IA que rastreia os produtos que mais vendem no mundo." },
              { title: "Cursos e Mentorias", desc: "Aulas completas do básico ao avançado em vendas." },
              { title: "Claude 3.5 & DeepSeek", desc: "As IAs mais poderosas para criar suas estratégias." },
              { title: "Simulador de Lucro", desc: "Calcule sua margem real antes de investir um centavo." },
              { title: "Copywriting de Alta Conversão", desc: "Gere textos que vendem em poucos segundos." },
              { title: "Suporte VIP", desc: "Time de especialistas para te ajudar na jornada." }
            ].map((feature, idx) => (
              <div key={idx} className={styles.featureCard}>
                <h4 style={{ fontSize: '20px', marginBottom: '12px' }}>{feature.title}</h4>
                <p style={{ color: '#86868b', fontSize: '15px' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.section}>
        <h2 style={{ textAlign: 'center', fontSize: '40px', marginBottom: '48px' }}>Quem usa, recomenda.</h2>
        <div className={styles.reviewsGrid}>
          {[
            { name: "Lucas M.", role: "Dropshipper", text: "A mineração de produtos me economizou semanas de teste. O valor de 47 reais é piada pelo que entregam." },
            { name: "Ana Paula", role: "Infoprodutora", text: "O simulador de lucro abriu meus olhos. Eu achava que tinha margem e estava perdendo dinheiro." },
            { name: "Ricardo S.", role: "Afiliado", text: "As mentorias são direto ao ponto. Sem enrolação, direto para o lucro." }
          ].map((review, idx) => (
            <div key={idx} className={styles.reviewCard}>
              <div className={styles.reviewHeader}>
                <div className={styles.avatar}></div>
                <div>
                  <div style={{ fontWeight: 600 }}>{review.name}</div>
                  <div style={{ fontSize: '12px', color: '#86868b' }}>{review.role}</div>
                </div>
              </div>
              <p style={{ fontStyle: 'italic', color: '#424245' }}>"{review.text}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ background: '#f5f5f7', padding: '80px 20px' }}>
        <div className={styles.section}>
          <h2 style={{ textAlign: 'center', fontSize: '40px', marginBottom: '48px' }}>Dúvidas Frequentes</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <FAQItem
              question="Por que o valor é tão baixo?"
              answer="Nosso objetivo é democratizar o acesso à tecnologia de elite para pequenos e médios empreendedores. Queremos que você cresça conosco e se torne um cliente fiel."
            />
            <FAQItem
              question="O acesso é vitalício?"
              answer="Nesta oferta especial por R$ 47,90, o seu acesso à plataforma base é vitalício. Sem mensalidades."
            />
            <FAQItem
              question="Preciso de experiência prévia?"
              answer="Não! A plataforma foi desenhada para ser intuitiva e os cursos inclusos ensinam tudo do zero."
            />
            <FAQItem
              question="Como recebo o acesso?"
              answer="Imediatamente após a confirmação do pagamento no seu e-mail."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.hero} style={{ background: '#ffffff' }}>
        <h2 className={styles.headline} style={{ fontSize: '48px' }}>Pronto para o Próximo Nível?</h2>
        <p className={styles.subheadline}>Garanta sua vaga agora pelo valor promocional antes que a oferta expire.</p>
        <Link href="/checkout" className={`${styles.ctaButton} ${styles.ctaGold}`}>
          GARANTIR MINHA VAGA AGORA
        </Link>
      </section>

      {/* Footer */}
      <footer style={{ padding: '40px 20px', textAlign: 'center', color: '#86868b', fontSize: '14px', borderTop: '1px solid #e5e5e7' }}>
        © 2026 Suas Vendas Seu Lucro. Todos os direitos reservados.
      </footer>
    </div>
  );
}
