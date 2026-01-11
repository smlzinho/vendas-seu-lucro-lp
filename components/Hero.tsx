"use client";

import { motion } from "framer-motion";
import { Bot, Zap, Globe, Video, TrendingUp, Lock, ArrowRight, MessageCircle, Layers, Cpu, Activity } from "lucide-react";
import { Button } from "./ui/Button";

// --- COMPLEX COMPONENTS ---

// 1. Gyroscopic AI Core
const AICoreComplex = () => (
  <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center transform-style-3d group">
    {/* Central Energy Ball */}
    <div className="absolute inset-0 bg-neon-green/20 rounded-full blur-[80px] animate-pulse" />
    <div className="relative z-20 w-24 h-24 md:w-32 md:h-32 bg-black/40 backdrop-blur-xl rounded-full border border-white/20 shadow-[0_0_80px_rgba(0,255,148,0.2)] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(0,255,148,0.2)_45%,transparent_50%)] animate-[shimmer_2s_infinite]" />
      <Bot size={48} className="text-neon-green drop-shadow-[0_0_15px_rgba(0,255,148,1)] animate-pulse" />

      {/* Inner Data Ring */}
      <div className="absolute inset-2 border-2 border-dashed border-white/10 rounded-full animate-[spin_20s_linear_infinite]" />
    </div>

    {/* Gyroscopic Rings */}
    {/* Ring 1 (Slow) */}
    <div className="absolute inset-[-10%] border border-neon-green/30 rounded-full animate-[spin_15s_linear_infinite] border-t-transparent border-l-transparent" />

    {/* Ring 2 (Fast Reverse) */}
    <div className="absolute inset-[-25%] border-[1px] border-neon-blue/20 rounded-full animate-[spin_10s_linear_infinite_reverse] border-b-transparent border-r-transparent" />

    {/* Ring 3 (Wide Elliptical - Simulated via scale) */}
    <div className="absolute inset-[-40%] border border-dotted border-white/10 rounded-full animate-[spin_30s_linear_infinite]" />

    {/* Floating Particles */}
    <div className="absolute top-0 left-1/2 w-1 h-1 bg-neon-green rounded-full shadow-[0_0_10px_#00ff94] animate-ping" />
    <div className="absolute bottom-0 right-1/2 w-1 h-1 bg-neon-blue rounded-full shadow-[0_0_10px_#00f0ff] animate-ping delay-700" />
  </div>
);

