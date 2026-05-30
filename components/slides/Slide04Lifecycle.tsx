"use client";

import { motion } from "framer-motion";
import {
  Leaf, Satellite, Brain, ShieldCheck,
  Coins, Store, Flame, FileCheck,
} from "lucide-react";

const stages = [
  { title: "Project\nRegistration",    icon: Leaf,        desc: "Farmer or NGO submits project land and details." },
  { title: "Satellite\nMonitoring",    icon: Satellite,   desc: "Satellite imagery monitors environmental changes." },
  { title: "AI Carbon\nAnalysis",      icon: Brain,       desc: "ML models estimate carbon sequestration impact." },
  { title: "Auditor\nVerification",    icon: ShieldCheck, desc: "Independent auditors validate project results." },
  { title: "Carbon Credit\nMinting",   icon: Coins,       desc: "Verified impact is converted into carbon credits." },
  { title: "Marketplace\nTrading",     icon: Store,       desc: "Companies purchase credits via the marketplace." },
  { title: "Credit\nRetirement",       icon: Flame,       desc: "Credits are permanently retired to offset emissions." },
  { title: "Certificate\nGeneration",  icon: FileCheck,   desc: "A retirement certificate is generated as proof." },
];

export default function Slide04Lifecycle({ isActive }: { isActive: boolean }) {
  if (!isActive) return null;

  return (
    <div
      className="w-full h-full bg-white text-slate-900 relative overflow-hidden flex flex-col items-center justify-center gap-8 px-10"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Background grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.02 }}
        transition={{ duration: 0.60 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.03,
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_transparent_10%,_#F8FAFC_90%)] pointer-events-none" />

      {/* ── TITLE ── */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.24, delay: 0.12 }}
          className="text-[12px] font-mono tracking-[0.3em] uppercase text-green-600 mb-2"
        >
          From Land To Verified Carbon Credit
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.32, delay: 0.24 }}
          className="font-black text-slate-900 uppercase tracking-wide leading-tight"
          style={{ fontSize: "clamp(20px, 2.8vw, 38px)" }}
        >
          The Complete Carbon Credit Lifecycle
        </motion.h2>
      </div>

      {/* ── PIPELINE ── */}
      <div className="relative z-10 w-full">
        {/* Track line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.60, delay: 0.40, ease: "easeInOut" }}
          className="absolute top-[22px] left-4 right-4 h-px bg-slate-200 origin-left"
        />

        {/* Animated pulse line that fills from left to right */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.60, delay: 0.52, ease: "easeInOut" }}
          className="absolute top-[21px] left-4 right-4 h-[3px] bg-gradient-to-r from-green-600 to-green-400 origin-left shadow-[0_0_8px_rgba(22,163,74,0.25)]"
        />

        {/* Stages row */}
        <div className="flex justify-between items-start w-full px-4">
          {stages.map((stage, idx) => {
            const delay = 1.3 + idx * 0.6;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.20, delay }}
                className="flex flex-col items-center text-center"
                style={{ width: "12%" }}
              >
                {/* Icon ring */}
                <div className="relative mb-3">
                  {/* Glow ring that pulses in */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: [0, 1, 0], scale: [0.5, 1.6, 1.8] }}
                    transition={{ duration: 0.32, delay }}
                    className="absolute inset-0 rounded-full border border-primary"
                  />
                  {/* Icon circle */}
                  <motion.div
                    initial={{ borderColor: "rgba(255,255,255,0.15)", backgroundColor: "rgba(255,255,255,0.03)" }}
                    animate={{ borderColor: "rgba(34,197,94,0.8)", backgroundColor: "rgba(34,197,94,0.12)" }}
                    transition={{ duration: 0.16, delay }}
                    className="w-11 h-11 rounded-full border-2 flex items-center justify-center bg-white shadow-sm"
                  >
                    <stage.icon className="w-[18px] h-[18px] text-slate-600" />
                  </motion.div>
                </div>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.16, delay: delay + 0.1 }}
                  className="text-[10px] font-bold uppercase tracking-wide text-slate-800 leading-tight mb-1.5"
                  style={{ whiteSpace: "pre-line", minHeight: "28px" }}
                >
                  {stage.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.55 }}
                  transition={{ duration: 0.20, delay: delay + 0.2 }}
                  className="text-[9px] text-slate-400 font-light leading-relaxed"
                >
                  {stage.desc}
                </motion.p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── BOTTOM MESSAGE ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.32, delay: 2.80 }}
        className="relative z-10 text-center border border-slate-200 bg-slate-50 rounded-xl px-10 py-4 shadow-sm"
      >
        <p className="text-slate-900 font-medium" style={{ fontSize: "clamp(13px, 1.3vw, 18px)" }}>
          From Environmental Action To Verified Climate Impact —{" "}
          <span className="text-green-600 font-bold">
            Fully Automated, Transparent And Traceable.
          </span>
        </p>
      </motion.div>
    </div>
  );
}
