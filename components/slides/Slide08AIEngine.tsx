"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Satellite, Leaf, BarChart2, Activity, CloudRain, Database,
  Brain, TrendingUp, ShieldAlert, AlertOctagon, TreePine, Zap,
  CheckCircle2, Radio, Map, Wind
} from "lucide-react";

/* ── Count-up ── */
function CountUp({ target, delay = 0 }: { target: number; delay?: number }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => {
      const start = Date.now();
      const dur = 2000;
      const tick = () => {
        const p = Math.min((Date.now() - start) / dur, 1);
        setVal(parseFloat((target * (1 - Math.pow(1 - p, 3))).toFixed(1)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);
    return () => clearTimeout(t);
  }, [target, delay]);
  return <>{val.toFixed(1)}</>;
}

/* ── Config ── */
const CX = 220, CY = 220, R = 148;

const MODULES = [
  { label: "NDVI ANALYSIS",             desc: "Vegetation health from satellite imagery",       icon: Leaf,         color: "#22c55e", angle: -90  },
  { label: "CARBON STOCK PREDICTION",   desc: "Predicts stored carbon via env variables",       icon: TrendingUp,   color: "#06b6d4", angle: -30  },
  { label: "FRAUD DETECTION",           desc: "Identifies suspicious project anomalies",        icon: ShieldAlert,  color: "#f59e0b", angle:  30  },
  { label: "PROJECT RISK SCORING",      desc: "Calculates sustainability & future risk",        icon: AlertOctagon, color: "#f43f5e", angle:  90  },
  { label: "DEFORESTATION DETECTION",   desc: "Detects forest loss and land-use changes",       icon: TreePine,     color: "#10b981", angle: 150  },
  { label: "ENVIRONMENTAL FORECASTING", desc: "Predicts future ecosystem conditions",           icon: Activity,     color: "#a855f7", angle: 210  },
];

const INPUTS = [
  { label: "Sentinel-2 Imagery",      icon: Satellite  },
  { label: "Landsat Data",            icon: Radio      },
  { label: "NDVI Maps",               icon: Leaf       },
  { label: "GIS Boundaries",          icon: Map        },
  { label: "Weather Data",            icon: Wind       },
  { label: "Remote Sensing Records",  icon: Database   },
];

const OUTPUTS = [
  { label: "Carbon Credit Estimate",    color: "#22c55e" },
  { label: "Verification Confidence",   color: "#06b6d4" },
  { label: "Fraud Probability Score",   color: "#f59e0b" },
  { label: "Project Health Status",     color: "#22c55e" },
  { label: "Risk Classification",       color: "#f43f5e" },
  { label: "Deforestation Alerts",      color: "#10b981" },
];

const METRICS = [
  { value: 94.7, label: "VERIFICATION CONFIDENCE"   },
  { value: 98.2, label: "CARBON PREDICTION ACCURACY" },
  { value: 96.5, label: "FRAUD DETECTION ACCURACY"  },
  { value: 95.4, label: "DEFORESTATION DETECTION"   },
  { value: 97.1, label: "RISK ASSESSMENT PRECISION"  },
];

/* ── Animated particle on a spoke ── */
function SpokeParticle({ nx, ny, color, delay }: { nx: number; ny: number; color: string; delay: number }) {
  return (
    <motion.circle r="3" fill={color}
      style={{ filter: `drop-shadow(0 0 5px ${color})` }}
      initial={{ cx: nx, cy: ny, opacity: 0 }}
      animate={{ cx: [nx, CX + (nx - CX) * 0.4, CX], cy: [ny, CY + (ny - CY) * 0.4, CY], opacity: [0, 1, 0] }}
      transition={{ duration: 0.60, delay, repeat: Infinity, repeatDelay: 1.4, ease: "easeInOut" }}
    />
  );
}

export default function Slide08AIEngine({ isActive }: { isActive: boolean }) {
  if (!isActive) return null;

  return (
    <div style={{
      width: "100%", height: "100vh", overflow: "hidden",
      background: "#FFFFFF", color: "#0F172A",
      fontFamily: "'Inter', sans-serif",
      display: "flex", flexDirection: "column", position: "relative",
    }}>

      {/* ── GLOBAL KEYFRAMES ── */}
      <style>{`
        @keyframes breathe {
          0%,100%{ box-shadow:0 1px 3px rgba(0,0,0,0.08), 0 0 0 3px rgba(22,163,74,0.10);}
          50%    { box-shadow:0 2px 8px rgba(0,0,0,0.12), 0 0 0 6px rgba(22,163,74,0.18);}
        }
        @keyframes float{ 0%,100%{transform:translateY(0);} 50%{transform:translateY(-6px);} }
        @keyframes blink{ 0%,100%{opacity:.3;} 50%{opacity:1;} }
        @keyframes shimmer{ 0%{left:-70%;} 100%{left:160%;} }
        @keyframes linePulse{ 0%,100%{stroke-opacity:.18;} 50%{stroke-opacity:.7;} }
        @keyframes ringExpand{
          0%  { r:54px; opacity:.55; }
          100%{ r:148px; opacity:0; }
        }
      `}</style>

      {/* ── BACKGROUND GRID ── */}
      <div style={{
        position:"absolute", inset:0, pointerEvents:"none",
        backgroundImage:"linear-gradient(rgba(0,0,0,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.04) 1px,transparent 1px)",
        backgroundSize:"40px 40px"
      }}/>
      <div style={{
        position:"absolute", inset:0, background:"radial-gradient(ellipse at 50% 40%,rgba(34,197,94,.05) 0%,transparent 60%)",pointerEvents:"none"}}/>

      {/* ── HEADING ── */}
      <div style={{textAlign:"center",flexShrink:0,padding:"6px 44px 0",zIndex:10}}>
        <motion.p initial={{opacity:0,y:-6}} animate={{opacity:1,y:0}} transition={{delay: 0.12}}
          style={{fontSize:"10px",letterSpacing:"5px",color:"#16A34A",fontWeight:700,marginBottom:5,textTransform:"uppercase"}}>
          SYSTEM INTELLIGENCE
        </motion.p>
        <motion.h2 initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay: 0.22}}
          style={{fontSize:"clamp(22px,2.6vw,36px)",fontWeight:900,letterSpacing:"-1px",lineHeight:1.08,margin:0}}>
          AI CARBON INTELLIGENCE ENGINE
        </motion.h2>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay: 0.34}}
          style={{fontSize:"12px",color:"#64748B",marginTop:5}}>
          Transforming Satellite Data Into Verifiable Carbon Intelligence Through Machine Learning.
        </motion.p>
      </div>

      {/* ── THREE-COLUMN MAIN ── */}
      <div style={{flex:1,display:"flex",flexDirection:"row",gap:14,padding:"8px 44px",overflow:"hidden",position:"relative",zIndex:10}}>

        {/* ── LEFT PANEL ── */}
        <motion.div initial={{opacity:0,x:-28}} animate={{opacity:1,x:0}} transition={{delay: 0.36}}
          style={{flex:"0 0 21%",display:"flex",flexDirection:"column",justifyContent:"center",gap:6}}>

          <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:4}}>
            <Satellite style={{width:11,height:11,color:"#16A34A"}}/>
            <span style={{fontSize:"9px",letterSpacing:"2px",color:"rgba(22,163,74,.75)",fontWeight:700,textTransform:"uppercase"}}>
              SATELLITE INPUT STREAM
            </span>
          </div>

          {INPUTS.map((inp, i) => (
            <motion.div key={i} initial={{opacity:0,x:-18}} animate={{opacity:1,x:0}} transition={{delay: 0.18 + i * 0.04}}
              style={{
                height:42, background:"#F8FAFC",
                border:"1px solid #E2E8F0",
                borderRadius:8, display:"flex", alignItems:"center",
                gap:10, padding:"0 12px", position:"relative", overflow:"hidden",
              }}>
              {/* shimmer */}
              <div style={{position:"absolute",top:0,bottom:0,width:"55%",background:"linear-gradient(90deg,transparent,rgba(22,163,74,.04),transparent)",animation:`shimmer ${3.2+i*.35}s linear infinite`}}/>
              <div style={{
                width:22,height:22,borderRadius:i%2===0?"5px":"50%",
                background:"#F0FDF4",border:"1px solid #BBF7D0",
                display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0
              }}>
                <inp.icon style={{width:11,height:11,color:"#16A34A"}}/>
              </div>
              <span style={{fontSize:"11px",color:"#475569",fontWeight:500}}>{inp.label}</span>
              {/* live pulse dot */}
              <span style={{marginLeft:"auto",width:5,height:5,borderRadius:"50%",background:"#16A34A",flexShrink:0,animation:`blink ${1.8+i*.2}s ${i*.25}s infinite`}}/>
            </motion.div>
          ))}

          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay: 0.80}}
            style={{display:"flex",alignItems:"center",gap:6,marginTop:4}}>
            {[0,1,2].map(j=>(
              <span key={j} style={{width:6,height:6,borderRadius:"50%",background:"#16A34A",display:"inline-block",animation:`blink 1.4s ${j*.38}s infinite`}}/>
            ))}
            <span style={{fontSize:"10px",color:"#16A34A",opacity:.6}}>feeding AI core</span>
          </motion.div>
        </motion.div>

        {/* ── CENTER SVG ── */}
        <div style={{flex:"0 0 54%",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"}}>
          <svg viewBox="0 0 440 440" style={{width:"100%",maxHeight:"100%",overflow:"visible"}}>

            {/* Static spoke lines */}
            {MODULES.map((mod,i)=>{
              const rad=(mod.angle*Math.PI)/180;
              const nx=CX+R*Math.cos(rad), ny=CY+R*Math.sin(rad);
              return (
                <g key={`sp-${i}`}>
                  <line x1={CX} y1={CY} x2={nx} y2={ny}
                    stroke={mod.color} strokeOpacity=".14" strokeWidth="1" strokeDasharray="5 4"/>
                  {/* animated pulse overlay */}
                  <line x1={CX} y1={CY} x2={nx} y2={ny}
                    stroke={mod.color} strokeWidth="1.5" strokeDasharray="5 4"
                    style={{animation:`linePulse ${2+i*.3}s ${i*.4}s infinite`}}/>
                  {/* particles inbound */}
                  {[0,1].map(p=>(
                    <SpokeParticle key={p} nx={nx} ny={ny} color={mod.color} delay={i*.6+p*1.5}/>
                  ))}
                </g>
              );
            })}

            {/* Expanding pulse rings from core */}
            {[0,1,2].map(r=>(
              <motion.circle key={r} cx={CX} cy={CY} r={54}
                stroke="#16A34A" strokeWidth={r===0?1:.6} fill="none"
                initial={{r:54,opacity:.5}}
                animate={{r:[54,R+18],opacity:[.45,0]}}
                transition={{duration: 0.60,delay:r*1.15,repeat:Infinity,ease:"easeOut"}}
              />
            ))}

            {/* Outer orbit ring */}
            <motion.circle cx={CX} cy={CY} r={R+14}
              stroke="#16A34A" strokeWidth=".5" fill="none" strokeOpacity=".08" strokeDasharray="6 6"
              animate={{rotate:360}}
              style={{transformOrigin:`${CX}px ${CY}px`}}
              transition={{duration: 20.0,repeat:Infinity,ease:"linear"}}
            />

            {/* ── AI CORE ── */}
            <circle cx={CX} cy={CY} r={58} fill="#FFFFFF" stroke="#16A34A" strokeWidth="2"/>
            <circle cx={CX} cy={CY} r={52} fill="rgba(34,197,94,.04)" stroke="#16A34A" strokeWidth=".6" strokeOpacity=".35"/>
            <foreignObject x={CX-48} y={CY-38} width={96} height={76}>
              <div style={{
                display:"flex",flexDirection:"column",alignItems:"center",
                justifyContent:"center",height:"100%",textAlign:"center",
                animation:"breathe 3s infinite"
              }}>
                <Brain style={{width:22,height:22,color:"#16A34A",marginBottom:4}}/>
                <div style={{fontSize:"9px",fontWeight:800,color:"#0F172A",letterSpacing:"1px",lineHeight:1.35}}>
                  CARBON AI<br/>ENGINE
                </div>
                <div style={{fontSize:"7px",color:"rgba(22,163,74,.50)",letterSpacing:".5px",marginTop:3}}>
                  ML · PREDICT · VERIFY
                </div>
              </div>
            </foreignObject>

            {/* ── MODULE NODES ── */}
            {MODULES.map((mod,i)=>{
              const rad=(mod.angle*Math.PI)/180;
              const nx=CX+R*Math.cos(rad), ny=CY+R*Math.sin(rad);
              const Nr=38;
              return (
                <g key={`n-${i}`} style={{animation:`float ${2.4+i*.35}s ${i*.45}s ease-in-out infinite`}}>
                  {/* glow ring */}
                  <motion.circle cx={nx} cy={ny} r={Nr+5}
                    stroke={mod.color} strokeWidth=".7" fill="none"
                    initial={{opacity:.2}} animate={{opacity:[.15,.6,.15]}}
                    transition={{duration: 0.60,delay:i*.4,repeat:Infinity}}
                  />
                  <circle cx={nx} cy={ny} r={Nr} fill="#FFFFFF" stroke={mod.color} strokeWidth="1.4" strokeOpacity=".65"/>
                  <circle cx={nx} cy={ny} r={Nr-7} fill={`${mod.color}12`}/>
                  <foreignObject x={nx-Nr+4} y={ny-Nr+4} width={(Nr-4)*2} height={(Nr-4)*2}>
                    <div style={{
                      display:"flex",flexDirection:"column",alignItems:"center",
                      justifyContent:"center",height:"100%",textAlign:"center",gap:2
                    }}>
                      <mod.icon style={{width:13,height:13,color:mod.color}}/>
                      <span style={{fontSize:"6px",fontWeight:800,color:"#0F172A",lineHeight:1.25,opacity:.92}}>
                        {mod.label}
                      </span>
                    </div>
                  </foreignObject>
                </g>
              );
            })}
          </svg>
        </div>

        {/* ── RIGHT PANEL ── */}
        <motion.div initial={{opacity:0,x:28}} animate={{opacity:1,x:0}} transition={{delay: 0.40}}
          style={{flex:"0 0 21%",display:"flex",flexDirection:"column",justifyContent:"center",gap:6}}>

          <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:4}}>
            <Zap style={{width:11,height:11,color:"#06b6d4"}}/>
            <span style={{fontSize:"9px",letterSpacing:"2px",color:"rgba(6,182,212,.8)",fontWeight:700,textTransform:"uppercase"}}>
              AI OUTPUT ENGINE
            </span>
          </div>

          {OUTPUTS.map((out,i)=>(
            <motion.div key={i} initial={{opacity:0,x:18}} animate={{opacity:1,x:0}} transition={{delay: 0.21 + i * 0.04}}
              style={{
                background:"#F8FAFC",
                border:`1px solid #E2E8F0`,
                borderLeft:`3px solid ${out.color}`,
                borderRadius:8, display:"flex", alignItems:"center",
                gap:10, padding:"9px 13px", position:"relative", overflow:"hidden",
              }}>
              <motion.span
                style={{width:7,height:7,borderRadius:"50%",background:out.color,display:"inline-block",flexShrink:0}}
                animate={{opacity:[.5,1,.5],scale:[.9,1.25,.9]}}
                transition={{duration: 0.60,delay:i*.3,repeat:Infinity}}
              />
              <span style={{fontSize:"11px",color:"#334155",flex:1,fontWeight:500}}>{out.label}</span>
              <motion.div animate={{opacity:[.4,1,.4]}} transition={{duration: 0.60,delay:i*.25,repeat:Infinity}}>
                <CheckCircle2 style={{width:10,height:10,color:out.color}}/>
              </motion.div>
            </motion.div>
          ))}

          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay: 0.88}}
            style={{display:"flex",alignItems:"center",gap:6,marginTop:4,justifyContent:"flex-end"}}>
            <span style={{fontSize:"10px",color:"#06b6d4",opacity:.6}}>serving platform</span>
            {[0,1,2].map(j=>(
              <span key={j} style={{width:6,height:6,borderRadius:"50%",background:"#06b6d4",display:"inline-block",animation:`blink 1.4s ${j*.38}s infinite`}}/>
            ))}
          </motion.div>
        </motion.div>

      </div>

      {/* ── METRICS BAR ── */}
      <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay: 0.88}}
          style={{
          flexShrink:0, borderTop:"1px solid #E2E8F0", background:"#F8FAFC",
          padding:"8px 44px 5px", display:"flex", justifyContent:"space-between", zIndex:10
        }}>
        {METRICS.map((m,i)=>(
          <div key={i} style={{textAlign:"center",flex:1}}>
            <div style={{fontSize:"clamp(24px,2.8vw,36px)",fontWeight:800,color:"#16A34A",lineHeight:1,textShadow:"none"}}>
              <CountUp target={m.value} delay={(2.4+i*.18)*1000}/>%
            </div>
            <div style={{fontSize:"8px",letterSpacing:"1.5px",color:"#6b7280",textTransform:"uppercase",marginTop:3}}>{m.label}</div>
          </div>
        ))}
      </motion.div>

      {/* ── FOOTER TAGLINE ── */}
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay: 1.20}}
        style={{
          textAlign:"center",flexShrink:0,padding:"4px 44px 12px",
          fontSize:"clamp(10px,1.1vw,13px)",fontWeight:800,
          letterSpacing:"3px",textTransform:"uppercase",zIndex:10
        }}>
        <span style={{color:"#64748B"}}>FROM RAW SATELLITE DATA TO VERIFIED </span>
        <span style={{color:"#16A34A"}}>CARBON INTELLIGENCE</span>
      </motion.div>

    </div>
  );
}