// 2. Holographic Module Panel
const HoloPanel = ({ icon: Icon, label, color, position, delay, content }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
    className={`absolute ${position} z-20`}
  >
    {/* Holographic Connector Line */}
    <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] pointer-events-none hidden md:block opacity-40">
      <line x1="50%" y1="50%" x2={position.includes("left") ? "100%" : "0%"} y2={position.includes("top") ? "100%" : "0%"}
        stroke="white" strokeWidth="1" strokeDasharray="4 4" className="animate-pulse" />
    </svg>

    {/* The Panel Itself */}
    <div className={`
        relative overflow-hidden
        flex flex-col gap-2 p-4 rounded-lg 
        bg-black/80 backdrop-blur-xl border border-white/10 ${color}
        w-[140px] md:w-[180px]
        shadow-[0_0_40px_rgba(0,0,0,0.6)]
        group hover:border-white/30 transition-all duration-300
    `}>
      {/* Corner Accents (Cyberpunk Style) */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/50" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/50" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/50" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/50" />

      {/* Header */}
      <div className="flex items-center gap-3 border-b border-white/5 pb-2">
        <div className={`p-1.5 rounded bg-white/5 ${color} text-white shadow-inner`}>
          <Icon size={14} />
        </div>
        <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-300">{label}</span>
      </div>

      {/* Active Content Area */}
      <div className="min-h-[40px] flex flex-col justify-center">
        {content}
      </div>

      {/* Scanning Bar Effect */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-white/20 animate-[scan_2s_linear_infinite] opacity-0 group-hover:opacity-100" />
    </div>
  </motion.div>
);

export function Hero() {
  return (
    <section className="relative w-full min-h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-[#050505] pt-24 pb-12">
      {/* Branding (Top Left) */}
      <div className="absolute top-8 left-8 z-50 flex items-center gap-3 select-none">
        <div className="w-8 h-8 bg-neon-green rounded flex items-center justify-center font-black text-black text-xl shadow-[0_0_15px_rgba(0,255,148,0.4)]">
          O
        </div>
        <span className="text-white font-black tracking-tighter text-xl uppercase">OmnInvest</span>
        <span className="bg-white/10 px-2 py-0.5 rounded text-[10px] font-bold text-gray-400 border border-white/10 backdrop-blur-sm">
          BETA
        </span>
      </div>

      {/* 3D PERSPECTIVE GRID FLOOR */}
      <div className="absolute inset-0 perspective-[1000px] pointer-events-none z-0">
        <div className="absolute inset-[-100%] bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] 
                         bg-[size:4rem_4rem] [transform:rotateX(60deg)] opacity-40 origin-top animate-[grid-move_20s_linear_infinite]" />
      </div>

      {/* Ambient Glows */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-neon-green/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl px-4 flex flex-col items-center gap-16 md:gap-24">

        {/* TEXTO (Top) */}
        <div className="text-center space-y-8 max-w-4xl relative z-30">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[10px] uppercase font-bold text-neon-green tracking-[0.2em] shadow-[0_0_20px_rgba(0,255,148,0.1)]"
          >
            <Activity size={12} className="animate-pulse" />
            System Online • v3.0
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-white leading-[1.1] md:leading-[0.9] tracking-tighter"
          >
            VENDER FICOU <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500">
              FÁCIL DEMAIS.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Deixe <span className="text-white font-bold">nossa equipe</span> cuidar da parte chata. Mineração, Criativos e Fornecedores em um só lugar.
            <br /><span className="text-white font-bold block mt-2 underline decoration-neon-green underline-offset-4">Aperte o botão e veja o sistema trabalhar por você.</span>
          </motion.p>
        </div>

        {/* CTA (Bottom) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="relative z-30"
        >
          <motion.div
            animate={{
              scale: [1, 1.02, 1],
              boxShadow: [
                "0 0 20px rgba(0, 255, 148, 0.2)",
                "0 0 40px rgba(0, 255, 148, 0.4)",
                "0 0 20px rgba(0, 255, 148, 0.2)"
              ]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Button
              variant="primary"
              size="xl"
              className="min-w-[320px] border border-neon-green/50 hover:scale-105 transition-transform duration-300 uppercase font-black"
              onClick={() => document.getElementById('new-way')?.scrollIntoView({ behavior: 'smooth' })}
            >
              COMEÇAR AGORA <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
          <p className="text-center text-[10px] uppercase tracking-widest text-gray-600 mt-6 flex items-center justify-center gap-2">
            <Lock size={10} /> Acesso Seguro • Criptografia Militar
          </p>
        </motion.div>

        {/* 3D CORE SYSTEM (Center) */}
        <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center perspective-[2000px]">

          {/* The Core */}
          <AICoreComplex />

          {/* --- ORBITALS --- */}

          {/* 1. Radar (Top Left) */}
          <HoloPanel
            icon={Globe} label="Radar Global" color="border-neon-blue/30"
            position="top-[0%] left-[5%] md:top-[5%] md:left-[10%]"
            delay={0.4}
            content={
              <div className="space-y-1">
                <div className="flex justify-between text-[8px] text-gray-400 font-mono">
                  <span>SCANNING...</span>
                  <span className="text-neon-blue">84%</span>
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-neon-blue w-[84%] animate-pulse" />
                </div>
                <div className="text-[9px] text-white pt-1">
                  + 12 Fornecedores
                </div>
              </div>
            }
          />

          {/* 2. Intelligence (Top Right) */}
          <HoloPanel
            icon={Cpu} label="IA Neural" color="border-neon-purple/30"
            position="top-[0%] right-[5%] md:top-[5%] md:right-[10%]"
            delay={0.5}
            content={
              <div className="flex items-end justify-between h-[30px] gap-1 px-1">
                <div className="w-1 bg-neon-purple/50 h-[40%] animate-[bounce_1s_infinite]" />
                <div className="w-1 bg-neon-purple/50 h-[70%] animate-[bounce_1.2s_infinite]" />
                <div className="w-1 bg-neon-purple h-[100%] animate-[bounce_0.8s_infinite]" />
                <div className="w-1 bg-neon-purple/50 h-[60%] animate-[bounce_1.5s_infinite]" />
                <div className="w-1 bg-neon-purple/50 h-[30%] animate-[bounce_1.1s_infinite]" />
              </div>
            }
          />

          {/* 3. Creative Engine (Bottom Left) */}
          <HoloPanel
            icon={Layers} label="Criativos" color="border-neon-red/30"
            position="bottom-[10%] left-[5%] md:bottom-[15%] md:left-[10%]"
            delay={0.6}
            content={
              <div className="relative w-full h-[30px] bg-white/5 rounded border border-white/5 overflow-hidden flex items-center justify-center">
                <span className="text-[8px] text-gray-500 z-10">RENDER...</span>
                <div className="absolute inset-0 bg-neon-red/10 animate-pulse" />
              </div>
            }
          />

          {/* 4. Revenue Stream (Bottom Right) */}
          <HoloPanel
            icon={Zap} label="Receita" color="border-neon-green/30"
            position="bottom-[10%] right-[5%] md:bottom-[15%] md:right-[10%]"
            delay={0.7}
            content={
              <div className="flex flex-col items-center">
                <span className="text-xs font-black text-white">R$ 14.290</span>
                <span className="text-[8px] text-neon-green flex items-center gap-1">
                  <TrendingUp size={8} /> +12.5% Hoje
                </span>
              </div>
            }
          />

        </div>

      </div>
    </section>
  );
}
