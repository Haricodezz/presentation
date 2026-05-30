"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Slide01Opening({ isActive }: { isActive: boolean }) {
  const [bpmceErr, setBpmceErr] = useState(false);
  const [beuErr, setBeuErr] = useState(false);
  if (!isActive) return null;

  return (
    <div
      className="w-full h-full bg-white text-slate-900 relative overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ── Background grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 1,
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_#F8FAFC_90%)] pointer-events-none" />

      {/* ── Subtle rotating rings (right edge) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 0.60, delay: 0.40 }}
        className="absolute top-[-10%] right-[-20%] w-[90vh] h-[90vh] pointer-events-none"
      >
        <div className="absolute inset-0 rounded-full border border-dashed border-green-400 animate-[spin_120s_linear_infinite]" />
        <div className="absolute inset-[15%] rounded-full border-2 border-green-500 animate-[spin_60s_linear_infinite_reverse]" />
        <div className="absolute inset-[30%] rounded-full border border-slate-300" />
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
                  className="w-full h-full object-contain drop-shadow-sm"
                  onError={() => setBpmceErr(true)}
                />
              ) : (
                <div className="w-full h-full border border-slate-200 rounded flex items-center justify-center bg-slate-50">
                  <span className="text-[9px] text-slate-400 text-center uppercase leading-tight">BPMCE<br />Logo</span>
                </div>
              )}
            </div>

            {/* College text (between logos) */}
            <div className="flex flex-col items-center text-center">
              <p className="font-bold tracking-widest uppercase text-slate-800" style={{ fontSize: "clamp(13px, 1.6vw, 18px)" }}>
                B.P. Mandal College of Engineering, Madhepura
              </p>
              <p className="text-slate-500 font-light mt-1" style={{ fontSize: "clamp(11px, 1.1vw, 13px)" }}>
                Affiliated to Bihar Engineering University, Patna
              </p>
            </div>

            {/* BEU */}
            <div className="w-20 h-20 flex items-center justify-center">
              {!beuErr ? (
                <img
                  src="/beu-logo.jpg"
                  alt="BEU"
                  className="w-full h-full object-contain drop-shadow-sm rounded-full"
                  onError={() => setBeuErr(true)}
                />
              ) : (
                <div className="w-full h-full border border-slate-200 rounded flex items-center justify-center bg-slate-50">
                  <span className="text-[9px] text-slate-400 text-center uppercase leading-tight">BEU<br />Logo</span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Thin separator */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.32, delay: 0.56 }}
            className="w-1/2 h-px bg-slate-200 origin-center"
          />
        </div>

        {/* ── CENTRE: title + tagline + description ── */}
        <div className="flex flex-col items-center text-center gap-5">
          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.40, delay: 0.72, ease: "easeOut" }}
            className="font-black leading-tight text-slate-900"
            style={{ fontSize: "clamp(40px, 6vw, 76px)", letterSpacing: "0.06em" }}
          >
            CARBON{" "}
            <span className="text-green-600">
              MRV
            </span>{" "}
            PLATFORM
          </motion.h1>

          {/* Tech label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.32, delay: 1.04 }}
            className="border border-slate-200 bg-slate-50 rounded-full px-6 py-1.5"
          >
            <span className="text-[11px] font-mono tracking-widest uppercase text-slate-400">
              Blockchain · GIS · Satellite Monitoring · Carbon Credits
            </span>
          </motion.div>

          {/* Mission statement */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.36, delay: 1.24 }}
            className="font-bold uppercase text-green-600 tracking-wide"
            style={{ fontSize: "clamp(16px, 2.2vw, 26px)" }}
          >
            Turning Environmental Impact Into Verified Value
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.32, delay: 1.48 }}
            className="text-slate-500 font-light leading-relaxed max-w-3xl"
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
            className="w-1/2 h-px bg-slate-200 origin-center"
          />

          {/* Team + Guide side-by-side */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32, delay: 1.80 }}
            className="flex items-start justify-center gap-20 w-full"
          >
            {/* Presented By */}
            <div className="flex flex-col items-center text-center gap-2">
              <p className="text-[11px] font-mono tracking-[0.25em] uppercase text-green-600 mb-1">
                Presented By
              </p>
              <p className="text-slate-900 font-medium" style={{ fontSize: "clamp(14px, 1.5vw, 20px)" }}>
                Aryan
              </p>
              <p className="text-slate-400 font-mono" style={{ fontSize: "clamp(10px, 1vw, 13px)" }}>
                Reg. 22105128036
              </p>
              <p className="text-slate-900 font-medium mt-2" style={{ fontSize: "clamp(14px, 1.5vw, 20px)" }}>
                Hari Prakash Yadav
              </p>
              <p className="text-slate-400 font-mono" style={{ fontSize: "clamp(10px, 1vw, 13px)" }}>
                Reg. 22105128039
              </p>
            </div>

            {/* Vertical divider */}
            <div className="w-px h-24 bg-slate-200 self-center" />

            {/* Under Guidance */}
            <div className="flex flex-col items-center text-center gap-2">
              <p className="text-[11px] font-mono tracking-[0.25em] uppercase text-green-600 mb-1">
                Under the Guidance of
              </p>
              <p className="text-slate-900 font-medium" style={{ fontSize: "clamp(14px, 1.5vw, 20px)" }}>
                Md Ehtashamoul Haque
              </p>
              <p className="text-slate-500 font-light" style={{ fontSize: "clamp(12px, 1.2vw, 16px)" }}>
                Assistant Professor
              </p>
              <p className="text-slate-400 font-light" style={{ fontSize: "clamp(10px, 1vw, 14px)" }}>
                Dept. of Computer Science &amp; Engineering
              </p>
            </div>
          </motion.div>

          {/* Thin separator */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.32, delay: 2.00 }}
            className="w-1/2 h-px bg-slate-200 origin-center"
          />

          {/* College + footer */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32, delay: 2.12 }}
            className="flex flex-col items-center text-center gap-1"
          >
            <p className="text-[15px] font-bold tracking-[0.18em] uppercase text-slate-800" style={{ fontSize: "clamp(13px, 1.6vw, 22px)" }}>
              Department of Computer Science &amp; Engineering
            </p>
            <p className="text-[12px] font-mono tracking-[0.3em] uppercase text-green-600/80 mt-1">
              Major Project 2026
            </p>
            <div className="flex items-center justify-center gap-6 mt-2 font-mono" style={{ fontSize: "clamp(9px, 0.9vw, 13px)" }}>
              <span className="text-green-600 uppercase tracking-widest">May 2026</span>
              <span className="text-slate-300">|</span>
              <a href="https://cmrv.vercel.app" className="text-slate-400 hover:text-slate-700 transition-colors">cmrv.vercel.app</a>
              <span className="text-slate-300">|</span>
              <a href="https://github.com/Haricodezz/carbon-mrv-platform" className="text-slate-400 hover:text-slate-700 transition-colors">github.com/Haricodezz/carbon-mrv-platform</a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
