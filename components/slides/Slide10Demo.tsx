"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Wallet, Building2, BarChart3, Zap } from "lucide-react";

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

export default function Slide10Demo({ isActive }: { isActive: boolean }) {
  if (!isActive) return null;

  const farmerBalance = useCounter(52400, 2.5, 0, 2500);
  const companyPayment = useCounter(26000, 4.0, 0, 2000);
  const creditsPurchased = useCounter(50, 3.5, 0, 1500);

  const features = [
    "INR PAYMENTS",
    "TRANSPARENT PRICING",
    "REAL-TIME TRANSACTIONS",
    "FULL AUDIT TRAIL"
  ];

  return (
    <div
      className="w-full h-full bg-[#020503] text-white relative flex flex-col justify-evenly items-center"
      style={{
        fontFamily: "'Inter', sans-serif",
        padding: "48px 48px 48px",
        overflowX: "hidden",
        overflowY: "visible"
      }}
    >
      {/* ── BG ── */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 0.025 }} transition={{ duration: 0.60 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_10%,_#020503_90%)] pointer-events-none" />

      {/* ── HEADING BLOCK ── */}
      <div className="relative z-10 flex flex-col items-center text-center shrink-0">
        <motion.p
          initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.24, delay: 0.12 }}
          style={{ fontSize: "11px", letterSpacing: "4px", color: "#00C896", fontWeight: 500, marginBottom: "14px" }}
          className="uppercase"
        >
          CARBON MARKETPLACE
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.32, delay: 0.24 }}
          className="uppercase text-white"
          style={{
            fontSize: "clamp(28px, 3.2vw, 46px)",
            fontWeight: 900,
            letterSpacing: "-1px",
            lineHeight: 1.08,
            maxWidth: "1000px",
            margin: "0 auto",
            textAlign: "center"
          }}
        >
          TURNING ENVIRONMENTAL IMPACT INTO REAL ECONOMIC VALUE.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.28, delay: 0.36 }}
          style={{
            fontSize: "15px",
            color: "rgba(255,255,255,0.55)",
            marginTop: "14px",
            letterSpacing: "0.3px",
            textAlign: "center"
          }}
        >
          A transparent marketplace connecting carbon producers and carbon buyers.
        </motion.p>
      </div>

      {/* ── THREE-PANEL ROW ── */}
      <div
        className="relative z-10 shrink-0 w-full max-w-[1100px] self-center"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
          gap: "20px",
          marginTop: "28px",
        }}
      >
        {/* Animated Connection Lines (Absolute behind panels) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
          <line x1="10%" y1="50%" x2="90%" y2="50%" stroke="rgba(0,200,150,0.25)" strokeWidth="1" strokeDasharray="4 4" />
          
          {/* Tokens moving */}
          <motion.circle cx="30%" cy="50%" r="4" fill="#22c55e" className="blur-[1px]"
            animate={{ cx: ["28%", "45%"], opacity: [0, 1, 0] }}
            transition={{ duration: 0.60, repeat: Infinity, ease: "linear", delay: 0.88 }} />
          <motion.circle cx="70%" cy="50%" r="4" fill="#60a5fa" className="blur-[1px]"
            animate={{ cx: ["72%", "55%"], opacity: [0, 1, 0] }}
            transition={{ duration: 0.60, repeat: Infinity, ease: "linear", delay: 1.08 }} />
        </svg>

        {/* LEFT PANEL: FARMER WALLET */}
        <motion.div
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.24, delay: 0.48 }}
          className="flex-1 group"
          style={{
            display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "340px",
            background: "linear-gradient(rgba(255,255,255,0.03), rgba(255,255,255,0.03)), #020503", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "10px", padding: "24px",
            transition: "border-color 200ms ease"
          }}
          onMouseEnter={(e) => e.currentTarget.style.borderColor = "rgba(0,200,150,0.25)"}
          onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"}
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Wallet className="w-4 h-4 text-[#00C896]" />
              <span className="uppercase" style={{ fontSize: "10px", letterSpacing: "3px", color: "rgba(0,200,150,0.85)", fontWeight: 600 }}>FARMER WALLET</span>
            </div>
            
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>Available Credits:</span>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "#ffffff", textAlign: "right" }}>100.64</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>Buffer Credits:</span>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "#ffffff", textAlign: "right" }}>25.16</span>
            </div>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "12px", marginTop: "12px" }}>
              <div className="uppercase" style={{ fontSize: "9px", letterSpacing: "3px", color: "rgba(255,255,255,0.35)", marginBottom: "4px" }}>WALLET BALANCE</div>
              <div style={{ fontSize: "38px", fontWeight: 800, color: "#00C896", letterSpacing: "-1px" }}>
                <span style={{ fontSize: "0.6em", verticalAlign: "super", fontWeight: 400 }}>₹</span>{farmerBalance.toLocaleString()}
              </div>
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "12px", marginTop: "12px" }}>
            <div className="uppercase" style={{ fontSize: "9px", letterSpacing: "3px", color: "rgba(255,255,255,0.35)", marginBottom: "8px" }}>RECENT ACTIVITY</div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
              <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>Minted</span>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "#00C896", textAlign: "right" }}>+125 Credits</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>Sold</span>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "#00C896", textAlign: "right" }}>+₹18,500</span>
            </div>
          </div>
        </motion.div>

        {/* CENTER PANEL: LIVE MARKET */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.24, delay: 0.60 }}
          className="flex-1 group relative"
          style={{
            display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "340px",
            background: "linear-gradient(rgba(255,255,255,0.03), rgba(255,255,255,0.03)), #020503", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "10px", padding: "24px",
            transition: "border-color 200ms ease"
          }}
          onMouseEnter={(e) => e.currentTarget.style.borderColor = "rgba(0,200,150,0.25)"}
          onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"}
        >
          <div className="flex items-center gap-2 mb-4 justify-center">
            <BarChart3 className="w-4 h-4 text-[#00C896]" />
            <span className="uppercase" style={{ fontSize: "10px", letterSpacing: "3px", color: "rgba(0,200,150,0.85)", fontWeight: 600 }}>LIVE MARKET</span>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center relative">
            <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", letterSpacing: "1px", textAlign: "center", marginBottom: "8px" }}>
              7-Day Price History
            </div>
            
            {/* Animated Ticker Background */}
            <div className="absolute inset-x-0 bottom-16 flex justify-center opacity-30 pointer-events-none">
               <motion.div animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 0.60, repeat: Infinity }} className="h-12 w-full max-w-[200px] flex items-end gap-1 px-4">
                 {[40, 60, 45, 80, 55, 90, 70, 100].map((h, i) => (
                   <div key={i} className="flex-1 bg-[#00C896]/40 rounded-t-sm" style={{ height: `${h}%` }} />
                 ))}
               </motion.div>
            </div>

            <div className="relative z-10 flex flex-col items-center bg-[#020503] p-4 rounded-xl border border-[rgba(255,255,255,0.1)] w-full mb-4 text-center">
              <span className="uppercase" style={{ fontSize: "10px", letterSpacing: "2px", color: "rgba(255,255,255,0.5)", marginBottom: "4px" }}>CARBON CREDIT</span>
              <div style={{ fontSize: "42px", fontWeight: 800, color: "#ffffff", letterSpacing: "-1px" }}>
                <span style={{ fontSize: "0.6em", verticalAlign: "super", fontWeight: 400 }}>₹</span>520
                <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)", fontWeight: 400, marginLeft: "4px", verticalAlign: "middle" }}>/ cr</span>
              </div>
              <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#00C896", marginTop: "6px" }}>● ACTIVE</div>
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "12px", marginTop: "auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
               <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)" }}>24h Volume:</span>
               <span style={{ fontSize: "12px", fontWeight: 700, color: "#ffffff" }}>1,240 CMRV</span>
            </div>
            <div style={{ fontSize: "9px", letterSpacing: "2px", color: "rgba(255,255,255,0.25)", textAlign: "center", marginTop: "8px" }}>
              DEMO TRANSACTION SIMULATION
            </div>
          </div>
        </motion.div>

        {/* RIGHT PANEL: COMPANY PURCHASE */}
        <motion.div
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.24, delay: 0.72 }}
          className="flex-1 group"
          style={{
            display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "340px",
            background: "linear-gradient(rgba(255,255,255,0.03), rgba(255,255,255,0.03)), #020503", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "10px", padding: "24px",
            transition: "border-color 200ms ease"
          }}
          onMouseEnter={(e) => e.currentTarget.style.borderColor = "rgba(0,200,150,0.25)"}
          onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"}
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-4 h-4 text-[#00C896]" />
              <span className="uppercase" style={{ fontSize: "10px", letterSpacing: "3px", color: "rgba(0,200,150,0.85)", fontWeight: 600 }}>COMPANY PURCHASE</span>
            </div>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
              <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>Credits Purchased:</span>
              <span style={{ fontSize: "16px", fontWeight: 700, color: "#38BDF8" }}>{creditsPurchased}</span>
            </div>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "12px", marginTop: "12px" }}>
              <div className="uppercase" style={{ fontSize: "9px", letterSpacing: "3px", color: "rgba(255,255,255,0.35)", marginBottom: "4px" }}>TOTAL PAYMENT</div>
              <div style={{ fontSize: "38px", fontWeight: 800, color: "#ffffff", letterSpacing: "-1px" }}>
                <span style={{ fontSize: "0.6em", verticalAlign: "super", fontWeight: 400 }}>₹</span>{companyPayment.toLocaleString()}
              </div>
            </div>
          </div>

          <div style={{ marginTop: "12px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>Retirement Ready:</span>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "#00C896" }}>✓ YES</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>ESG Compliance:</span>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "#00C896" }}>✓ VERIFIED</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── FEATURE PILLS ROW ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.24, delay: 1.40 }}
        className="relative z-10 shrink-0"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
          flexWrap: "nowrap",
          marginTop: "24px"
        }}
      >
        {features.map((feat, i) => (
          <div key={i} style={{
            border: "1px solid rgba(0,200,150,0.3)",
            padding: "6px 16px",
            borderRadius: "20px",
            fontSize: "10px",
            letterSpacing: "2px",
            color: "rgba(0,200,150,0.8)",
            fontWeight: 600,
            whiteSpace: "nowrap"
          }}>
             <Zap style={{ display: "inline-block", fontSize: "12px", width: "12px", height: "12px", marginRight: "6px", opacity: 0.8, verticalAlign: "text-top" }} />
             {feat}
          </div>
        ))}
      </motion.div>

      {/* ── BOTTOM TAGLINE ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.28, delay: 1.80 }}
        className="relative z-10 shrink-0 flex items-center justify-center whitespace-nowrap"
        style={{ textAlign: "center", padding: "24px 48px 36px", whiteSpace: "nowrap" }}
      >
        <span className="font-black uppercase" style={{ fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 900, letterSpacing: "2px", color: "#ffffff" }}>
          FROM CARBON REDUCTION
        </span>
        <span className="font-black uppercase" style={{ fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 900, letterSpacing: "2px", color: "#00C896", marginLeft: "20px" }}>
          TO DIRECT INCOME.
        </span>
      </motion.div>
    </div>
  );
}
