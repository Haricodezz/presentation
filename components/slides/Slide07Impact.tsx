"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { AlertTriangle, Activity, Database, ShieldAlert, PauseCircle, CheckCircle2, ArrowRight } from "lucide-react";

export default function Slide09Impact({ isActive }: { isActive: boolean }) {
  const [scenario, setScenario] = useState<1 | 2>(1);

  useEffect(() => {
    if (!isActive) return;
    const interval = setInterval(() => {
      setScenario((prev) => (prev === 1 ? 2 : 1));
    }, 6000); // Toggle scenario every 6 seconds
    return () => clearInterval(interval);
  }, [isActive]);

  if (!isActive) return null;

  const flowSteps = [
    { label: "Loss Detected", icon: AlertTriangle },
    { label: "Buffer Deduction", icon: Database },
    { label: "Risk Assessment", icon: Activity },
    { label: "Compliance Check", icon: ShieldAlert },
  ];

  const cards = [
    { title: "AUTOMATIC DETECTION", desc: "Satellite monitoring continuously identifies unrecorded land changes.", icon: Activity },
    { title: "BUFFER RECOVERY",     desc: "Carbon losses are instantly absorbed through system reserve credits.", icon: Database },
    { title: "PROJECT PROTECTION",  desc: "Projects are automatically paused when reserve levels become unsafe.", icon: ShieldAlert },
  ];

  return (
    <div
      className="w-full h-full bg-white text-slate-900 overflow-hidden relative"
      style={{
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        minHeight: "100vh",
        padding: "48px 48px",
      }}
    >
      {/* ── BG ── */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 0.025 }} transition={{ duration: 0.60 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,1) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,1) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_10%,_#FFFFFF_90%)] pointer-events-none" />

      {/* ── TOP HEADING ── */}
      <div className="relative z-10 flex flex-col items-center text-center shrink-0">
        <motion.p
          initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.24, delay: 0.12 }}
          style={{ fontSize: "11px", letterSpacing: "4px", color: "#0D9488", fontWeight: 500, marginBottom: "12px", wordSpacing: "-2px" }}
          className="uppercase"
        >
          PROJECT HEALTH MONITORING
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.32, delay: 0.24 }}
          className="text-slate-900 uppercase whitespace-nowrap"
          style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 900, letterSpacing: "-0.5px", lineHeight: 1.05 }}
        >
          WHEN NATURE CHANGES, THE SYSTEM RESPONDS.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.28, delay: 0.36 }}
          style={{
            fontSize: "15px", color: "#64748B", letterSpacing: "0.3px",
            marginTop: "10px", maxWidth: "600px", marginLeft: "auto", marginRight: "auto", textAlign: "center"
          }}
        >
          Continuous monitoring protects the integrity of carbon credits.
        </motion.p>
      </div>

      {/* ── MAIN CONTENT ROW ── */}
      <div
        className="relative z-10 shrink-0"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "24px",
          alignItems: "stretch",
          marginTop: "16px",
          width: "100%",
          maxWidth: "1100px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {/* LEFT VISUALS (flex: 1) */}
        <div className="flex-1 flex flex-col justify-between gap-6">
          
          {/* Comparison Blocks */}
          <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 p-6 relative">
            
            {/* Prev Stock */}
            <motion.div
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.40 }}
              className="flex flex-col items-center justify-center p-5 rounded-xl border border-green-500/20 bg-green-500/5 w-[180px]"
            >
              <span className="uppercase font-mono text-center text-green-600" style={{ fontSize: "10px", letterSpacing: "2px", wordSpacing: "-2px", marginBottom: "8px" }}>PREVIOUS STOCK</span>
              <span className="font-bold text-slate-900 tabular-nums" style={{ fontSize: "32px", lineHeight: 1 }}>1,250</span>
              <span className="text-slate-400 mt-1" style={{ fontSize: "11px" }}>tCO₂</span>
            </motion.div>

            {/* Center Loss Calc */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.60 }}
              className="flex flex-col items-center justify-center z-10"
            >
              <div className="rounded-full bg-red-500/10 border border-red-500/20 p-3 mb-2 animate-pulse">
                <AlertTriangle className="w-5 h-5 text-red-500" />
              </div>
              <span className="font-bold text-red-500 tabular-nums" style={{ fontSize: "22px" }}>- 100</span>
              <span className="text-red-400/80 uppercase font-mono mt-1" style={{ fontSize: "9px", letterSpacing: "1px" }}>CARBON LOSS</span>
            </motion.div>

            {/* Current Stock */}
            <motion.div
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.80 }}
              className="flex flex-col items-center justify-center p-5 rounded-xl border border-orange-500/20 bg-orange-500/5 w-[180px]"
            >
              <span className="uppercase font-mono text-center text-orange-500" style={{ fontSize: "10px", letterSpacing: "2px", wordSpacing: "-2px", marginBottom: "8px" }}>CURRENT STOCK</span>
              <span className="font-bold text-slate-900 tabular-nums" style={{ fontSize: "32px", lineHeight: 1 }}>1,150</span>
              <span className="text-slate-400 mt-1" style={{ fontSize: "11px" }}>tCO₂</span>
            </motion.div>

            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none -z-10">
              <line x1="180" y1="50%" x2="calc(50% - 40px)" y2="50%" stroke="rgba(239,68,68,0.3)" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="calc(50% + 40px)" y1="50%" x2="calc(100% - 180px)" y2="50%" stroke="rgba(239,68,68,0.3)" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
          </div>

          {/* Animated Flow Steps */}
          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 flex items-center justify-between relative overflow-hidden">
            <motion.div
              animate={{ left: ["-10%", "110%"] }}
              transition={{ duration: 0.60, ease: "linear", repeat: Infinity }}
              className="absolute top-1/2 -translate-y-1/2 w-[100px] h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent blur-[1px]"
            />
            {flowSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.40 + i * 0.08 }}
                className="flex flex-col items-center gap-3 relative z-10"
              >
                <div className="w-10 h-10 rounded-full border border-slate-200 bg-[#F1F5F9] flex items-center justify-center">
                  <step.icon className="w-4 h-4 text-slate-500" />
                </div>
                <span className="text-center text-slate-500 uppercase font-mono" style={{ fontSize: "9px", letterSpacing: "1px", maxWidth: "80px" }}>
                  {step.label}
                </span>
              </motion.div>
            ))}
            <div className="absolute top-[42px] left-10 right-10 h-[1px] bg-slate-50 -z-10" />
          </div>

        </div>

        {/* RIGHT LEDGER (fixed width 320px) */}
        <motion.div
          initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.32, delay: 1.40 }}
          className="border border-slate-200 bg-[#F1F5F9] flex flex-col overflow-hidden relative"
          style={{ flex: "0 0 320px", borderRadius: "16px" }}
        >
          <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50" style={{ height: "40px", padding: "0 20px" }}>
            <span className="flex items-center gap-2 uppercase font-mono" style={{ fontSize: "10px", letterSpacing: "3px", color: "#0D9488", fontWeight: 600, wordSpacing: "-2px" }}>
              <Activity className="w-3 h-3 text-primary" /> PROJECT STATUS
            </span>
            <span className="text-[9px] text-slate-400 font-mono">SCENARIO {scenario}</span>
          </div>

          <div className="flex flex-col flex-1 relative" style={{ padding: "4px 20px 16px" }}>
            <AnimatePresence mode="wait">
              {scenario === 1 ? (
                <motion.div
                  key="s1"
                  initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.12 }}
                  className="flex flex-col h-full"
                >
                  <div className="flex justify-between items-center" style={{ padding: "12px 0", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                    <span style={{ fontSize: "13px", color: "#64748B", fontWeight: 400, fontFamily: "monospace" }}>Buffer Available:</span>
                    <span style={{ fontSize: "13px", fontWeight: 700, color: "#0F172A", fontVariantNumeric: "tabular-nums", fontFamily: "monospace" }}>180</span>
                  </div>
                  <div className="flex justify-between items-center" style={{ padding: "12px 0", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                    <span style={{ fontSize: "13px", color: "#64748B", fontWeight: 400, fontFamily: "monospace" }}>Req. Deduction:</span>
                    <span style={{ fontSize: "13px", fontWeight: 700, color: "#ff5555", fontVariantNumeric: "tabular-nums", fontFamily: "monospace" }}>-100</span>
                  </div>
                  <div className="flex justify-between items-center" style={{ padding: "12px 0", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                    <span style={{ fontSize: "13px", color: "#64748B", fontWeight: 400, fontFamily: "monospace" }}>Remaining Buffer:</span>
                    <span style={{ fontSize: "13px", fontWeight: 700, color: "#0D9488", fontVariantNumeric: "tabular-nums", fontFamily: "monospace" }}>80</span>
                  </div>
                  <div className="mt-auto pt-4">
                    <div className="flex items-center justify-between rounded" style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)", padding: "10px 14px" }}>
                      <span style={{ fontSize: "10px", letterSpacing: "2px", color: "#0D9488", fontFamily: "monospace", wordSpacing: "-2px" }} className="uppercase">STATUS</span>
                      <span className="flex items-center gap-1.5" style={{ fontSize: "12px", fontWeight: 700, color: "#0D9488", letterSpacing: "1px", fontFamily: "monospace" }}>
                        <CheckCircle2 className="w-3.5 h-3.5" /> ACTIVE
                      </span>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="s2"
                  initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.12 }}
                  className="flex flex-col h-full"
                >
                  <div className="flex justify-between items-center" style={{ padding: "12px 0", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                    <span style={{ fontSize: "13px", color: "#64748B", fontWeight: 400, fontFamily: "monospace" }}>Buffer Available:</span>
                    <span style={{ fontSize: "13px", fontWeight: 700, color: "#0F172A", fontVariantNumeric: "tabular-nums", fontFamily: "monospace" }}>40</span>
                  </div>
                  <div className="flex justify-between items-center" style={{ padding: "12px 0", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                    <span style={{ fontSize: "13px", color: "#64748B", fontWeight: 400, fontFamily: "monospace" }}>Req. Deduction:</span>
                    <span style={{ fontSize: "13px", fontWeight: 700, color: "#ff5555", fontVariantNumeric: "tabular-nums", fontFamily: "monospace" }}>-100</span>
                  </div>
                  <div className="flex justify-between items-center" style={{ padding: "12px 0", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                    <span style={{ fontSize: "13px", color: "#64748B", fontWeight: 400, fontFamily: "monospace" }}>Remaining Buffer:</span>
                    <span style={{ fontSize: "13px", fontWeight: 700, color: "#ff5555", fontVariantNumeric: "tabular-nums", fontFamily: "monospace" }}>-60</span>
                  </div>
                  <div className="mt-auto pt-4">
                    <div className="flex items-center justify-between rounded animate-pulse" style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.3)", padding: "10px 14px" }}>
                      <span style={{ fontSize: "10px", letterSpacing: "2px", color: "rgba(255,85,85,0.8)", fontFamily: "monospace", wordSpacing: "-2px" }} className="uppercase">STATUS</span>
                      <span className="flex items-center gap-1.5" style={{ fontSize: "12px", fontWeight: 700, color: "#ff5555", letterSpacing: "1px", fontFamily: "monospace" }}>
                        <PauseCircle className="w-3.5 h-3.5" /> PROJECT PAUSED
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* ── THREE BOTTOM FEATURE CARDS ── */}
      <div
        className="relative z-10 shrink-0"
        style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginTop: "16px",
          width: "100%", maxWidth: "1100px", marginLeft: "auto", marginRight: "auto"
        }}
      >
        {cards.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.20, delay: 0.72 + i * 0.08 }}
            style={{ padding: "20px 24px", border: "1px solid rgba(0,0,0,0.06)", borderRadius: "8px", background: "rgba(0,0,0,0.03)" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
              <c.icon className="w-4 h-4 text-primary shrink-0" />
              <span className="uppercase font-mono" style={{ fontSize: "10px", letterSpacing: "3px", fontWeight: 700, color: "#0D9488", wordSpacing: "-2px" }}>
                {c.title}
              </span>
            </div>
            <p style={{ fontSize: "13px", lineHeight: 1.7, color: "#64748B", letterSpacing: "0.2px" }}>{c.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* ── BOTTOM TAGLINE ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.28, delay: 2.20 }}
        className="relative z-10 shrink-0"
        style={{ display: "flex", justifyContent: "center", gap: "20px", whiteSpace: "nowrap", marginTop: "16px" }}
      >
        <span className="font-black uppercase" style={{ fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 900, letterSpacing: "2px", color: "#0F172A", wordSpacing: "-2px" }}>
          CARBON INTEGRITY IS NOT A ONE-TIME CHECK.
        </span>
        <span className="font-black uppercase" style={{ fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 900, letterSpacing: "2px", color: "#0D9488", wordSpacing: "-2px" }}>
          IT IS CONTINUOUSLY MONITORED.
        </span>
      </motion.div>
    </div>
  );
}
