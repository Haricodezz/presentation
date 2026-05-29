"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Slide01Opening({ isActive }: { isActive: boolean }) {
  const [bpmceErr, setBpmceErr] = useState(false);
  const [beuErr, setBeuErr] = useState(false);
  if (!isActive) return null;

  return (
    <div
      className="w-full h-full bg-[#020503] text-white relative overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ── Background grid ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.04 }}
        transition={{ duration: 0.60 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_#020503_85%)] pointer-events-none" />

      {/* ── Subtle rotating rings (right edge) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.06 }}
        transition={{ duration: 0.60, delay: 0.40 }}
        className="absolute top-[-10%] right-[-20%] w-[90vh] h-[90vh] pointer-events-none"
      >
        <div className="absolute inset-0 rounded-full border border-dashed border-primary animate-[spin_120s_linear_infinite]" />
        <div className="absolute inset-[15%] rounded-full border-2 border-primary animate-[spin_60s_linear_infinite_reverse]" />
        <div className="absolute inset-[30%] rounded-full border border-white/40" />
      </motion.div>

      {/* ════════════════════════════════════
          FULL-HEIGHT CENTRED COLUMN
      ════════════════════════════════════ */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-6 py-12 px-8">

        {/* ── TOP: logos + dept ── */}
        <div className="flex flex-col items-center w-full gap-4">
          {/* Logos row */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32, delay: 0.32 }}
            className="flex items-center justify-center gap-16"
          >
            {/* BPMCE */}
            <div className="w-20 h-20 flex items-center justify-center">
              {!bpmceErr ? (
                <img
                  src="/bpmce-logo.png"
                  alt="BPMCE"
                  className="w-full h-full object-contain drop-shadow-lg"
                  onError={() => setBpmceErr(true)}
                />
              ) : (
                <div className="w-full h-full border border-white/10 rounded flex items-center justify-center">
                  <span className="text-[9px] text-white/30 text-center uppercase leading-tight">BPMCE<br />Logo</span>
                </div>
              )}
            </div>

            {/* College text (between logos) */}
            <div className="flex flex-col items-center text-center">
              <p className="font-bold tracking-widest uppercase text-white/90" style={{ fontSize: "clamp(13px, 1.6vw, 18px)" }}>
                B.P. Mandal College of Engineering, Madhepura
              </p>
              <p className="text-white/55 font-light mt-1" style={{ fontSize: "clamp(11px, 1.1vw, 13px)" }}>
                Affiliated to Bihar Engineering University, Patna
              </p>
            </div>

            {/* BEU */}
            <div className="w-20 h-20 flex items-center justify-center">
              {!beuErr ? (
                <img
                  src="/beu-logo.jpg"
                  alt="BEU"
                  className="w-full h-full object-contain drop-shadow-lg rounded-full"
                  onError={() => setBeuErr(true)}
                />
              ) : (
                <div className="w-full h-full border border-white/10 rounded flex items-center justify-center">
                  <span className="text-[9px] text-white/30 text-center uppercase leading-tight">BEU<br />Logo</span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Thin separator */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.32, delay: 0.56 }}
            className="w-1/2 h-px bg-white/10 origin-center"
          />
        </div>

        {/* ── CENTRE: title + tagline + description ── */}
        <div className="flex flex-col items-center text-center gap-5">
          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.40, delay: 0.72, ease: "easeOut" }}
            className="font-black leading-tight text-white"
            style={{ fontSize: "clamp(40px, 6vw, 76px)", letterSpacing: "0.06em" }}
          >
            CARBON{" "}
            <span
              className="text-primary"
              style={{ textShadow: "0 0 24px rgba(34,197,94,0.35)" }}
            >
              MRV
            </span>{" "}
            PLATFORM
          </motion.h1>

          {/* Tech label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.32, delay: 1.04 }}
            className="border border-white/10 bg-white/5 rounded-full px-6 py-1.5"
          >
            <span className="text-[11px] font-mono tracking-widest uppercase text-white/50">
              Blockchain · GIS · Satellite Monitoring · Carbon Credits
            </span>
          </motion.div>

          {/* Mission statement */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.36, delay: 1.24 }}
            className="font-bold uppercase text-primary tracking-wide"
            style={{
              fontSize: "clamp(16px, 2.2vw, 26px)",
              textShadow: "0 2px 14px rgba(34,197,94,0.25)",
            }}
          >
            Turning Environmental Impact Into Verified Value
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.32, delay: 1.48 }}
            className="text-gray-300 font-light leading-relaxed max-w-3xl"
            style={{ fontSize: "clamp(13px, 1.4vw, 18px)" }}
          >
            Blockchain &amp; Satellite-Powered Carbon Monitoring,<br />
            Verification and Credit Management Platform
          </motion.p>
        </div>

        {/* ── BOTTOM BLOCK: team + guide + college ── */}
        <div className="flex flex-col items-center w-full gap-5">

          {/* Thin separator */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.32, delay: 1.68 }}
            className="w-1/2 h-px bg-white/10 origin-center"
          />

          {/* Team + Guide side-by-side, each perfectly centred */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32, delay: 1.80 }}
            className="flex items-start justify-center gap-20 w-full"
          >
            {/* Presented By */}
            <div className="flex flex-col items-center text-center gap-2">
              <p className="text-[11px] font-mono tracking-[0.25em] uppercase text-primary mb-1">
                Presented By
              </p>
              <p className="text-white font-medium" style={{ fontSize: "clamp(14px, 1.5vw, 20px)" }}>
                Aryan
              </p>
              <p className="text-white/30 font-mono" style={{ fontSize: "clamp(10px, 1vw, 13px)" }}>
                Reg. 22105128036
              </p>
              <p className="text-white font-medium mt-2" style={{ fontSize: "clamp(14px, 1.5vw, 20px)" }}>
                Hari Prakash
              </p>
              <p className="text-white/30 font-mono" style={{ fontSize: "clamp(10px, 1vw, 13px)" }}>
                Reg. 22105128039
              </p>
            </div>

            {/* Vertical divider */}
            <div className="w-px h-24 bg-white/10 self-center" />

            {/* Under Guidance */}
            <div className="flex flex-col items-center text-center gap-2">
              <p className="text-[11px] font-mono tracking-[0.25em] uppercase text-primary mb-1">
                Under the Guidance of
              </p>
              <p className="text-white font-medium" style={{ fontSize: "clamp(14px, 1.5vw, 20px)" }}>
                Md Ehtashamoul Haque
              </p>
              <p className="text-white/60 font-light" style={{ fontSize: "clamp(12px, 1.2vw, 16px)" }}>
                Assistant Professor
              </p>
              <p className="text-white/40 font-light" style={{ fontSize: "clamp(10px, 1vw, 14px)" }}>
                Dept. of Computer Science &amp; Engineering
              </p>
            </div>
          </motion.div>

          {/* Thin separator */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.32, delay: 2.00 }}
            className="w-1/2 h-px bg-white/10 origin-center"
          />

          {/* College + footer */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32, delay: 2.12 }}
            className="flex flex-col items-center text-center gap-1"
          >
            <p className="text-[15px] font-bold tracking-[0.18em] uppercase text-white" style={{ fontSize: "clamp(13px, 1.6vw, 22px)" }}>
              Department of Computer Science &amp; Engineering
            </p>
            <p className="text-[12px] font-mono tracking-[0.3em] uppercase text-primary/80 mt-1">
              Major Project 2026
            </p>
            <div className="flex items-center justify-center gap-6 mt-2 font-mono" style={{ fontSize: "clamp(9px, 0.9vw, 13px)" }}>
              <span className="text-primary uppercase tracking-widest">May 2026</span>
              <span className="text-white/20">|</span>
              <a href="https://cmrv.vercel.app" className="text-white/45 hover:text-white transition-colors">cmrv.vercel.app</a>
              <span className="text-white/20">|</span>
              <a href="https://github.com/Haricodezz/carbon-mrv-platform" className="text-white/45 hover:text-white transition-colors">github.com/Haricodezz/carbon-mrv-platform</a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
