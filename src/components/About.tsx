"use client";

import { motion } from "framer-motion";
import { User, Award, Shield, FileText } from "lucide-react";

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <section id="about" className="relative max-w-6xl mx-auto px-6 py-20 border-t border-cyan-500/5">
      {/* Decorative section label */}
      <div className="flex items-center gap-4 mb-6">
        <span className="font-share-tech text-xs text-neon-cyan tracking-[4px] uppercase">// 01. Profile</span>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-neon-cyan/20 to-transparent" />
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column: Profile Text */}
        <div className="flex flex-col gap-6">
          <h2 className="font-orbitron font-bold text-2xl tracking-[2px] text-slate-100 uppercase flex items-center justify-center md:justify-start gap-2">
            <User className="w-5 h-5 text-neon-cyan" />
            System Profile
          </h2>

          <div className="font-share-tech text-sm text-slate-400 leading-relaxed flex flex-col gap-4 text-center md:text-left">
            <p>
              I am a motivated Computer Science undergraduate student at the <strong className="text-slate-200">LNCT Group of Colleges (Jai Narain College of Technology), Bhopal</strong>, affiliated with RGPV. Currently pursuing my B.Tech degree (September 2024 – May 2028).
            </p>
            <p>
              My passion lies in full-stack web development and hands-on problem solving. I specialize in bridging the gap between design and functionality, coding highly interactive interfaces, and exploring backend engineering.
            </p>
            <p>
              With a strong interest in technology and entrepreneurship, I seek challenging opportunities to contribute to real-world solutions, build scale, and write robust architecture.
            </p>
          </div>

          {/* Action to download resume or view */}
          <div className="mt-4 flex justify-center md:justify-start">
            <a
              href="/RESUME.PDF"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-neon-purple/30 bg-neon-purple/5 hover:bg-neon-purple/15 text-purple-400 hover:text-purple-300 font-share-tech text-xs tracking-wider uppercase rounded transition-all duration-300"
            >
              <FileText className="w-4 h-4" /> Download System Resume
            </a>
          </div>
        </div>

        {/* Right Column: Statistics Grid */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { num: "1.8+", label: "Years Undergrad", desc: "CS & Engineering study" },
            { num: "4+", label: "Missions Completed", desc: "Interactive web projects" },
            { num: "5+", label: "Tech Stacks Used", desc: "Java, Node, React, IoT" },
            { num: "100%", label: "Commitment", desc: "Continuous code optimization" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
              className="hud-glass p-5 rounded relative flex flex-col gap-2 overflow-hidden group"
            >
              {/* Highlight bar on the left */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-neon-cyan group-hover:bg-neon-purple transition-colors duration-300" />
              
              <span className="font-orbitron font-black text-3xl text-neon-cyan group-hover:text-neon-purple transition-colors duration-300 tracking-wider">
                {stat.num}
              </span>
              <span className="font-share-tech text-xs text-slate-300 uppercase tracking-widest font-bold">
                {stat.label}
              </span>
              <span className="font-share-tech text-[10px] text-slate-500">
                {stat.desc}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
