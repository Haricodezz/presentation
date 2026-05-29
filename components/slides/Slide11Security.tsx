"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ShieldCheck, Flame, FileCheck, Zap, Factory } from "lucide-react";

export default function Slide11Security({ isActive }: { isActive: boolean }) {
  const [hash, setHash] = useState("0x0000...0000");

  useEffect(() => {
    if (!isActive) return;
    const chars = "ABCDEF0123456789";
    let iterations = 0;
    const interval = setInterval(() => {
      if (iterations >= 20) {
        setHash("0x8A4F...E291");
        clearInterval(interval);
        return;
      }
      const randomHash = Array(4).fill(0).map(() => chars[Math.floor(Math.random() * chars.length)]).join("");
      setHash(`0x${randomHash}...${Array(4).fill(0).map(() => chars[Math.floor(Math.random() * chars.length)]).join("")}`);
      iterations++;
    }, 100);
    return () => clearInterval(interval);
  }, [isActive]);

  if (!isActive) return null;

  const features = [
    "PERMANENT RETIREMENT",
    "BLOCKCHAIN PROOF",
    "DOWNLOADABLE CERTIFICATE",
    "ESG COMPLIANCE READY"
  ];

  return (
    <div
      className="w-full bg-[#020503] text-white relative flex flex-col justify-between items-center overflow-hidden"
      style={{
        fontFamily: "'Inter', sans-serif",
        padding: "40px 48px",
        height: "100vh"
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
          style={{ fontSize: "11px", letterSpacing: "4px", color: "#00C896", fontWeight: 500, marginBottom: "12px" }}
          className="uppercase"
        >
          CARBON OFFSET PROOF
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
          RETIRE CREDITS.<br/>PROVE IMPACT.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.28, delay: 0.36 }}
          style={{
            fontSize: "15px",
            color: "rgba(255,255,255,0.55)",
            marginTop: "12px",
            letterSpacing: "0.3px",
            textAlign: "center"
          }}
        >
          Permanent retirement creates verifiable environmental accountability.
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
        }}
      >
        {/* Animated Connection Lines (Absolute behind panels) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
          <line x1="10%" y1="50%" x2="90%" y2="50%" stroke="rgba(0,200,150,0.25)" strokeWidth="1" strokeDasharray="4 4" />
          
          {/* Tokens moving */}
          <motion.circle cx="30%" cy="50%" r="4" fill="#38BDF8" className="blur-[1px]"
            animate={{ cx: ["28%", "45%"], opacity: [0, 1, 0] }}
            transition={{ duration: 0.60, repeat: Infinity, ease: "linear", delay: 0.88 }} />
          <motion.circle cx="70%" cy="50%" r="4" fill="#00C896" className="blur-[1px]"
            animate={{ cx: ["72%", "55%"], opacity: [0, 1, 0] }}
            transition={{ duration: 0.60, repeat: Infinity, ease: "linear", delay: 1.08 }} />
        </svg>

        {/* LEFT PANEL: PURCHASED CREDITS */}
        <motion.div
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.24, delay: 0.48 }}
          className="flex-1 group"
          style={{
            display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "280px",
            backgroundColor: "#020503",
            backgroundImage: "linear-gradient(rgba(255,255,255,0.03), rgba(255,255,255,0.03))",
            border: "1px solid rgba(255,255,255,0.08)", borderRadius: "10px", padding: "20px 24px",
            transition: "border-color 200ms ease"
          }}
          onMouseEnter={(e) => e.currentTarget.style.borderColor = "rgba(0,200,150,0.25)"}
          onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"}
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Factory className="w-4 h-4 text-[#38BDF8]" />
              <span className="uppercase" style={{ fontSize: "10px", letterSpacing: "3px", color: "rgba(56,189,248,0.85)", fontWeight: 600 }}>PURCHASED CREDITS</span>
            </div>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
              <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>Company:</span>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "#ffffff", textAlign: "right" }}>ABC Manufacturing Ltd.</span>
            </div>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "12px", marginTop: "12px" }}>
              <div className="uppercase" style={{ fontSize: "9px", letterSpacing: "3px", color: "rgba(255,255,255,0.35)", marginBottom: "4px" }}>CREDITS AVAILABLE</div>
              <div style={{ fontSize: "38px", fontWeight: 800, color: "#38BDF8", letterSpacing: "-1px", lineHeight: 1 }}>
                50
              </div>
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "12px", marginTop: "12px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>Equivalent Offset:</span>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "#ffffff", textAlign: "right" }}>50 tCO₂</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>Status:</span>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "#F59E0B", textAlign: "right" }}>READY FOR RETIREMENT</span>
            </div>
          </div>
        </motion.div>

        {/* CENTER PANEL: RETIREMENT EVENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.24, delay: 0.60 }}
          className="flex-1 group relative"
          style={{
            display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "280px",
            backgroundColor: "#020503",
            backgroundImage: "linear-gradient(rgba(255,255,255,0.03), rgba(255,255,255,0.03))",
            border: "1px solid rgba(255,255,255,0.08)", borderRadius: "10px", padding: "20px 24px",
            transition: "border-color 200ms ease"
          }}
          onMouseEnter={(e) => e.currentTarget.style.borderColor = "rgba(0,200,150,0.25)"}
          onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"}
        >
          <div className="flex items-center gap-2 mb-4 justify-center">
            <Flame className="w-4 h-4 text-[#F59E0B]" />
            <span className="uppercase" style={{ fontSize: "10px", letterSpacing: "3px", color: "rgba(245,158,11,0.85)", fontWeight: 600 }}>RETIREMENT EVENT</span>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center relative">
            
            {/* Animated Burn Visual */}
            <div className="relative z-10 flex flex-col items-center bg-[#020503] p-4 rounded-xl border border-[rgba(255,255,255,0.1)] w-full text-center overflow-hidden">
              <motion.div 
                animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1, 0.95] }} 
                transition={{ duration: 0.60, repeat: Infinity }}
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#F59E0B20,_transparent_70%)] pointer-events-none"
              />
              <span className="uppercase" style={{ fontSize: "10px", letterSpacing: "2px", color: "rgba(255,255,255,0.5)", marginBottom: "4px" }}>CREDITS BURNED</span>
              <div style={{ fontSize: "42px", fontWeight: 800, color: "#ffffff", letterSpacing: "-1px", lineHeight: 1 }}>
                50
              </div>
              <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#F59E0B", marginTop: "6px" }}>● PERMANENTLY RETIRED</div>
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "12px", marginTop: "12px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
               <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)" }}>Transaction Hash:</span>
               <span style={{ fontSize: "11px", fontWeight: 700, color: "#38BDF8", fontFamily: "monospace" }}>{hash}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
               <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)" }}>Timestamp:</span>
               <span style={{ fontSize: "11px", fontWeight: 700, color: "#ffffff", fontFamily: "monospace" }}>2026-05-30</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT PANEL: DIGITAL CERTIFICATE */}
        <motion.div
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.24, delay: 0.72 }}
          className="flex-1 group relative overflow-hidden"
          style={{
            display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "280px",
            backgroundColor: "#020503",
            backgroundImage: "linear-gradient(rgba(255,255,255,0.03), rgba(255,255,255,0.03))",
            border: "1px solid rgba(255,255,255,0.08)", borderRadius: "10px", padding: "20px 24px",
            transition: "border-color 200ms ease"
          }}
          onMouseEnter={(e) => e.currentTarget.style.borderColor = "rgba(0,200,150,0.25)"}
          onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#00C896]/[0.05] to-transparent pointer-events-none" />
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FileCheck className="w-4 h-4 text-[#00C896]" />
              <span className="uppercase" style={{ fontSize: "10px", letterSpacing: "3px", color: "rgba(0,200,150,0.85)", fontWeight: 600 }}>DIGITAL CERTIFICATE</span>
            </div>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
              <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>Certificate ID:</span>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "#ffffff", fontFamily: "monospace" }}>CMRV-2026-00452</span>
            </div>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "12px", marginTop: "12px" }}>
              <div className="uppercase" style={{ fontSize: "9px", letterSpacing: "3px", color: "rgba(255,255,255,0.35)", marginBottom: "4px" }}>CARBON OFFSET VERIFIED</div>
              <div style={{ fontSize: "38px", fontWeight: 800, color: "#ffffff", letterSpacing: "-1px", lineHeight: 1 }}>
                50 <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)", fontWeight: 400 }}>tCO₂</span>
              </div>
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "12px", marginTop: "12px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "4px 0" }}>
              <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>Verification:</span>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "#00C896" }}>✓ VALIDATED</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "4px 0" }}>
              <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>Status:</span>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "#00C896" }}>✓ GENERATED</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── CENTER HIGHLIGHT BADGE ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.24, delay: 1.20 }}
        className="relative z-10 shrink-0 flex items-center justify-center gap-3 px-6 py-3 rounded-full border border-[#00C896]/30 bg-[#00C896]/10 shadow-[0_0_30px_rgba(0,200,150,0.2)]"
      >
        <ShieldCheck className="w-5 h-5 text-[#00C896]" />
        <span className="font-mono text-[#00C896] font-bold tracking-[0.2em] text-[12px] uppercase">
          50 tCO₂ OFFSET VERIFIED
        </span>
      </motion.div>

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
        }}
      >
        {features.map((feat, i) => (
          <div key={i} style={{
            border: "1px solid rgba(255,255,255,0.1)",
            padding: "6px 16px",
            borderRadius: "20px",
            fontSize: "10px",
            letterSpacing: "2px",
            color: "rgba(255,255,255,0.7)",
            fontWeight: 600,
            whiteSpace: "nowrap"
          }}>
             <Zap style={{ display: "inline-block", fontSize: "12px", width: "12px", height: "12px", marginRight: "6px", opacity: 0.6, verticalAlign: "text-top" }} />
             {feat}
          </div>
        ))}
      </motion.div>

      {/* ── BOTTOM TAGLINE ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.28, delay: 1.80 }}
        className="relative z-10 shrink-0 flex items-center justify-center whitespace-nowrap"
        style={{ textAlign: "center", whiteSpace: "nowrap" }}
      >
        <span className="font-black uppercase" style={{ fontSize: "clamp(18px, 2.5vw, 28px)", fontWeight: 900, letterSpacing: "2px", color: "#ffffff" }}>
          NOT JUST A CLAIM.
        </span>
        <span className="font-black uppercase" style={{ fontSize: "clamp(18px, 2.5vw, 28px)", fontWeight: 900, letterSpacing: "2px", color: "#00C896", marginLeft: "16px" }}>
          A VERIFIABLE CLIMATE COMMITMENT.
        </span>
      </motion.div>
    </div>
  );
}
