"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import { ExternalLink, GitBranch, FileText, ShieldCheck, Satellite, Brain, Link, Activity, Award, ArrowRight } from "lucide-react";

const LIVE_URL = "https://cmrv.vercel.app";
const GITHUB_URL = "https://github.com/Haricodezz/carbon-mrv-platform";
const TYPED_URL = "cmrv.vercel.app";

const BADGES = [
  { label: "AI Powered", icon: Brain },
  { label: "Satellite Verified", icon: Satellite },
  { label: "Blockchain Secured", icon: Link },
  { label: "Carbon Marketplace", icon: Activity },
  { label: "Real-Time Monitoring", icon: Activity },
  { label: "Certificate Generation", icon: Award },
];

/* ── Typing animation hook ── */
function useTyped(text: string, delay = 1200) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) clearInterval(interval);
      }, 55);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);
  return displayed;
}

export default function Slide13LiveDemo({ isActive }: { isActive: boolean }) {
  if (!isActive) return null;
  const typedUrl = useTyped(TYPED_URL, 1400);

  return (
    <div style={{
      width: "100%", height: "100vh", overflow: "hidden",
      background: "#FFFFFF", color: "#0F172A",
      fontFamily: "'Inter', sans-serif",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      position: "relative",
    }}>

      {/* ── KEYFRAMES ── */}
      <style>{`
        @keyframes floatBrowser { 0%,100%{transform:translateY(0px);} 50%{transform:translateY(-8px);} }
        @keyframes btnPulse { 0%,100%{box-shadow:0 1px 3px rgba(0,0,0,0.10);} 50%{box-shadow:0 2px 10px rgba(22,163,74,0.30);} }
        @keyframes particle { 0%{transform:translateY(0) translateX(0); opacity:0;} 20%{opacity:0.3;} 80%{opacity:0.2;} 100%{transform:translateY(-120px) translateX(30px); opacity:0;} }
        @keyframes rimGlow { 0%,100%{box-shadow:0 1px 4px rgba(0,0,0,0.06);} 50%{box-shadow:0 4px 16px rgba(0,0,0,0.12);} }
      `}</style>

      {/* ── BG GRID ── */}
      <div style={{ position:"absolute", inset:0, pointerEvents:"none",
        backgroundImage:"linear-gradient(rgba(0,0,0,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.035) 1px,transparent 1px)",
        backgroundSize:"40px 40px" }}/>
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 50% 40%,rgba(0,0,0,0) 0%,transparent 60%)", pointerEvents:"none" }}/>

      {/* ── AMBIENT PARTICLES ── */}
      {Array.from({length: 12}).map((_, i) => (
        <div key={i} style={{
          position:"absolute",
          left: `${8 + (i * 7.5)}%`,
          bottom: `${10 + (i % 4) * 12}%`,
          width: i % 3 === 0 ? "4px" : "2px",
          height: i % 3 === 0 ? "4px" : "2px",
          borderRadius:"50%",
          background: "#16A34A",
          opacity: 0.18,
          animation: `particle ${4 + (i % 3)}s ${i * 0.5}s infinite ease-out`,
        }}/>
      ))}

      {/* ── SECTION LABEL ── */}
      <motion.p initial={{opacity:0, y:-10}} animate={{opacity:1, y:0}} transition={{delay: 0.12}}
        style={{ fontSize:"10px", letterSpacing:"5px", color:"#16A34A", fontWeight:700, textTransform:"uppercase", marginBottom:"10px" }}>
        LIVE DEMONSTRATION
      </motion.p>

      {/* ── MAIN TITLE ── */}
      <motion.h1 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay: 0.22}}
        style={{ fontSize:"clamp(28px,3.8vw,52px)", fontWeight:900, letterSpacing:"-1.5px", lineHeight:1.05, textAlign:"center", marginBottom:"8px" }}>
        SEE THE PLATFORM IN ACTION
      </motion.h1>

      <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay: 0.30}}
        style={{ fontSize:"14px", color:"rgba(255,255,255,0.45)", marginBottom:"28px", textAlign:"center" }}>
        A fully deployed Carbon MRV ecosystem ready for live demonstration.
      </motion.p>

      {/* ── FLOATING BROWSER WINDOW ── */}
      <motion.div
        initial={{opacity:0, y:30, scale:0.95}}
        animate={{opacity:1, y:0, scale:1}}
        transition={{delay: 0.36, duration: 0.28, ease:[0.22,1,0.36,1]}}
        style={{
          width:"min(700px, 78vw)",
          borderRadius:"14px",
          overflow:"hidden",
          border:"1px solid #E2E8F0",
          background:"#FFFFFF",
          boxShadow:"0 4px 24px rgba(0,0,0,0.10)",
          animation:"floatBrowser 6s ease-in-out infinite, rimGlow 4s ease-in-out infinite",
          flexShrink:0,
          marginBottom:"22px",
        }}
      >
        {/* Browser Chrome */}
        <div style={{
          height:"38px", background:"#F1F5F9",
          borderBottom:"1px solid #E2E8F0",
          display:"flex", alignItems:"center", padding:"0 14px", gap:"10px"
        }}>
          {/* Traffic lights */}
          <div style={{display:"flex", gap:"6px", flexShrink:0}}>
            {["#f87171","#fbbf24","#16A34A"].map((c,i)=>(
              <div key={i} style={{width:"10px", height:"10px", borderRadius:"50%", background:c, opacity:0.8}}/>
            ))}
          </div>

          {/* URL Bar */}
          <div style={{
            flex:1, height:"22px",
            background:"#FFFFFF",
            border:"1px solid #CBD5E1",
            borderRadius:"6px",
            display:"flex", alignItems:"center",
            padding:"0 10px", gap:"6px"
          }}>
            <ShieldCheck style={{width:"10px", height:"10px", color:"#16A34A", flexShrink:0}}/>
            <span style={{fontSize:"11px", color:"#475569", fontFamily:"monospace"}}>
              https://{typedUrl}
              <span style={{color:"#16A34A", animation:"btnPulse 1s infinite", display:typedUrl.length < TYPED_URL.length ? "inline" : "none"}}>|</span>
            </span>
          </div>

          <ExternalLink style={{width:"12px", height:"12px", color:"#94A3B8", flexShrink:0}}/>
        </div>

        {/* Browser Body — Real Platform Screenshot */}
        <div style={{
          height:"210px",
          position:"relative", overflow:"hidden",
          background:"#f9fafb",
        }}>
          {/* Actual platform homepage screenshot */}
          <img
            src="/carbon_mrv_real_homepage.png"
            alt="Carbon MRV Platform Homepage"
            style={{
              width:"100%", height:"100%",
              objectFit:"cover", objectPosition:"top center",
              display:"block",
            }}
          />
          {/* Bottom fade into slide bg */}
          <div style={{position:"absolute", bottom:0, left:0, right:0, height:"50px", background:"linear-gradient(transparent,rgba(248,250,252,0.8))"}}/>
          {/* Live indicator */}
          <div style={{position:"absolute", top:"10px", right:"10px", display:"flex", alignItems:"center", gap:"5px", background:"rgba(255,255,255,0.9)", border:"1px solid #BBF7D0", borderRadius:"20px", padding:"3px 8px", backdropFilter:"blur(4px)"}}>
            <motion.div animate={{opacity:[0.4,1,0.4]}} transition={{duration: 0.48, repeat:Infinity}}
              style={{width:"6px", height:"6px", borderRadius:"50%", background:"#16A34A"}}/>
            <span style={{fontSize:"9px", color:"#16A34A", fontWeight:700, letterSpacing:"1px"}}>LIVE</span>
          </div>
        </div>
      </motion.div>

      {/* ── CTA BUTTONS ── */}
      <motion.div initial={{opacity:0, y:16}} animate={{opacity:1, y:0}} transition={{delay: 0.60}}
        style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"10px", marginBottom:"22px"}}>

        {/* Primary */}
        <motion.a
          href={LIVE_URL} target="_blank" rel="noopener noreferrer"
          whileHover={{scale:1.04}} whileTap={{scale:0.97}}
          style={{
            display:"flex", alignItems:"center", gap:"10px",
            background:"linear-gradient(135deg,#16a34a,#22c55e,#4ade80)",
            color:"#020703",
            borderRadius:"50px",
            padding:"13px 36px",
            fontSize:"15px", fontWeight:900, letterSpacing:"0.5px",
            textDecoration:"none",
            cursor:"pointer",
            animation:"btnPulse 3s infinite",
          }}
        >
          <span style={{fontSize:"18px"}}>🚀</span>
          OPEN LIVE PLATFORM
          <ExternalLink style={{width:"14px", height:"14px"}}/>
        </motion.a>

        {/* Secondary buttons */}
        <div style={{display:"flex", gap:"10px"}}>
          <motion.a
            href={GITHUB_URL} target="_blank" rel="noopener noreferrer"
            whileHover={{scale:1.04, borderColor:"rgba(22,163,74,0.5)"}}
            style={{
              display:"flex", alignItems:"center", gap:"7px",
              background:"#F8FAFC",
              border:"1px solid #E2E8F0",
              color:"#475569",
              borderRadius:"50px", padding:"8px 20px",
              fontSize:"12px", fontWeight:600, letterSpacing:"0.3px",
              textDecoration:"none", cursor:"pointer",
            }}
          >
            <GitBranch style={{width:"13px", height:"13px"}}/> VIEW SOURCE CODE
          </motion.a>

          <motion.div
            whileHover={{scale:1.04, borderColor:"rgba(22,163,74,0.5)"}}
            style={{
              display:"flex", alignItems:"center", gap:"7px",
              background:"#F8FAFC",
              border:"1px solid #E2E8F0",
              color:"#94A3B8",
              borderRadius:"50px", padding:"8px 20px",
              fontSize:"12px", fontWeight:600, letterSpacing:"0.3px",
              cursor:"default",
            }}
          >
            <FileText style={{width:"13px", height:"13px"}}/> PROJECT DOCUMENTATION
          </motion.div>
        </div>
      </motion.div>

      {/* ── PLATFORM BADGES ── */}
      <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay: 0.80}}
        style={{display:"flex", gap:"8px", flexWrap:"wrap", justifyContent:"center", marginBottom:"16px", maxWidth:"700px"}}>
        {BADGES.map((badge, i) => (
          <motion.div key={i} initial={{opacity:0, scale:0.85}} animate={{opacity:1, scale:1}} transition={{delay: 0.34 + i * 0.04}}
            style={{
              display:"flex", alignItems:"center", gap:"5px",
              background:"#F0FDF4",
              border:"1px solid #BBF7D0",
              borderRadius:"20px", padding:"4px 12px",
            }}>
            <badge.icon style={{width:"9px", height:"9px", color:"#16A34A"}}/>
            <span style={{fontSize:"9px", fontWeight:700, letterSpacing:"1px", color:"#16A34A", textTransform:"uppercase"}}>{badge.label}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* ── FOOTER TAGLINE ── */}
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay: 1.04}}
        style={{display:"flex", alignItems:"center", gap:"12px", textAlign:"center"}}>
        <span style={{fontSize:"12px", fontWeight:700, letterSpacing:"2px", textTransform:"uppercase", color:"#64748B"}}>
          FROM ENVIRONMENTAL DATA
        </span>
        <ArrowRight style={{width:"12px", height:"12px", color:"rgba(22,163,74,0.6)"}}/>
        <span style={{fontSize:"12px", fontWeight:700, letterSpacing:"2px", textTransform:"uppercase", color:"#64748B"}}>
          TO VERIFIED CLIMATE IMPACT
        </span>
        <ArrowRight style={{width:"12px", height:"12px", color:"rgba(22,163,74,0.6)"}}/>
        <span style={{fontSize:"12px", fontWeight:800, letterSpacing:"2px", textTransform:"uppercase", color:"#16A34A", textShadow:"none"}}>
          EXPERIENCE THE PLATFORM LIVE
        </span>
      </motion.div>

    </div>
  );
}
