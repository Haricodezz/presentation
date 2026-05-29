"use client";

import { motion } from "framer-motion";
import {
  Satellite, Brain, Coins, Store, ShieldCheck, FileCheck,
  Activity, CheckCircle2, LineChart, Lock,
} from "lucide-react";

export default function Slide03Solution({ isActive }: { isActive: boolean }) {
  if (!isActive) return null;

  // Container is 380×380px. Center = (190,190). Orbit radius = 140px.
  const R = 140;
  const C = 190;
  const cycleItems = [
    { label: "Satellite\nMonitoring",   icon: Satellite,   angle: -90  },
    { label: "AI\nVerification",        icon: Brain,       angle: -30  },
    { label: "Carbon Credit\nMinting",  icon: Coins,       angle:  30  },
    { label: "Marketplace\nTrading",    icon: Store,       angle:  90  },
    { label: "Credit\nRetirement",      icon: ShieldCheck, angle:  150 },
    { label: "Certificate\nGeneration", icon: FileCheck,   angle: -150 },
  ].map((item) => {
    const rad = (item.angle * Math.PI) / 180;
    return { ...item, px: C + R * Math.cos(rad), py: C + R * Math.sin(rad) };
  });

  const pillars = [
    { title: "MEASURE", desc: "Satellite imagery and GIS monitoring.",                     icon: Activity     },
    { title: "VERIFY",  desc: "Machine learning and auditor validation.",                  icon: CheckCircle2 },
    { title: "TRADE",   desc: "Transparent carbon marketplace.",                           icon: LineChart    },
    { title: "RETIRE",  desc: "Permanent offset retirement and certificate generation.",   icon: Lock         },
  ];

  return (
    <div
      className="w-full h-full bg-[#020503] text-white relative overflow-hidden flex items-center justify-center px-14 gap-10"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Background grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 0.60 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_#020503_90%)] pointer-events-none" />

      {/* ══════════════════════════════════════════
          LEFT COLUMN — Title + Pillars
      ══════════════════════════════════════════ */}
      <div className="relative z-10 flex flex-col justify-center gap-8 flex-1 max-w-[480px]">

        {/* Label + Title */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, delay: 0.16 }}
            className="text-[14px] font-mono tracking-[0.28em] uppercase text-primary mb-3"
          >
            Introducing The Carbon MRV Platform
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.36, delay: 0.28 }}
            className="font-black text-white leading-tight"
            style={{ fontSize: "clamp(22px, 2.6vw, 36px)" }}
          >
            A Complete Ecosystem For Measuring, Verifying, Trading And Retiring Carbon Credits
          </motion.h2>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.32, delay: 0.52, origin: "left" }}
          className="w-full h-px bg-white/10"
        />

        {/* Four Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.36, delay: 1.44 }}
          className="grid grid-cols-2 gap-x-8 gap-y-6"
        >
          {pillars.map((pillar, idx) => (
            <div key={idx} className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <pillar.icon className="w-5 h-5 text-primary opacity-90 shrink-0" />
                <h3
                  className="font-bold tracking-widest text-white uppercase"
                  style={{ fontSize: "clamp(11px, 1.1vw, 14px)" }}
                >
                  {pillar.title}
                </h3>
              </div>
              <p
                className="text-white/45 font-light leading-relaxed pl-7"
                style={{ fontSize: "clamp(10px, 0.9vw, 12px)" }}
              >
                {pillar.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ══════════════════════════════════════════
          RIGHT COLUMN — Circular Ecosystem
      ══════════════════════════════════════════ */}
      <div className="relative z-10 shrink-0 flex items-center justify-center" style={{ width: "380px", height: "380px" }}>

        {/* SVG orbit ring — viewBox matches container 380×380 */}
        <motion.svg
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.60, delay: 0.40 }}
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 380 380"
        >
          <circle
            cx={C} cy={C} r={R}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1.5"
            strokeDasharray="5 7"
          />
          <motion.circle
            cx={C} cy={C} r={R}
            fill="none"
            stroke="rgba(34,197,94,0.5)"
            strokeWidth="2"
            strokeDasharray="46 834"
            strokeLinecap="round"
            animate={{ rotate: 360 }}
            transition={{ duration: 0.60, ease: "linear", repeat: Infinity }}
            style={{ transformOrigin: `${C}px ${C}px` }}
          />
        </motion.svg>

        {/* Central core */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.32, delay: 0.52 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] rounded-full bg-primary/10 border border-primary/40 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.25)] z-10"
        >
          <span className="text-[9px] font-mono tracking-widest uppercase text-primary text-center leading-relaxed font-semibold">
            Platform<br />Core
          </span>
        </motion.div>

        {/* Orbit nodes */}
        {cycleItems.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.18, delay: 0.64 + idx * 0.22 }}
            className="absolute flex items-center justify-center rounded-full bg-white/5 border border-white/15 shadow-md"
            style={{
              // Pixel positions in 380×380 space, nodes centered on the orbit
              left: `${item.px}px`,
              top:  `${item.py}px`,
              transform: "translate(-50%, -50%)",
              width: "36px",
              height: "36px"
            }}
          >
            <item.icon className="w-4 h-4 text-white/80" />
            <span
              className="absolute top-[40px] left-1/2 -translate-x-1/2 w-[80px] text-[8.5px] font-medium text-white/70 uppercase tracking-wider text-center leading-tight"
              style={{ whiteSpace: "pre-line" }}
            >
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
