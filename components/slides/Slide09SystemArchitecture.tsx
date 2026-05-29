"use client";

import { motion } from "framer-motion";
import {
  Users, MonitorSmartphone, Server, Cog, Database, Link, Satellite,
  ArrowDown, ShieldCheck, BrainCircuit, Cloud, ArrowRight, LayoutTemplate
} from "lucide-react";

const LAYERS = [
  { id: 1, label: "USERS",                    short: "Stakeholders",      values: ["Farmers", "Companies", "Auditors", "NGOs", "Admin"],                                                                                                              icon: Users,           color: "#4ade80", type: "standard" },
  { id: 2, label: "PRESENTATION LAYER",       short: "Frontend",          values: ["Next.js", "React", "TypeScript", "Tailwind CSS"],                                                                                                                  icon: MonitorSmartphone,color: "#60a5fa", type: "standard" },
  { id: 3, label: "APPLICATION LAYER",        short: "API Gateway",       values: ["FastAPI", "REST APIs", "JWT Security", "Role Mgmt", "API Gateway"],                                                                                                icon: Server,          color: "#a78bfa", type: "standard" },
  { id: 4, label: "BUSINESS SERVICES",        short: "Core Logic",        values: ["Carbon Engine", "Marketplace", "Monitoring", "Certificates", "Verification", "Reserve Buffer"],                                                                    icon: Cog,             color: "#fbbf24", type: "large"    },
  { id: 5, label: "AI / ML INTELLIGENCE",     short: "Innovation Layer",  values: ["NDVI Analysis", "Carbon Prediction", "Sequestration", "Deforestation", "Fraud Detection", "Risk Scoring", "Env Forecasting"],                                     icon: BrainCircuit,    color: "#4ade80", type: "ai"       },
  { id: 6, label: "DATA LAYER",               short: "Persistence",       values: ["PostgreSQL", "Project Records", "User Data", "Satellite Data", "Transactions", "Certificates"],                                                                    icon: Database,        color: "#60a5fa", type: "standard" },
  { id: 7, label: "BLOCKCHAIN LAYER",         short: "Immutable Ledger",  values: ["Polygon", "Smart Contracts", "Credit Minting", "Retirement", "Audit Logs"],                                                                                       icon: Link,            color: "#2dd4bf", type: "blockchain"},
  { id: 8, label: "EXTERNAL DATA SOURCES",    short: "Earth Observation", values: ["Sentinel-2", "Landsat", "GIS Data", "Weather APIs", "Planetary Computer"],                                                                                        icon: Satellite,       color: "#f87171", type: "standard" },
];

const TECH_STACK = [
  { category: "FRONTEND",   items: ["Next.js", "React", "TypeScript", "Tailwind"],   icon: LayoutTemplate },
  { category: "BACKEND",    items: ["FastAPI", "Python", "REST"],                    icon: Server },
  { category: "DATABASE",   items: ["PostgreSQL", "Supabase", "Redis"],              icon: Database },
  { category: "AI / ML",    items: ["Scikit-Learn", "NumPy", "Pandas", "PyTorch"],   icon: BrainCircuit },
  { category: "BLOCKCHAIN", items: ["Polygon", "Solidity", "Web3"],                  icon: Link },
  { category: "DEPLOYMENT", items: ["Docker", "Vercel", "Render"],                   icon: Cloud },
];

const BADGES = [
  { text: "AI DRIVEN" },
  { text: "SATELLITE VERIFIED" },
  { text: "BLOCKCHAIN SECURED" },
  { text: "SCALABLE" },
  { text: "AUDITABLE" },
  { text: "TRANSPARENT" },
];

const IMPACT_FLOW = [
  { text: "SATELLITE DATA", green: false },
  { text: "AI INTELLIGENCE", green: true },
  { text: "BLOCKCHAIN TRUST", green: false },
  { text: "CARBON CREDITS", green: true },
];

