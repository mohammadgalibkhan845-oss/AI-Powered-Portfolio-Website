"use client";

import { useEffect, useState } from "react";
import { Terminal, Shield, Cpu } from "lucide-react";

export default function Navbar() {
  const [sysTime, setSysTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");
      setSysTime(`${hours}:${minutes}:${seconds}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="sticky top-0 z-40 w-full hud-glass border-b border-cyan-500/10 backdrop-blur-md px-6 py-4 flex items-center justify-between transition-all duration-300">
      {/* Brand Logo */}
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="w-3 h-3 bg-neon-cyan animate-pulse group-hover:bg-neon-purple transition-all duration-300" />
        <span className="font-orbitron font-black text-sm tracking-[4px] uppercase text-cyan-400 group-hover:text-purple-400 transition-colors duration-300">
          Galib.dev
        </span>
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex items-center gap-8 font-share-tech text-xs tracking-[2px] uppercase">
        <li>
          <a
            href="#about"
            className="text-slate-400 hover:text-neon-cyan transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-neon-cyan after:transition-all after:duration-300 hover:after:w-full"
          >
            // 01. Profile
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="text-slate-400 hover:text-neon-cyan transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-neon-cyan after:transition-all after:duration-300 hover:after:w-full"
          >
            // 02. Arsenal
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="text-slate-400 hover:text-neon-cyan transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-neon-cyan after:transition-all after:duration-300 hover:after:w-full"
          >
            // 03. Missions
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-slate-400 hover:text-neon-cyan transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-neon-cyan after:transition-all after:duration-300 hover:after:w-full"
          >
            // 04. Channel
          </a>
        </li>
      </ul>

      {/* Status Bar */}
      <div className="flex items-center gap-6 font-share-tech text-[10px] text-slate-500 tracking-[2px]">
        {/* Local Clock */}
        <div className="hidden sm:flex items-center gap-1.5 border-r border-slate-800 pr-4">
          <Cpu className="w-3 h-3 text-cyan-500/60" />
          <span>SYS_TIME: <span className="text-neon-cyan tabular-nums">{sysTime}</span></span>
        </div>
        
        {/* Status indicator */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-emerald-500 uppercase tracking-widest">Online</span>
        </div>
      </div>
    </nav>
  );
}
