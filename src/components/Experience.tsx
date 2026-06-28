"use client";

import { motion } from "framer-motion";
import { Cpu, Rocket, Award, ExternalLink, ShieldCheck } from "lucide-react";

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const skills = [
    { name: "HTML5 / CSS3", level: 90, cat: "Frontend" },
    { name: "JavaScript", level: 75, cat: "Frontend" },
    { name: "React (Basics)", level: 65, cat: "Frontend" },
    { name: "Core Java", level: 75, cat: "Backend" },
    { name: "Node.js (Basics)", level: 60, cat: "Backend" },
    { name: "Git / GitHub", level: 80, cat: "Tools" },
    { name: "Android Studio", level: 65, cat: "Tools" },
    { name: "AI Prompt Engineering", level: 85, cat: "Other" },
    { name: "IoT OCPP Simulation", level: 70, cat: "Other" },
  ];

  const projects = [
    {
      num: "MISSION // 001",
      title: "EV Charging Locator & Booking",
      desc: "Full-stack intelligent EV charging locator featuring real-time slot tracking. Simulated live IoT sensor data flows using OCPP protocols for a live hackathon showcase.",
      tags: ["React", "Node.js", "IoT OCPP", "Web Sockets"],
    },
    {
      num: "MISSION // 002",
      title: "Civic Issue Reporting Platform",
      desc: "Developed a civic tech portal for citizens to report and track local utility & infrastructural issues. Built for the Smart India Hackathon (SIH) with a community-driven focus.",
      tags: ["Responsive Design", "JavaScript", "SIH", "Map APIs"],
    },
    {
      num: "MISSION // 003",
      title: "Personal Portfolio Website",
      desc: "Designed and developed a fully responsive personal portfolio from scratch. Showcases CSS animations, custom layouts, and clean responsive layouts.",
      tags: ["HTML5", "CSS3", "JavaScript", "DOM"],
    },
    {
      num: "MISSION // 004",
      title: "WordCamp Bhopal 2025 Assets",
      desc: "Contributed custom UI/UX design assets and creative graphics for WordCamp Bhopal 2025, a premier WordPress community event.",
      tags: ["UI/UX Design", "Figma", "Community Assets"],
    },
  ];

  const certifications = [
    { title: "Deloitte Australia — Cyber Job Simulation", issuer: "Deloitte / Forage" },
    { title: "Google Android Developer Course — EduSkill", issuer: "Google Developer Student Clubs / EduSkill" },
  ];

  return (
    <div className="relative max-w-6xl mx-auto px-6 py-20 flex flex-col gap-24">
      {/* ── SKILLS SECTIONS ── */}
      <section id="skills" className="relative">
        <div className="flex items-center gap-4 mb-10">
          <span className="font-share-tech text-xs text-neon-cyan tracking-[4px] uppercase">// 02. Arsenal</span>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-neon-cyan/20 to-transparent" />
        </div>

        <h2 className="font-orbitron font-bold text-2xl tracking-[2px] text-slate-100 uppercase flex items-center justify-center md:justify-start gap-2 mb-12">
          <Cpu className="w-5 h-5 text-neon-cyan" />
          Tech Arsenal
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Frontend Category */}
          <div className="hud-glass p-6 rounded relative flex flex-col gap-6">
            <div className="absolute top-0 right-0 w-3 h-3 bg-neon-cyan/20 border-r border-t border-neon-cyan" />
            <h3 className="font-orbitron text-xs font-bold text-neon-cyan tracking-widest uppercase border-b border-cyan-500/10 pb-3">
              [I] Frontend Systems
            </h3>
            <div className="flex flex-col gap-5">
              {skills
                .filter((s) => s.cat === "Frontend")
                .map((s, idx) => (
                  <div key={idx} className="flex flex-col gap-2">
                    <div className="flex justify-between font-share-tech text-xs text-slate-300">
                      <span>{s.name}</span>
                      <span className="text-neon-cyan">{s.level}%</span>
                    </div>
                    <div className="h-1 bg-slate-900 overflow-hidden relative rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full"
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Backend & Logic Category */}
          <div className="hud-glass p-6 rounded relative flex flex-col gap-6">
            <div className="absolute top-0 right-0 w-3 h-3 bg-neon-purple/20 border-r border-t border-neon-purple" />
            <h3 className="font-orbitron text-xs font-bold text-neon-purple tracking-widest uppercase border-b border-purple-500/10 pb-3">
              [II] Backend &amp; Logic
            </h3>
            <div className="flex flex-col gap-5">
              {skills
                .filter((s) => s.cat === "Backend")
                .map((s, idx) => (
                  <div key={idx} className="flex flex-col gap-2">
                    <div className="flex justify-between font-share-tech text-xs text-slate-300">
                      <span>{s.name}</span>
                      <span className="text-neon-purple">{s.level}%</span>
                    </div>
                    <div className="h-1 bg-slate-900 overflow-hidden relative rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full"
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Tools & Specialties Category */}
          <div className="hud-glass p-6 rounded relative flex flex-col gap-6">
            <div className="absolute top-0 right-0 w-3 h-3 bg-neon-cyan/20 border-r border-t border-neon-cyan" />
            <h3 className="font-orbitron text-xs font-bold text-neon-cyan tracking-widest uppercase border-b border-cyan-500/10 pb-3">
              [III] Dev Tools &amp; Special
            </h3>
            <div className="flex flex-col gap-5">
              {skills
                .filter((s) => s.cat !== "Frontend" && s.cat !== "Backend")
                .map((s, idx) => (
                  <div key={idx} className="flex flex-col gap-2">
                    <div className="flex justify-between font-share-tech text-xs text-slate-300">
                      <span>{s.name}</span>
                      <span className="text-neon-cyan">{s.level}%</span>
                    </div>
                    <div className="h-1 bg-slate-900 overflow-hidden relative rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full"
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS SECTIONS ── */}
      <section id="projects" className="relative">
        <div className="flex items-center gap-4 mb-10">
          <span className="font-share-tech text-xs text-neon-cyan tracking-[4px] uppercase">// 03. Missions</span>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-neon-cyan/20 to-transparent" />
        </div>

        <h2 className="font-orbitron font-bold text-2xl tracking-[2px] text-slate-100 uppercase flex items-center justify-center md:justify-start gap-2 mb-12">
          <Rocket className="w-5 h-5 text-neon-cyan" />
          Deployed Missions
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((p, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="hud-glass p-6 rounded relative flex flex-col gap-4 overflow-hidden group cursor-pointer hover:-translate-y-1 transition-all duration-300"
            >
              {/* Top neon strip */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-neon-cyan via-neon-purple to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-style-solid border-t-0 border-r-[16px] border-b-[16px] border-l-0 border-t-transparent border-r-neon-cyan border-b-transparent border-l-transparent transition-colors duration-300 group-hover:border-r-neon-purple" />

              <div className="font-share-tech text-[10px] text-neon-cyan font-bold tracking-[2px] uppercase">
                {p.num}
              </div>

              <h3 className="font-orbitron text-sm font-bold text-slate-100 group-hover:text-neon-cyan transition-colors duration-300 uppercase tracking-wide">
                {p.title}
              </h3>

              <p className="font-share-tech text-xs text-slate-400 leading-relaxed min-h-[54px]">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                {p.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="border border-cyan-500/20 text-[9px] font-share-tech text-slate-400 px-2 py-0.5 rounded uppercase tracking-wider bg-cyan-950/5 group-hover:border-cyan-500/40 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="relative">
        <div className="flex items-center gap-4 mb-10">
          <span className="font-share-tech text-xs text-neon-cyan tracking-[4px] uppercase">// Credentials</span>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-neon-cyan/20 to-transparent" />
        </div>

        <h2 className="font-orbitron font-bold text-2xl tracking-[2px] text-slate-100 uppercase flex items-center justify-center md:justify-start gap-2 mb-12">
          <Award className="w-5 h-5 text-neon-cyan" />
          System Accreditations
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((c, idx) => (
            <div
              key={idx}
              className="hud-glass p-5 rounded relative flex items-center gap-4 overflow-hidden group hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="w-10 h-10 border border-neon-cyan/20 bg-neon-cyan/5 flex items-center justify-center rounded flex-shrink-0 group-hover:border-neon-cyan/40 transition-colors">
                <ShieldCheck className="w-5 h-5 text-neon-cyan" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-share-tech text-xs font-bold text-slate-200 group-hover:text-neon-cyan transition-colors">
                  {c.title}
                </h3>
                <span className="font-share-tech text-[10px] text-slate-500 uppercase tracking-widest">
                  // ISSUED BY: {c.issuer}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
