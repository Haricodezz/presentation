"use client";

import { motion } from "framer-motion";
import { Satellite, Cpu, ShieldCheck, Link, Coins, ArrowRight, Zap, CheckCircle2 } from "lucide-react";

export default function Slide05DataToAsset({ isActive }: { isActive: boolean }) {
  if (!isActive) return null;

  const steps = [
    {
      id: 1,
      title: "SATELLITE MONITORING",
      icon: Satellite,
      color: "#3b82f6", // blue
      details: ["NDVI", "Vegetation Analysis"],
      delay: 0.32
    },
    {
      id: 2,
      title: "AI ANALYSIS",
      icon: Cpu,
      color: "#8b5cf6", // purple
      details: ["Fraud Detection"],
      delay: 0.64
    },
    {
      id: 3,
      title: "AUDITOR VERIFICATION",
      icon: ShieldCheck,
      color: "#eab308", // yellow
      details: ["Verification Pipeline"],
      delay: 0.96
    },
    {
      id: 4,
      title: "BLOCKCHAIN RECORDING",
      icon: Link,
      color: "#06b6d4", // cyan
      details: ["Blockchain Hash"],
      delay: 1.28
    },
    {
      id: 5,
      title: "CREDIT MINTING",
      icon: Coins,
      color: "#22c55e", // green
      details: ["Minting Terminal", "Token Generation"],
      delay: 1.60
    }
  ];

  return (
    <div
      className="w-full bg-[#020503] text-white relative flex flex-col justify-between items-center overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif", padding: "60px 48px", height: "100vh" }}
    >
      {/* ── BACKGROUND ── */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 0.03 }} transition={{ duration: 0.60 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_transparent_20%,_#020503_80%)] pointer-events-none" />

      {/* ── HEADING BLOCK ── */}
      <div className="relative z-10 flex flex-col items-center text-center shrink-0 w-full max-w-[1200px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.24, delay: 0.12 }}
          style={{ fontSize: "11px", letterSpacing: "4px", color: "#00C896", fontWeight: 500, marginBottom: "16px" }}
        >
          FROM SATELLITE DATA TO VERIFIED DIGITAL ASSETS
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.32, delay: 0.24 }}
          style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 900, letterSpacing: "-1px", lineHeight: 1.05, maxWidth: "900px" }}
        >
          HOW ENVIRONMENTAL IMPACT BECOMES A TRACEABLE CARBON CREDIT.
        </motion.h2>
      </div>

      {/* ── HORIZONTAL 5-STEP PIPELINE ── */}
      <div className="relative z-10 w-full max-w-[1200px] flex-1 flex flex-col justify-center mt-12 mb-12">
        
        {/* Connection Line layer */}
        <div className="absolute left-0 right-0 top-[60px] h-[2px] bg-white/5" />
        
        {/* Animated Data Packet across the line */}
        <div className="absolute left-0 right-0 top-[60px] h-[2px] overflow-visible">
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#00C896] shadow-[0_0_20px_#00C896] z-0"
            initial={{ left: "10%", opacity: 0 }}
            animate={{ left: ["10%", "90%"], opacity: [0, 1, 1, 1, 0] }}
            transition={{ duration: 0.60, delay: 0.60, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="relative z-10 flex justify-between items-start w-full gap-4">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              className="flex-1 flex flex-col items-center relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.24, delay: step.delay }}
            >
              {/* Step Circle */}
              <motion.div 
                className="w-[120px] h-[120px] rounded-full flex items-center justify-center border-2 bg-[#020503] relative shadow-lg mb-8"
                style={{ borderColor: `${step.color}40`, boxShadow: `0 0 30px ${step.color}10` }}
                whileHover={{ scale: 1.05, boxShadow: `0 0 40px ${step.color}30` }}
              >
                <step.icon className="w-10 h-10" style={{ color: step.color }} />
                
                {/* Glowing ring animation on activate */}
                <motion.div 
                  className="absolute inset-[-10px] border border-transparent rounded-full pointer-events-none"
                  animate={{
                    borderColor: ["transparent", step.color, "transparent"],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 0.60, delay: step.delay, repeat: Infinity, repeatDelay: 3 }}
                />
              </motion.div>

              {/* Step Title */}
              <div className="text-center mb-6">
                <span className="block text-[10px] text-white/40 font-mono mb-2 tracking-widest uppercase">Step {step.id}</span>
                <h3 className="text-[13px] font-bold tracking-widest uppercase" style={{ color: step.color }}>{step.title}</h3>
              </div>

              {/* Detail Cards */}
              <div className="w-full flex flex-col gap-2">
                {step.details.map((detail, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: step.delay + 0.3 + (idx * 0.1) }}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 flex flex-col gap-1 items-center justify-center text-center backdrop-blur-sm"
                  >
                    {/* Simulated data visual per detail */}
                    {detail === "Blockchain Hash" && (
                       <span className="text-[8px] font-mono text-cyan-400/80 w-full truncate mb-1">0x{Math.random().toString(16).slice(2,10)}...{Math.random().toString(16).slice(2,6)}</span>
                    )}
                    {detail === "NDVI" && (
                       <div className="flex gap-1 w-full justify-center mb-1">
                         <div className="w-2 h-2 rounded-sm bg-red-500/50"></div>
                         <div className="w-2 h-2 rounded-sm bg-yellow-500/50"></div>
                         <div className="w-2 h-2 rounded-sm bg-green-500/80"></div>
                         <div className="w-2 h-2 rounded-sm bg-green-600/90"></div>
                       </div>
                    )}
                    {(detail === "Vegetation Analysis" || detail === "Fraud Detection" || detail === "Verification Pipeline") && (
                       <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-1">
                         <motion.div className="h-full bg-current opacity-50" style={{ color: step.color }} initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: step.delay + 1, duration: 0.60 }} />
                       </div>
                    )}
                    <span className="text-[10px] text-white/80 font-semibold">{detail}</span>
                  </motion.div>
                ))}
              </div>

              {/* Connector Arrow (except last) */}
              {index < steps.length - 1 && (
                <div className="absolute right-[-15px] top-[60px] -translate-y-1/2 z-0 hidden lg:block">
                  <ArrowRight className="w-6 h-6 text-white/10" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── BOTTOM TRACKER ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.32, delay: 1.80 }}
        className="w-full max-w-[1200px] border border-white/10 rounded-xl bg-white/5 p-4 flex items-center justify-center gap-4 flex-wrap backdrop-blur-md z-10 shrink-0"
      >
        {[
          "Satellite Data",
          "AI Validation",
          "Auditor Approval",
          "Blockchain",
          "Tradeable Carbon Asset"
        ].map((label, i) => (
          <div key={i} className="flex items-center gap-4">
            <span className="text-[11px] font-bold tracking-widest uppercase text-white/70 flex items-center gap-2">
              <CheckCircle2 className="w-3 h-3 text-[#00C896]" />
              {label}
            </span>
            {i < 4 && <span className="text-[#00C896] text-[10px]">→</span>}
          </div>
        ))}
      </motion.div>

    </div>
  );
}