export default function Slide09SystemArchitecture({ isActive }: { isActive: boolean }) {
  if (!isActive) return null;

  return (
    <div style={{
      width: "100%", height: "100vh", overflow: "hidden",
      background: "#050a07", color: "white",
      fontFamily: "'Inter', sans-serif",
      display: "flex", flexDirection: "column",
    }}>
      <style>{`
        @keyframes aiPulse {
          0%,100%{ box-shadow:0 0 12px rgba(74,222,128,0.2),inset 0 0 8px rgba(74,222,128,0.08); border-color:rgba(74,222,128,0.55);}
          50%    { box-shadow:0 0 32px rgba(74,222,128,0.55),inset 0 0 18px rgba(74,222,128,0.22); border-color:rgba(74,222,128,1);}
        }
        @keyframes chainGlow {
          0%,100%{ box-shadow:0 0 6px rgba(45,212,191,0.08);}
          50%    { box-shadow:0 0 20px rgba(45,212,191,0.28);}
        }
      `}</style>

      {/* BG GRID */}
      <div style={{ position:"absolute", inset:0, pointerEvents:"none",
        backgroundImage:"linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)",
        backgroundSize:"40px 40px" }}/>
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at center,rgba(34,197,94,0.05) 0%,transparent 65%)", pointerEvents:"none" }}/>

      {/* HEADING */}
      <div style={{ textAlign:"center", flexShrink:0, padding:"14px 44px 6px", position:"relative", zIndex:10 }}>
        <motion.p initial={{opacity:0,y:-5}} animate={{opacity:1,y:0}} transition={{delay: 0.08}}
          style={{ fontSize:"9px", letterSpacing:"4px", color:"#4ade80", fontWeight:700, textTransform:"uppercase", marginBottom:"5px" }}>
          TECHNICAL FOUNDATION
        </motion.p>
        <motion.h2 initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} transition={{delay: 0.16}}
          style={{ fontSize:"clamp(20px,2.2vw,28px)", fontWeight:900, letterSpacing:"-0.5px", lineHeight:1.1, margin:"0 0 5px 0" }}>
          SYSTEM ARCHITECTURE
        </motion.h2>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay: 0.24}}
          style={{ fontSize:"11px", color:"rgba(255,255,255,0.42)", margin:0 }}>
          The complete technical architecture powering the Carbon MRV Platform.
        </motion.p>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ flex:1, display:"flex", flexDirection:"row", gap:"12px", padding:"6px 44px 6px 44px", overflow:"hidden", position:"relative", zIndex:10 }}>

        {/* LEFT: 66% LAYER STACK */}
        <div style={{ flex:"0 0 65%", display:"flex", flexDirection:"column", justifyContent:"space-between", height:"100%" }}>
          {LAYERS.map((layer, index) => (
            <div key={layer.id} style={{ display:"flex", flexDirection:"column", alignItems:"center", flex:1 }}>

              {/* Row Card */}
              <motion.div
                initial={{ opacity:0, x:-16 }}
                animate={{ opacity:1, x:0 }}
                transition={{ duration: 0.16, delay: 0.06 + index * 0.04 }}
                style={{
                  width:"100%",
                  height: layer.type === "ai" ? "46px" : "40px",
                  display:"flex", alignItems:"center",
                  borderRadius:"8px", overflow:"hidden",
                  animation: layer.type === "ai" ? "aiPulse 3s infinite" : layer.type === "blockchain" ? "chainGlow 4s infinite" : "none",
                  border: layer.type === "ai" ? "1px solid rgba(74,222,128,0.6)" : "1px solid rgba(255,255,255,0.07)",
                  flexShrink:0,
                }}
              >
                {/* Left color stripe */}
                <div style={{
                  width:"3px", height:"100%", flexShrink:0,
                  background: layer.color,
                  opacity: 0.9,
                  boxShadow:`0 0 8px ${layer.color}`,
                }}/>

                {/* Icon + Label block */}
                <div style={{
                  display:"flex", alignItems:"center", gap:"8px",
                  padding:"0 12px 0 10px", flexShrink:0,
                  width:"200px",
                  background: layer.type === "ai" ? "rgba(13,31,18,0.8)" : "rgba(255,255,255,0.025)",
                  height:"100%", borderRight:"1px solid rgba(255,255,255,0.06)",
                }}>
                  <layer.icon style={{ width:"14px", height:"14px", color:layer.color, flexShrink:0 }}/>
                  <div style={{ display:"flex", flexDirection:"column" }}>
                    <span style={{
                      fontSize:"11px", fontWeight:800, letterSpacing:"0.6px",
                      color: layer.type === "ai" ? "#4ade80" : "#ffffff",
                      whiteSpace:"nowrap", lineHeight:1.2,
                    }}>{layer.label}</span>
                    <span style={{ fontSize:"8px", color:layer.color, opacity:0.6, letterSpacing:"0.5px", lineHeight:1 }}>
                      {layer.short}
                    </span>
                  </div>
                </div>

                {/* Tags area */}
                <div style={{
                  flex:1, height:"100%", display:"flex", alignItems:"center",
                  padding:"0 12px",
                  background: layer.type === "ai" ? "rgba(13,31,18,0.6)" : "rgba(255,255,255,0.015)",
                  gap:"6px", overflow:"hidden",
                  flexWrap:"nowrap",
                }}>
                  {layer.values.map((val, i) => (
                    <span key={i} style={{
                      fontSize:"10px",
                      color: layer.type === "ai" ? "#86efac" : "#94a3b8",
                      background: layer.type === "ai" ? "rgba(74,222,128,0.08)" : "rgba(255,255,255,0.04)",
                      border: `1px solid ${layer.type === "ai" ? "rgba(74,222,128,0.2)" : "rgba(255,255,255,0.07)"}`,
                      borderRadius:"4px",
                      padding:"1px 6px",
                      whiteSpace:"nowrap",
                      flexShrink:0,
                      fontWeight: layer.type === "ai" ? 600 : 400,
                    }}>{val}</span>
                  ))}
                </div>
              </motion.div>

              {/* Connector */}
              {index < LAYERS.length - 1 && (
                <div style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", position:"relative", width:"100%", minHeight:"6px" }}>
                  <div style={{ width:"1px", position:"absolute", top:0, bottom:0, background:"rgba(74,222,128,0.15)" }}/>
                  <ArrowDown style={{ width:"8px", height:"8px", color:"#4ade80", position:"relative", zIndex:1 }}/>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* RIGHT: TECH STACK */}
        <div style={{ flex:"0 0 33%", display:"flex", flexDirection:"column", height:"100%", position:"relative" }}>

          {/* Nav dots */}
          <div style={{ position:"absolute", right:"-22px", top:"50%", transform:"translateY(-50%)", display:"flex", flexDirection:"column", gap:"8px", zIndex:20 }}>
            {Array.from({length:9}).map((_,i)=>(
              <div key={i} style={{ width:"5px", height:"5px", borderRadius:"50%", background:i===4?"#4ade80":"#1e3a28", boxShadow:i===4?"0 0 6px #4ade80":"none" }}/>
            ))}
          </div>

          <motion.div initial={{opacity:0,x:18}} animate={{opacity:1,x:0}} transition={{delay: 0.64}}
            style={{ width:"100%", height:"100%", background:"rgba(255,255,255,0.02)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:"8px", padding:"12px", display:"flex", flexDirection:"column" }}>

            <div style={{ display:"flex", alignItems:"center", gap:"6px", marginBottom:"8px", flexShrink:0, paddingBottom:"8px", borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
              <Cog style={{ width:"11px", height:"11px", color:"#4ade80" }}/>
              <span style={{ fontSize:"9px", fontWeight:700, letterSpacing:"2px", color:"#4ade80", textTransform:"uppercase" }}>TECHNOLOGY STACK</span>
            </div>

            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"5px", flex:1, alignContent:"start" }}>
              {TECH_STACK.map((group, idx) => (
                <motion.div key={idx} initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} transition={{delay: 0.72+idx*0.09}}
                  style={{ background:"rgba(0,0,0,0.25)", border:"1px solid rgba(255,255,255,0.06)", borderRadius:"6px", padding:"8px 10px", display:"flex", flexDirection:"column", gap:"2px", alignSelf:"start" }}>
                  <span style={{ fontSize:"8px", color:"rgba(74,222,128,0.6)", textTransform:"uppercase", letterSpacing:"1.5px", fontWeight:700, marginBottom:"3px", display:"flex", alignItems:"center", gap:"4px" }}>
                    <group.icon style={{ width:"8px", height:"8px" }}/> {group.category}
                  </span>
                  {group.items.map((item, i) => (
                    <span key={i} style={{ fontSize:"11px", color:"#e2e8f0", fontWeight:500, lineHeight:"1.5" }}>{item}</span>
                  ))}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM BADGES BAR */}
      <motion.div initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} transition={{delay: 1.04}}
        style={{ flexShrink:0, height:"34px", background:"#080e09", borderTop:"1px solid #1a2e1e", display:"flex", alignItems:"center", justifyContent:"center", gap:"24px" }}>
        {BADGES.map((badge,i)=>(
          <div key={i} style={{ display:"flex", alignItems:"center", gap:"5px" }}>
            <ShieldCheck style={{ width:"9px", height:"9px", color:"#4ade80" }}/>
            <span style={{ fontSize:"9px", fontWeight:700, letterSpacing:"1.2px", color:"#4ade80", textTransform:"uppercase" }}>{badge.text}</span>
          </div>
        ))}
      </motion.div>

      {/* BOTTOM IMPACT FLOW BAR */}
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay: 1.20}}
        style={{ flexShrink:0, height:"34px", background:"#060d08", borderTop:"1px solid #1a2e1e", display:"flex", alignItems:"center", justifyContent:"center", gap:"0" }}>
        {IMPACT_FLOW.map((step, i) => (
          <div key={i} style={{ display:"flex", alignItems:"center" }}>
            <span style={{
              fontSize:"11px", fontWeight:800, letterSpacing:"2px", textTransform:"uppercase",
              color: step.green ? "#4ade80" : "rgba(255,255,255,0.7)",
              textShadow: step.green ? "0 0 12px rgba(74,222,128,0.5)" : "none",
              padding:"0 10px"
            }}>{step.text}</span>
            {i < IMPACT_FLOW.length - 1 && (
              <ArrowRight style={{ width:"12px", height:"12px", color:"rgba(74,222,128,0.6)", flexShrink:0 }}/>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
