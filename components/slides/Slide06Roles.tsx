"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ShieldAlert, TrendingUp, Lock, Wallet, ArrowRight, Activity, ShieldCheck } from "lucide-react";

function useCounter(target: number, delay: number, decimals = 0, duration = 2000) {
  const [v, setV] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => {
      let start: number | null = null;
      const step = (ts: number) => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / duration, 1);
        const easeOut = 1 - Math.pow(1 - p, 3);
        setV(parseFloat((easeOut * target).toFixed(decimals)));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, delay * 1000);
    return () => clearTimeout(t);
  }, [target, delay, decimals, duration]);
  return v;
}

export default function Slide08Roles({ isActive }: { isActive: boolean }) {
  if (!isActive) return null;

  const totalMint = useCounter(125, 1.5, 0);
  const releasedCount = useCounter(100, 3.0, 0);
  const bufferCount = useCounter(25, 3.5, 0);

  const cards = [
    {
      title: "REVERSAL PROTECTION",
      desc: "If environmental performance declines, reserve credits are deducted automatically.",
      icon: ShieldAlert, delay: 2.20,
    },
    {
      title: "MARKET STABILITY",
      desc: "Reduces over-crediting risk and ensures net-positive environmental impact.",
      icon: TrendingUp, delay: 2.28,
    },
    {
      title: "LONG-TERM TRUST",
      desc: "Improves confidence for corporate buyers, auditors, and global registries.",
      icon: Lock, delay: 2.36,
    },
  ];

  return (
    <div
      className="w-full h-full bg-white text-slate-900 relative overflow-hidden flex items-center gap-6 px-10"
      style={{
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        minHeight: "100vh",
        padding: "60px 48px 48px",
      }}
    >
      {/* ── BG ── */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 0.025 }} transition={{ duration: 0.60 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.03,
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_#F8FAFC_90%)] pointer-events-none" />

      {/* ── TOP HEADING BLOCK ── */}
      <div className="relative z-10 flex flex-col items-center text-center shrink-0">
        <motion.p
          initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.24, delay: 0.12 }}
          style={{ fontSize: "11px", letterSpacing: "4px", color: "#14B8A6", fontWeight: 500, marginBottom: "12px", wordSpacing: "-2px" }}
          className="uppercase"
        >
          CARBON RESERVE SYSTEM
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.32, delay: 0.24 }}
          className="text-slate-900 uppercase whitespace-nowrap"
          style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 900, letterSpacing: "-0.5px", lineHeight: 1.05 }}
        >
          EVERY CREDIT HAS A SAFETY NET.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.28, delay: 0.36 }}
          style={{
            fontSize: "15px", color: "rgba(15,23,42,0.55)", letterSpacing: "0.3px",
            marginTop: "10px", maxWidth: "580px", marginLeft: "auto", marginRight: "auto", textAlign: "center"
          }}
        >
          20% of every mint is automatically allocated to a protected reserve buffer.
        </motion.p>
      </div>

      {/* ── MAIN CONTENT ROW — DIAGRAM + LEDGER ── */}
      <div
        className="relative z-10 shrink-0"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "24px",
          alignItems: "flex-start",
          marginTop: "28px",
          width: "100%",
          maxWidth: "1100px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {/* DIAGRAM PANEL */}
        <div className="relative border border-slate-200 bg-white" style={{ flex: "0 0 796px", height: "360px", borderRadius: "16px" }}>
          
          {/* SVG connector lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 796 360">
            {/* Trunk */}
            <line x1="398" y1="96" x2="398" y2="145" stroke="rgba(0,0,0,0.08)" strokeWidth="2" />
            <motion.line x1="398" y1="96" x2="398" y2="145"
              stroke="#22c55e" strokeWidth="2" strokeDasharray="5 4"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.88 }} />
            
            {/* Left branch */}
            <path d="M 398 145 L 195 145 L 195 175" fill="none" stroke="rgba(0,0,0,0.07)" strokeWidth="2" />
            <motion.path d="M 398 145 L 195 145 L 195 175" fill="none"
              stroke="#22c55e" strokeWidth="2" strokeDasharray="5 4"
              initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 0.40, delay: 1.00 }} />
            <motion.circle cx="195" cy="175" r="4" fill="#22c55e" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.40 }} />
            
            {/* Right branch */}
            <path d="M 398 145 L 601 145 L 601 175" fill="none" stroke="rgba(0,0,0,0.07)" strokeWidth="2" />
            <motion.path d="M 398 145 L 601 145 L 601 175" fill="none"
              stroke="#f87171" strokeWidth="2" strokeDasharray="5 4"
              initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 0.40, delay: 1.00 }} />
            <motion.circle cx="601" cy="175" r="4" fill="#f87171" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.40 }} />
          </svg>

          {/* Central Mint Node */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.32, delay: 0.40 }}
            className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center justify-center rounded-xl border border-primary/30 bg-primary/5 shadow-[0_0_20px_rgba(34,197,94,0.05)] z-10"
            style={{ top: "24px", width: "170px", height: "72px" }}
          >
            <span style={{ fontSize: "10px", letterSpacing: "3px", color: "#0D9488", wordSpacing: "-2px" }} className="uppercase font-mono">Carbon Minting</span>
            <div style={{ fontSize:"22px", fontWeight:900, color:"#0F172A" }}>{totalMint} CMRV</div>
          </motion.div>

          {/* Owner Wallet Node */}
          <motion.div
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.24, delay: 1.20 }}
            className="absolute rounded-xl border border-slate-200 bg-white z-10 flex flex-col"
            style={{ top: "175px", left: "80px", width: "230px", padding: "14px 16px" }}
          >
            <div className="flex items-center gap-2 pb-2 mb-2 border-b border-slate-100">
              <Wallet className="w-4 h-4 text-primary shrink-0" />
              <span style={{ fontSize: "10px", letterSpacing: "2px", color: "#0D9488", wordSpacing: "-2px" }} className="uppercase font-mono">OWNER WALLET</span>
            </div>
            <span style={{ fontSize: "36px", fontWeight: 700, color: "#16a34a", fontVariantNumeric: "tabular-nums", lineHeight: 1 }}>{releasedCount}</span>
            <p style={{ fontSize: "12px", color: "rgba(15,23,42,0.5)", marginTop: "2px", marginBottom: "8px" }}>Released (80%)</p>
            <div className="flex flex-col" style={{ gap: "4px" }}>
              {["Trading", "Selling", "Retirement"].map((act, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-primary/50 shrink-0" />
                  <span style={{ fontSize: "11px", letterSpacing: "1.5px", color: "rgba(15,23,42,0.6)", lineHeight: 1.9, wordSpacing: "-2px" }} className="uppercase font-mono">→ {act}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Buffer Reserve Node */}
          <motion.div
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.24, delay: 1.40 }}
            className="absolute rounded-xl border border-red-200 bg-white z-10 flex flex-col"
            style={{ top: "175px", right: "80px", width: "230px", padding: "14px 16px" }}
          >
            <div className="flex items-center gap-2 pb-2 mb-2 border-b border-slate-100">
              <ShieldAlert className="w-4 h-4 text-red-500 shrink-0" />
              <span style={{ fontSize: "10px", letterSpacing: "2px", color: "rgba(239,68,68,0.9)", wordSpacing: "-2px" }} className="uppercase font-mono">BUFFER RESERVE</span>
            </div>
            <span style={{ fontSize: "36px", fontWeight: 700, color: "#ef4444", fontVariantNumeric: "tabular-nums", lineHeight: 1 }}>{bufferCount}</span>
            <p style={{ fontSize: "12px", color: "rgba(15,23,42,0.5)", marginTop: "2px", marginBottom: "8px" }}>Protected (20%)</p>
            <div className="flex items-center" style={{ background:"#FEF2F2", border:"1px solid #FECACA", borderRadius:"10px", padding:"10px 14px" }}>
              <span style={{ fontSize:"10px", fontWeight:700, letterSpacing:"2px", color:"#16A34A", textTransform:"uppercase" }}>🔒 LOCKED FOR RISK PROTECTION</span>
            </div>
          </motion.div>
        </div>

        {/* LIVE LEDGER PANEL (flex: 0 0 280px) */}
        <motion.div
          initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.32, delay: 1.60 }}
          className="border border-slate-200 bg-white flex flex-col overflow-hidden"
          style={{ flex: "0 0 280px", height: "300px", borderRadius: "16px" }}
        >
          <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50" style={{ height: "40px", padding: "0 20px" }}>
            <span className="flex items-center gap-2 uppercase font-mono" style={{ fontSize: "10px", letterSpacing: "3px", color: "#0D9488", fontWeight: 600, wordSpacing: "-2px" }}>
              <Activity className="w-3 h-3 text-primary" /> LIVE LEDGER
            </span>
          </div>

          <div className="flex flex-col flex-1" style={{ padding: "4px 20px 16px" }}>
            {[
              { label: "Project Status:", value: "VERIFIED", color: "#14B8A6" },
              { label: "Total Minted:",   value: "125.00",   color: "#0F172A" },
              { label: "Released (80%):", value: "100.00",   color: "#14B8A6" },
              { label: "Reserved (20%):", value: "25.00",    color: "#ef4444" },
              { label: "Reserve Ratio:",  value: "20.00%",   color: "#14B8A6" },
            ].map((row, i) => (
              <div key={i} className="flex justify-between items-center" style={{ padding: "10px 0", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                <span style={{ fontSize: "13px", color: "rgba(15,23,42,0.55)", fontWeight: 400, fontFamily: "monospace" }}>{row.label}</span>
                <span style={{ fontSize: "13px", fontWeight: 700, color: row.color, fontVariantNumeric: "tabular-nums", fontFamily: "monospace", textAlign: "right" }}>{row.value}</span>
              </div>
            ))}

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.92 }}
              className="flex items-center justify-between rounded mt-3"
              style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:"10px", padding:"10px 14px" }}>
              <div style={{ fontSize:"10px", fontWeight:700, color:"#16A34A", letterSpacing:"1.5px", textTransform:"uppercase" }}>OWNER WALLET</div>
              <span className="flex items-center gap-1" style={{ fontSize: "12px", fontWeight: 700, color: "#16A34A", letterSpacing: "1px", fontFamily: "monospace", wordSpacing: "-2px" }}>
                ✓ PROTECTED
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ── THREE BOTTOM FEATURE CARDS ── */}
      <div
        className="relative z-10 shrink-0"
        style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginTop: "32px",
          width: "100%", maxWidth: "1100px", marginLeft: "auto", marginRight: "auto"
        }}
      >
        {cards.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.20, delay: c.delay }}
            style={{ border:"1px solid #E2E8F0", borderRadius:"14px", background:"#F8FAFC", padding:"24px 20px" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
              <c.icon className="w-4 h-4 text-primary shrink-0" />
              <span className="uppercase font-mono" style={{ fontSize: "10px", letterSpacing: "3px", fontWeight: 700, color: "#0D9488", wordSpacing: "-2px" }}>
                {c.title}
              </span>
            </div>
            <p style={{ fontSize: "13px", lineHeight: 1.7, color: "#475569", letterSpacing: "0.2px" }}>{c.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* ── BOTTOM TAGLINE ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.28, delay: 2.60 }}
        className="relative z-10 shrink-0"
        style={{ display: "flex", justifyContent: "center", gap: "20px", whiteSpace: "nowrap" }}
      >
        <span className="font-black uppercase" style={{ fontSize: "clamp(18px, 2.2vw, 26px)", fontWeight: 900, letterSpacing: "2px", color: "#0F172A", wordSpacing: "-2px" }}>
          WE DON’T JUST CREATE CREDITS.
        </span>
        <span className="font-black uppercase" style={{ fontSize: "clamp(18px, 2.2vw, 26px)", fontWeight: 900, letterSpacing: "2px", color: "#14B8A6", wordSpacing: "-2px" }}>
          WE PROTECT THEIR VALUE.
        </span>
      </motion.div>
    </div>
  );
}
