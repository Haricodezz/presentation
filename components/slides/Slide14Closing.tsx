"use client";

import { motion } from "framer-motion";
import { Globe, GitBranch, ExternalLink, GraduationCap, Users, ShieldCheck, Orbit } from "lucide-react";

export default function Slide14Closing({ isActive }: { isActive: boolean }) {
  if (!isActive) return null;

  const keywords = ["Measure.", "Verify.", "Trade.", "Retire."];
  const secondaryLines = [
    "Empowering Farmers,",
    "Supporting NGOs,",
    "Enabling Sustainable Industries."
  ];

  return (
    <div style={{
      width: "100%", height: "100vh", overflow: "hidden",
      background: "#FFFFFF", color: "#0F172A",
      fontFamily: "'Inter', sans-serif",
      display: "flex", flexDirection: "column",
      alignItems: "center", position: "relative",
    }}>

      {/* ── KEYFRAMES ── */}
      <style>{`
        @keyframes orbitSpin { 100% { transform: rotate(360deg); } }
        @keyframes float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes pulseGlow { 0%,100% { opacity: 0.1; } 50% { opacity: 0.3; } }
      `}</style>

      {/* ── BG GRID ── */}
      <div style={{ position:"absolute", inset:0, pointerEvents:"none",
        backgroundImage:"linear-gradient(rgba(0,0,0,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.02) 1px,transparent 1px)",
        backgroundSize:"50px 50px" }}/>
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 50% 50%,rgba(0,0,0,0) 0%,transparent 70%)", pointerEvents:"none" }}/>

      {/* ── CENTER VISUAL (EARTH) ── */}
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}}
        style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "500px", height: "500px",
          display: "flex", alignItems: "center", justifyContent: "center",
          pointerEvents: "none", zIndex: 0
        }}>
        {/* Glow */}
        <div style={{ position: "absolute", width: "300px", height: "300px", borderRadius: "50%", background: "#22c55e", filter: "blur(100px)", opacity: 0.08, animation: "pulseGlow 6s infinite ease-in-out" }}/>
        
        {/* Wireframe Earth SVG */}
        <Globe strokeWidth={0.5} style={{ width: "350px", height: "350px", color: "rgba(22,163,74,0.25)" }} />

        {/* Satellite Orbits */}
        <div style={{ position: "absolute", width: "420px", height: "420px", border: "1px dashed #CBD5E1", borderRadius: "50%", animation: "orbitSpin 40s linear infinite" }}/>
        <div style={{ position: "absolute", width: "480px", height: "480px", border: "1px solid #E2E8F0", borderRadius: "50%", animation: "orbitSpin 60s linear infinite reverse" }}/>
        
        {/* Data flow dots */}
        <Orbit strokeWidth={1} style={{ position: "absolute", width: "500px", height: "500px", color: "rgba(22,163,74,0.1)", animation: "orbitSpin 30s linear infinite" }} />
      </motion.div>

      {/* ── HEADER ── */}
      <div style={{ textAlign: "center", marginTop: "40px", zIndex: 10 }}>
        <motion.p initial={{opacity:0, y:-10}} animate={{opacity:1, y:0}} transition={{delay:0.3}}
          style={{ fontSize: "10px", letterSpacing: "5px", color: "#16A34A", fontWeight: 700, textTransform: "uppercase", marginBottom: "12px" }}>
          CLOSING
        </motion.p>
        <motion.h1 initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{delay:0.5, duration:0.8}}
          style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, letterSpacing: "2px", margin: "0 0 16px 0", color: "#0F172A", textShadow: "none" }}>
          THANK YOU
        </motion.h1>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.8}}
          style={{ fontSize: "15px", color: "#64748B", maxWidth: "560px", margin: "0 auto", lineHeight: 1.6, fontWeight: 500 }}>
          Building Trust In Carbon Markets Through Artificial Intelligence, Satellite Intelligence And Blockchain Technology.
        </motion.p>
      </div>

      {/* ── MAIN CENTERPIECE ── */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", zIndex: 10, marginTop: "-20px" }}>
        <div style={{ display: "flex", gap: "24px", marginBottom: "32px" }}>
          {keywords.map((word, i) => (
            <motion.span
              key={i}
              initial={{opacity:0, y:20, filter: "blur(10px)"}}
              animate={{opacity:1, y:0, filter: "blur(0px)"}}
              transition={{delay: 1.2 + (i * 0.4), duration: 0.8, ease: "easeOut"}}
              style={{
                fontSize: "clamp(24px, 3vw, 42px)", fontWeight: 900, letterSpacing: "1px",
                color: i === 3 ? "#16A34A" : "#0F172A",
                textShadow: "none",
              }}
            >
              {word}
            </motion.span>
          ))}
        </div>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:3.2, duration:1.5}}
          style={{ textAlign: "center" }}>
          {secondaryLines.map((line, i) => (
            <div key={i} style={{ fontSize: "14px", color: "#64748B", fontWeight: 500, letterSpacing: "1px", marginBottom: "6px" }}>
              {line}
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── PROJECT & TEAM PANELS ── */}
      <div style={{ width: "100%", padding: "0 60px", display: "flex", justifyContent: "space-between", position: "absolute", top: "50%", transform: "translateY(-50%)", zIndex: 10, pointerEvents: "none" }}>
        
        {/* LEFT: Project Info */}
        <motion.div initial={{opacity:0, x:-30}} animate={{opacity:1, x:0}} transition={{delay:2.0}}
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(0,0,0,0.04)", borderRadius: "12px", padding: "20px", backdropFilter: "blur(10px)", width: "260px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px", borderBottom: "1px solid rgba(0,0,0,0.08)", paddingBottom: "12px" }}>
            <GraduationCap style={{ width: "16px", height: "16px", color: "#16A34A" }}/>
            <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2px", color: "#16A34A", textTransform: "uppercase" }}>PROJECT INFO</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#0F172A" }}>Carbon MRV Platform</div>
              <div style={{ fontSize: "10px", color: "#64748B" }}>Major Project 2026</div>
            </div>
            <div>
              <div style={{ fontSize: "11px", color: "#334155" }}>Dept. of Computer Science &amp; Eng.</div>
              <div style={{ fontSize: "10px", color: "#64748B" }}>B.P. Mandal College of Engineering</div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Team Info */}
        <motion.div initial={{opacity:0, x:30}} animate={{opacity:1, x:0}} transition={{delay:2.4}}
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(0,0,0,0.04)", borderRadius: "12px", padding: "20px", backdropFilter: "blur(10px)", width: "260px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px", borderBottom: "1px solid rgba(0,0,0,0.08)", paddingBottom: "12px" }}>
            <Users style={{ width: "16px", height: "16px", color: "#16A34A" }}/>
            <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2px", color: "#16A34A", textTransform: "uppercase" }}>TEAM</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: "13px", fontWeight: 700, color: "#0F172A" }}>Hari Prakash</span>
              <span style={{ fontSize: "13px", fontWeight: 700, color: "#0F172A" }}>Aryan Kumar</span>
            </div>
            <div style={{ borderTop: "1px dashed rgba(0,0,0,0.08)", paddingTop: "12px" }}>
              <div style={{ fontSize: "9px", color: "#16A34A", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "2px" }}>Guide</div>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#0F172A" }}>Md Ehtashamoul Haque</div>
              <div style={{ fontSize: "10px", color: "#64748B" }}>Assistant Professor</div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* ── BOTTOM LINKS ── */}
      <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:3.8}}
        style={{ display: "flex", gap: "16px", marginBottom: "24px", zIndex: 10 }}>
        
        <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "rgba(22,163,74,0.1)", border: "1px solid rgba(22,163,74,0.3)", borderRadius: "30px", padding: "8px 20px" }}>
          <ExternalLink style={{ width: "14px", height: "14px", color: "#16A34A" }}/>
          <span style={{ fontSize: "11px", fontWeight: 600, color: "#0F172A" }}>cmrv.vercel.app</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "30px", padding: "8px 20px" }}>
          <GitBranch style={{ width: "14px", height: "14px", color: "#475569" }}/>
          <span style={{ fontSize: "11px", fontWeight: 600, color: "#475569" }}>github.com/Haricodezz/carbon-mrv-platform</span>
        </div>

      </motion.div>

      {/* ── IMPACT STATEMENT FOOTER ── */}
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:4.4, duration: 1.5}}
        style={{ width: "100%", background: "#F1F5F9", borderTop: "1px solid #E2E8F0", padding: "16px 0", display: "flex", justifyContent: "center", alignItems: "center", gap: "12px", zIndex: 10 }}>
        
        <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2px", color: "#64748B" }}>FROM ENVIRONMENTAL DATA</span>
        <span style={{ color: "#16A34A", fontSize: "10px" }}>→</span>
        <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2px", color: "#64748B" }}>VERIFIED CLIMATE IMPACT</span>
        <span style={{ color: "#16A34A", fontSize: "10px" }}>→</span>
        <span style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "2px", color: "#16A34A" }}>A MORE SUSTAINABLE FUTURE</span>

      </motion.div>

    </div>
  );
}
