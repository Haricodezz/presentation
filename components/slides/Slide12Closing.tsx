"use client";

import { motion } from "framer-motion";
import { Users, Building2, ShieldCheck, HeartHandshake, Settings, Activity, ArrowRight, Zap, Combine } from "lucide-react";

export default function Slide12Closing({ isActive }: { isActive: boolean }) {
  if (!isActive) return null;

  const stakeholders = [
    {
      id: "farmer",
      name: "FARMER",
      icon: Users,
      color: "#22c55e",
      cx: "50%", cy: "15%",
      tasks: ["Registers land", "Earns carbon credits", "Receives incentives"]
    },
    {
      id: "company",
      name: "COMPANY",
      icon: Building2,
      color: "#60a5fa",
      cx: "88%", cy: "38%",
      tasks: ["Purchases credits", "Offsets emissions", "Meets ESG goals"]
    },
    {
      id: "auditor",
      name: "AUDITOR",
      icon: ShieldCheck,
      color: "#f59e0b",
      cx: "75%", cy: "85%",
      tasks: ["Reviews flagged projects", "Approves verification", "Maintains trust"]
    },
    {
      id: "ngo",
      name: "NGO",
      icon: HeartHandshake,
      color: "#ec4899",
      cx: "25%", cy: "85%",
      tasks: ["Tracks impact", "Supports projects", "Monitors sustainability"]
    },
    {
      id: "admin",
      name: "ADMIN",
      icon: Settings,
      color: "#8b5cf6",
      cx: "12%", cy: "38%",
      tasks: ["Governs system", "Manages minting", "Maintains marketplace"]
    },
  ];

  const interactions = [
    { from: "Farmer", to: "Credits" },
    { from: "Auditor", to: "Verification" },
    { from: "Admin", to: "Governance" },
    { from: "Company", to: "Retirement" },
    { from: "NGO", to: "Monitoring" },
  ];

  const stats = [
    "5 STAKEHOLDER ROLES",
    "1 UNIFIED PLATFORM",
    "100% TRANSPARENT WORKFLOW",
    "END-TO-END TRACEABILITY"
  ];

  return (
    <div
      className="w-full bg-white text-slate-900 relative flex flex-col justify-between items-center overflow-hidden"
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
          backgroundImage: "linear-gradient(rgba(0,0,0,1) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,1) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_10%,_#FFFFFF_90%)] pointer-events-none" />

      {/* ── HEADING BLOCK ── */}
      <div className="relative z-10 flex flex-col items-center text-center shrink-0">
        <motion.p
          initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.24, delay: 0.12 }}
          style={{ fontSize: "11px", letterSpacing: "4px", color: "#0D9488", fontWeight: 500, marginBottom: "12px" }}
          className="uppercase"
        >
          PLATFORM ECOSYSTEM
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.32, delay: 0.24 }}
          className="uppercase text-slate-900"
          style={{
            fontSize: "clamp(26px, 3.2vw, 44px)",
            fontWeight: 900,
            letterSpacing: "-1px",
            lineHeight: 1.08,
            maxWidth: "1000px",
            margin: "0 auto",
            textAlign: "center"
          }}
        >
          ONE PLATFORM. FIVE STAKEHOLDERS.<br/>ONE TRUSTED ECOSYSTEM.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.28, delay: 0.36 }}
          style={{
            fontSize: "15px",
            color: "#64748B",
            marginTop: "12px",
            letterSpacing: "0.3px",
            textAlign: "center"
          }}
        >
          Every participant contributes to a transparent carbon economy.
        </motion.p>
      </div>

      {/* ── MAIN CONTENT ROW ── */}
      <div
        className="relative z-10 shrink-0 w-full max-w-[1100px] self-center"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
          gap: "32px",
        }}
      >
        {/* LEFT/CENTER DIAGRAM (flex: 1) */}
        <div className="flex-1 relative flex items-center justify-center min-h-[440px]">
          
          {/* Base SVG for animated connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: "visible" }}>
            {stakeholders.map((s, i) => (
              <g key={`line-${i}`}>
                {/* Static dashed line */}
                <line x1="50%" y1="50%" x2={s.cx} y2={s.cy} stroke="rgba(0,0,0,0.06)" strokeWidth="1" strokeDasharray="4 4" />
                {/* Animated colored pulse line */}
                <motion.line x1="50%" y1="50%" x2={s.cx} y2={s.cy} stroke={s.color} strokeWidth="1" strokeDasharray="4 4"
                  initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ delay: 0.24 + i * 0.08 }} />
                
                {/* Flowing animated dot */}
                <motion.circle r="3" fill={s.color} className="blur-[1px]"
                  initial={{ cx: "50%", cy: "50%", opacity: 0 }}
                  animate={{
                    cx: ["50%", s.cx],
                    cy: ["50%", s.cy],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 0.60,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 0.32 + i * 0.16
                  }}
                />
              </g>
            ))}
          </svg>

          {/* Center Platform Node */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, opacity: 1, x: "-50%", y: "-50%" }}
            transition={{ duration: 0.32, delay: 0.40 }}
            className="absolute z-10 flex flex-col items-center justify-center rounded-full border border-primary/30 bg-[#F8FAFC] shadow-sm"
            style={{ width: "130px", height: "130px", top: "50%", left: "50%" }}
          >
            <div className="absolute inset-0 rounded-full border border-primary/50 animate-[spin_4s_linear_infinite] border-t-transparent pointer-events-none" />
            <Combine className="w-8 h-8 text-primary mb-1" />
            <span className="font-bold text-center text-slate-900" style={{ fontSize: "11px", letterSpacing: "1px", lineHeight: 1.2 }}>CARBON MRV<br/><span className="font-normal text-slate-400 text-[9px] uppercase">Platform</span></span>
          </motion.div>

          {/* Stakeholder Nodes */}
          {stakeholders.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
              animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
              transition={{ duration: 0.20, delay: 0.19 + i * 0.06 }}
              className="absolute z-10 flex flex-col bg-[#F8FAFC] border border-slate-200 rounded-xl"
              style={{
                width: "170px",
                padding: "12px 14px",
                top: s.cy,
                left: s.cx,
                boxShadow: `0 0 20px ${s.color}10`,
                backgroundImage: "linear-gradient(rgba(255,255,255,0.02), rgba(255,255,255,0.02))"
              }}
            >
              <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-100">
                <s.icon className="w-4 h-4" style={{ color: s.color }} />
                <span className="font-bold tracking-widest uppercase" style={{ fontSize: "10px", color: s.color }}>{s.name}</span>
              </div>
              <div className="flex flex-col gap-1.5">
                {s.tasks.map((task, ti) => (
                  <div key={ti} className="flex items-start gap-1.5">
                    <ArrowRight className="w-2.5 h-2.5 mt-0.5 shrink-0 opacity-50" style={{ color: s.color }} />
                    <span className="text-[10px] leading-snug text-slate-600">{task}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* RIGHT SIDE PANEL: PLATFORM INTERACTIONS */}
        <motion.div
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.24, delay: 0.88 }}
          className="shrink-0 flex flex-col justify-between overflow-hidden"
          style={{
            width: "300px", minHeight: "380px",
            backgroundColor: "#F8FAFC",
            backgroundImage: "linear-gradient(rgba(255,255,255,0.02), rgba(255,255,255,0.02))",
            border: "1px solid rgba(0,0,0,0.07)", borderRadius: "12px", padding: "24px",
          }}
        >
          <div>
            <div className="flex items-center gap-2 mb-6 justify-center">
              <Activity className="w-4 h-4 text-teal-600" />
              <span className="uppercase" style={{ fontSize: "10px", letterSpacing: "3px", color: "#0D9488", fontWeight: 600 }}>PLATFORM INTERACTIONS</span>
            </div>
            
            <div className="flex flex-col gap-4 relative">
              <div className="absolute left-[7px] top-[14px] bottom-[14px] w-[1px] bg-slate-100" />
              {interactions.map((interaction, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.40 + i * 0.04 }}
                  className="flex items-center gap-4 relative z-10"
                >
                  <div className="w-[15px] h-[15px] rounded-full border border-teal-300 bg-teal-50 flex items-center justify-center shrink-0">
                    <div className="w-[5px] h-[5px] rounded-full bg-teal-500" />
                  </div>
                  <div className="flex-1 flex justify-between items-center pb-3 border-b border-slate-100">
                    <span className="text-[12px] text-slate-400">{interaction.from}</span>
                    <ArrowRight className="w-3 h-3 text-green-600/50" />
                    <span className="text-[12px] font-bold text-slate-900 text-right">{interaction.to}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-slate-100 text-center">
             <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-slate-400">End-to-End Governance</span>
          </div>
        </motion.div>
      </div>

      {/* ── BOTTOM SECTION STATS ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.24, delay: 1.28 }}
        className="relative z-10 shrink-0"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
          flexWrap: "nowrap",
        }}
      >
        {stats.map((stat, i) => (
          <div key={i} style={{
            border: "1px solid #BBF7D0",
            background: "#F0FDF4",
            padding: "8px 20px",
            borderRadius: "20px",
            fontSize: "10px",
            letterSpacing: "2px",
            color: "#16A34A",
            fontWeight: 600,
            whiteSpace: "nowrap",
          }}>
             <Zap style={{ display: "inline-block", fontSize: "12px", width: "12px", height: "12px", marginRight: "8px", opacity: 0.8, verticalAlign: "text-top", color: "#16A34A" }} />
             {stat}
          </div>
        ))}
      </motion.div>

      {/* ── IMPACT STATEMENT ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.28, delay: 1.60 }}
        className="relative z-10 shrink-0 flex items-center justify-center whitespace-nowrap"
        style={{ textAlign: "center", whiteSpace: "nowrap" }}
      >
        <span className="font-black uppercase" style={{ fontSize: "clamp(18px, 2.5vw, 28px)", fontWeight: 900, letterSpacing: "2px", color: "#0F172A" }}>
          CONNECTING CLIMATE ACTION, COMPLIANCE
        </span>
        <span className="font-black uppercase" style={{ fontSize: "clamp(18px, 2.5vw, 28px)", fontWeight: 900, letterSpacing: "2px", color: "#0D9488", marginLeft: "12px" }}>
          AND ECONOMIC VALUE.
        </span>
      </motion.div>
    </div>
  );
}
