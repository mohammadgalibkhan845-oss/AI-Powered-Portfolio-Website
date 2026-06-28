import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import ThreeBg from "@/components/ThreeBg";
import { ShieldAlert, Cpu } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col z-10 selection:bg-cyan-500/30 selection:text-white">
      {/* ── BACKGROUND LAYERS ── */}
      {/* ThreeJS Floating Particles */}
      <ThreeBg />
      
      {/* HUD overlays */}
      <div className="scan-line" />
      <div className="grid-overlay" />
      <div className="dot-overlay" />

      {/* VIEWPORT CORNER BRACKETS */}
      <div className="corner corner-tl" />
      <div className="corner corner-tr" />
      <div className="corner corner-bl" />
      <div className="corner corner-br" />

      {/* ── HEADER NAVIGATION ── */}
      <Navbar />

      {/* ── MAIN CONTENT ── */}
      <main className="flex-1 flex flex-col">
        {/* HERO SECTION */}
        <Hero />

        {/* PROFILE/ABOUT SECTION */}
        <About />

        {/* ARSENAL/SKILLS & MISSIONS/PROJECTS */}
        <Experience />

        {/* COMMS/CONTACT SECTION */}
        <Contact />
      </main>

      {/* ── FOOTER STATUS BAR ── */}
      <footer className="hud-glass border-t border-cyan-500/10 px-6 py-6 mt-16 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-share-tech text-[10px] text-slate-500 tracking-[2px] uppercase">
          {/* Status logs */}
          <div className="flex items-center gap-2 text-emerald-500/80">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            <span>ALL SYSTEMS OPERATIONAL // ONLINE</span>
          </div>

          <div>
            PORTFOLIO DIAGNOSTIC ENGINE v3.1.5
          </div>

          <div className="text-slate-400">
            © 2026 Mohammad Galib Khan // Bhopal, India
          </div>
        </div>
      </footer>
    </div>
  );
}
