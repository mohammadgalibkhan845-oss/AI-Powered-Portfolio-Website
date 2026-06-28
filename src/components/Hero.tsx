"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Shield, ArrowRight, Play, Cpu, AlertTriangle } from "lucide-react";

export default function Hero() {
  const [loading, setLoading] = useState(true);
  const [bootLog, setBootLog] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const nameRef = useRef<HTMLHeadingElement | null>(null);
  const leftColRef = useRef<HTMLDivElement | null>(null);
  const sparksRef = useRef<HTMLDivElement | null>(null);

  // Stark Loader Logs
  useEffect(() => {
    if (!loading) return;
    const logs = [
      "CRITICAL_SYS_BOOT: INITIALIZING...",
      "LOADING COGNITIVE INTERFACE MODULE...",
      "MAPPING PROFILE: MOHAMMAD GALIB KHAN",
      "STATUS: B.TECH CSE / UNDERGRADUATE",
      "ESTABLISHING SECURE PORTFOLIO CHANNEL...",
      "BIOMETRIC INTERFACE ONLINE.",
      "ALL SYSTEMS OPERATIONAL. WELCOME, GALIB."
    ];

    let currentLogIndex = 0;
    const interval = setInterval(() => {
      if (currentLogIndex < logs.length) {
        setBootLog(prev => [...prev, logs[currentLogIndex]]);
        currentLogIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
        }, 800);
      }
    }, 350);

    return () => clearInterval(interval);
  }, [loading]);

  // GSAP Cinematic Entrance after loading completes
  useEffect(() => {
    if (loading) return;

    // Fade in text blocks in the left column
    gsap.fromTo(
      leftColRef.current?.children || [],
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" }
    );

    // Dynamic sparks simulation around headshot
    if (sparksRef.current) {
      const container = sparksRef.current;
      container.innerHTML = ""; // Clear
      for (let i = 0; i < 20; i++) {
        const spark = document.createElement("div");
        spark.className = "spark";
        const angle = Math.random() * 360;
        const dist = 70 + Math.random() * 110;
        const tx = Math.cos(angle * Math.PI / 180) * dist + "px";
        const ty = Math.sin(angle * Math.PI / 180) * dist + "px";
        const cx = 150 + Math.cos(angle * Math.PI / 180) * 70;
        const cy = 180 + Math.sin(angle * Math.PI / 180) * 70;
        
        spark.style.cssText = `
          left: ${cx}px; 
          top: ${cy}px; 
          --tx: ${tx}; 
          --ty: ${ty}; 
          --dur: ${1.5 + Math.random() * 2}s; 
          --delay: ${Math.random() * 3}s;
          background: ${Math.random() > 0.4 ? "#00f2fe" : "#9d4edd"};
        `;
        container.appendChild(spark);
      }
    }

    // Name text holographic glitch effect
    const interval = setInterval(() => {
      if (Math.random() > 0.95 && nameRef.current) {
        gsap.to(nameRef.current, {
          skewX: -6,
          opacity: 0.5,
          duration: 0.05,
          yoyo: true,
          repeat: 1,
          onComplete: () => {
            gsap.set(nameRef.current, { skewX: 0, opacity: 1 });
          }
        });
      }
    }, 200);

    return () => clearInterval(interval);
  }, [loading]);

  return (
    <>
      {/* Cinematic HUD Boot Loader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cyber-obsidian text-neon-cyan font-mono p-4"
          >
            <div className="w-full max-w-lg border border-cyan-500/30 bg-black/60 backdrop-blur-md p-6 rounded relative overflow-hidden">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon-cyan" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neon-cyan" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neon-cyan" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-cyan" />

              <div className="flex items-center gap-2 border-b border-cyan-500/20 pb-4 mb-4">
                <Cpu className="w-5 h-5 text-neon-cyan animate-spin" />
                <span className="font-orbitron font-bold text-xs uppercase tracking-widest text-white">
                  Stark System Diagnoses
                </span>
                <span className="ml-auto text-[10px] text-neon-cyan opacity-80 animate-pulse">V4.9.2</span>
              </div>

              <div className="flex flex-col gap-2 min-h-[140px] text-xs text-slate-300">
                {bootLog.map((log, index) => (
                  <div key={index} className="flex gap-2">
                    <span className="text-neon-cyan font-bold">&gt;</span>
                    <span>{log}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-6 pt-4 border-t border-cyan-500/20 text-[10px] text-cyan-500/60 uppercase tracking-widest">
                <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> Security OK</span>
                <span className="ml-auto flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-ping" /> Connection Stable</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Hero Container */}
      {!loading && (
        <section
          ref={containerRef}
          className="relative min-h-[92vh] flex flex-col md:grid md:grid-cols-[1fr_420px] items-center gap-12 px-6 max-w-6xl mx-auto py-16"
        >
          {/* Left Description Column */}
          <div ref={leftColRef} className="flex flex-col items-center md:items-start text-center md:text-left gap-6 order-2 md:order-1">
            <div className="flex items-center justify-center md:justify-start gap-2 text-neon-cyan font-share-tech text-xs uppercase tracking-[4px]">
              <Terminal className="w-3.5 h-3.5" />
              <span>Initializing Profile // STARK_ID: 2026</span>
            </div>

            <h1
              ref={nameRef}
              className="font-orbitron font-black text-4xl sm:text-6xl tracking-wider text-slate-100 uppercase leading-[1.05] text-center md:text-left"
            >
              Mohammad Galib <span className="text-neon-cyan block drop-shadow-[0_0_10px_rgba(0,242,254,0.3)]">Khan</span>
            </h1>

            <p className="text-neon-purple font-share-tech text-sm uppercase tracking-[3px] font-bold text-center md:text-left">
              // Computer Science Undergraduate &amp; Full-Stack Builder
            </p>

            <p className="text-slate-400 font-share-tech text-sm leading-relaxed max-w-md text-center md:text-left">
              Building responsive, high-performance web applications using React, Node.js, and Java. 
              Always experimenting with IoT OCPP simulations, AI prompt engineering, and clean HUD aesthetics.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
              <a
                href="#projects"
                className="relative inline-flex items-center justify-center px-6 py-3 font-share-tech text-xs uppercase tracking-widest text-slate-100 bg-neon-cyan/15 hover:bg-neon-cyan/25 border border-neon-cyan/40 rounded transition-all duration-300 group overflow-hidden"
                style={{ clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)" }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Initiate Missions <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                </span>
              </a>
              <a
                href="#contact"
                className="relative inline-flex items-center justify-center px-6 py-3 font-share-tech text-xs uppercase tracking-widest text-slate-400 hover:text-slate-100 border border-slate-800 hover:border-cyan-500/40 rounded transition-all duration-300"
              >
                Open Comms Channel
              </a>
            </div>
          </div>

          {/* Right Holographic Face Panel Column */}
          <div className="flex justify-center items-center order-1 md:order-2">
            <div className="relative w-[340px] h-[440px] sm:w-[380px] sm:h-[480px] flex items-center justify-center">
              {/* Holographic Glowing Background */}
              <div className="absolute inset-0 bg-radial-[circle_at_center,rgba(0,242,254,0.12)_0%,rgba(157,78,221,0.04)_45%,transparent_75%] animate-pulse" />

              {/* Rotating Targeting Rings */}
              <div className="absolute w-[320px] h-[320px] border border-neon-cyan/10 rounded-full animate-[spin_24s_linear_infinite]" />
              <div className="absolute w-[290px] h-[290px] border border-dashed border-neon-purple/20 rounded-full animate-[spin_12s_linear_infinite_reverse]" />
              <div className="absolute w-[250px] h-[250px] border border-neon-cyan/15 rounded-full animate-[spin_8s_linear_infinite]" />

              {/* Image Container with scanner */}
              <div className="relative w-[230px] h-[310px] overflow-hidden border border-neon-cyan/30 rounded z-10 bg-cyber-dark/40 shadow-inner">
                {/* Horizontal scanline overlay */}
                <div className="face-scan-overlay" />
                {/* Vertical laser sweep */}
                <div className="biometric-scanner-line" />

                <img
                  src="/images/holographic_profile.png?v=3"
                  alt="Mohammad Galib Khan Holographic Headshot"
                  className="w-full h-full object-cover object-top filter contrast-[1.1] saturate-[0.8] hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Corners around profile image */}
              <div className="absolute w-[254px] h-[334px] border border-neon-cyan/10 pointer-events-none z-20 flex flex-col justify-between p-0.5">
                <div className="flex justify-between">
                  <div className="w-4 h-4 border-t border-l border-neon-cyan" />
                  <div className="w-4 h-4 border-t border-r border-neon-cyan" />
                </div>
                <div className="flex justify-between">
                  <div className="w-4 h-4 border-b border-l border-neon-cyan" />
                  <div className="w-4 h-4 border-b border-r border-neon-cyan" />
                </div>
              </div>

              {/* Sparks emitter layer */}
              <div ref={sparksRef} id="sparks" className="absolute inset-0 pointer-events-none z-15" />

              {/* Dynamic HUD labels floating next to face */}
              <div className="absolute text-[8px] tracking-[2px] uppercase font-share-tech z-25 text-neon-cyan pointer-events-none">
                <div className="absolute top-[80px] -left-[60px] whitespace-nowrap bg-black/60 border-l border-cyan-400/80 px-2 py-0.5 animate-pulse">
                  // IDENTITY: GALIB
                </div>
                <div className="absolute top-[140px] -left-[80px] whitespace-nowrap bg-black/60 border-l border-cyan-400/80 px-2 py-0.5">
                  // STATUS: ACTIVE
                </div>
                <div className="absolute top-[200px] -left-[60px] whitespace-nowrap bg-black/60 border-l border-cyan-400/80 px-2 py-0.5">
                  // LOC: BHOPAL_IN
                </div>
                <div className="absolute top-[80px] right-[40px] sm:right-[20px] whitespace-nowrap bg-black/60 border-r border-purple-400/80 px-2 py-0.5 text-right">
                  CORE: ONLINE //
                </div>
                <div className="absolute top-[140px] right-[60px] sm:right-[40px] whitespace-nowrap bg-black/60 border-r border-purple-400/80 px-2 py-0.5 text-right">
                  STACK: FULL-STACK //
                </div>
              </div>

              {/* Bottom bio info bar */}
              <div className="absolute bottom-[30px] z-25 text-center font-share-tech tracking-[2px] pointer-events-none">
                <p className="text-[9px] text-neon-cyan/80 font-orbitron font-bold">BIOMETRIC SCAN: OK</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
