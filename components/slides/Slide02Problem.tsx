"use client";

import { motion } from "framer-motion";
import { 
  Factory, 
  Flame, 
  TreePine, 
  Wind,
  Tractor,
  HeartHandshake,
  Receipt,
  SearchX
} from "lucide-react";

export default function Slide02Problem({ isActive }: { isActive: boolean }) {
  if (!isActive) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 2.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.32, ease: "easeOut" }
    },
  };

  const painPointContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 3.5,
      },
    },
  };

  return (
    <div 
      className="w-full h-full bg-[#020503] text-white relative overflow-hidden flex flex-col items-center justify-center gap-10 py-12 px-16"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* 1. Background appears */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 0.60 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_transparent_10%,_#020503_90%)] pointer-events-none" />

      {/* 2. Earth or carbon visualization fades in */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 0.60, delay: 0.20, ease: "easeOut" }}
        className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[120vh] h-[120vh] pointer-events-none"
      >
        <div className="absolute inset-0 rounded-full border-[2px] border-dashed border-red-500/30 animate-[spin_100s_linear_infinite]" />
        <div className="absolute inset-[10%] rounded-full border border-red-500/20 animate-[spin_80s_linear_infinite_reverse]" />
        <div className="absolute inset-[25%] rounded-full bg-[radial-gradient(circle_at_center,_rgba(239,68,68,0.1)_0%,_transparent_70%)]" />
      </motion.div>

      {/* ── TOP: Title & Supporting Statement ── */}
      <div className="relative z-10 flex flex-col items-center text-center mt-4">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.40, delay: 0.40 }}
          className="text-[40px] md:text-[52px] font-black tracking-wide uppercase text-white mb-6 leading-tight"
        >
          The Climate Crisis Is Not Just <br />
          An <span className="text-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.4)]">Environmental</span> Problem
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.40, delay: 0.64 }}
          className="text-gray-300 font-light text-[20px] md:text-[24px] max-w-4xl leading-relaxed"
        >
          Every year, millions of hectares of land lose their carbon storage potential while those protecting nature struggle to receive financial rewards.
        </motion.p>
      </div>

      {/* ── MIDDLE: Problems & Pain Points ── */}
      <div className="relative z-10 w-full flex flex-col items-center gap-4">
        <div className="w-full max-w-5xl">
        
        {/* 3. Environmental problems appear */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-4 gap-6"
        >
          {[
            { title: "Rising Carbon Emissions", icon: Flame },
            { title: "Industrial Pollution", icon: Factory },
            { title: "Deforestation", icon: TreePine },
            { title: "Ecosystem Degradation", icon: Wind },
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="flex flex-col items-center justify-center p-8 border border-white/5 bg-white/[0.02] rounded-xl backdrop-blur-sm relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-red-500/0 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <item.icon className="w-10 h-10 text-red-400 mb-4 opacity-80" strokeWidth={1.5} />
              <p className="text-center text-[16px] font-medium text-white/90 tracking-wide uppercase">
                {item.title}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* 4. Stakeholder challenges appear */}
        <motion.div 
          variants={painPointContainerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-4 gap-6"
        >
          {[
            { title: "Farmers Receive No Incentive", icon: Tractor },
            { title: "NGOs Lack Sustainable Funding", icon: HeartHandshake },
            { title: "Carbon Verification Is Expensive", icon: Receipt },
            { title: "Carbon Markets Lack Transparency", icon: SearchX },
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="flex flex-col items-center justify-center p-6 border-t border-white/10"
            >
              <item.icon className="w-8 h-8 text-primary mb-4 opacity-70" strokeWidth={1.5} />
              <p className="text-center text-[15px] text-gray-400 font-light leading-relaxed">
                {item.title}
              </p>
            </motion.div>
          ))}
        </motion.div>
        </div>
      </div>

      {/* 5. Final statement appears */}
      <div className="relative z-10 flex justify-center mb-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.40, delay: 1.92 }}
          className="text-center"
        >
          <p className="text-[26px] md:text-[32px] font-bold text-white uppercase tracking-widest drop-shadow-md">
            Environmental Value Exists.
          </p>
          <p className="text-[26px] md:text-[32px] font-bold text-primary uppercase tracking-widest drop-shadow-[0_0_20px_rgba(34,197,94,0.3)]">
            Rewarding It Is The Challenge.
          </p>
        </motion.div>
      </div>

    </div>
  );
}
