"use client";

import { useState } from "react";
import { submitContactForm } from "@/app/actions/contact";
import { Mail, MapPin, Send, Terminal, Loader2 } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consoleLogs, setConsoleLogs] = useState<string[]>([
    "SYS // COMMS READY FOR TRANSMISSION",
    "SYS // STANDBY..."
  ]);

  const addLog = (log: string) => {
    setConsoleLogs((prev) => [...prev, `SYS // ${log}`]);
  };

  const handleTransmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setConsoleLogs([]);
    addLog("INITIATING COMMS PROTOCOL...");
    addLog(`PACKING DATA STREAM FOR ${name.toUpperCase()}...`);

    // Add validation log
    setTimeout(() => {
      addLog("VALIDATING TRANSMISSION CHANNEL PATHWAYS...");
    }, 400);

    // Call server action
    try {
      const response = await submitContactForm(name, email, message);
      
      setTimeout(() => {
        if (response.success) {
          addLog("DB HANDSHAKE RESOLVED: SUCCESS");
          addLog("ENCRYPTING PAYLOAD WITH QUANTUM AES-256...");
          addLog(response.message.toUpperCase());
          addLog("TRANSMISSION COMPLETED SUCCESSFULLY.");
          
          // Clear inputs
          setName("");
          setEmail("");
          setMessage("");
        } else {
          addLog("HANDSHAKE TERMINATED: ERROR");
          addLog(response.message.toUpperCase());
        }
        setIsSubmitting(false);
      }, 1000);

    } catch (err: any) {
      setTimeout(() => {
        addLog("SYSTEM CRITICAL: SHIELD COLLAPSE OR DB TIMEOUT");
        addLog(`ERROR: ${err.message || "Unknown communication failure"}`);
        setIsSubmitting(false);
      }, 1000);
    }
  };

  return (
    <section id="contact" className="relative max-w-6xl mx-auto px-6 py-20 border-t border-cyan-500/5">
      {/* Section label */}
      <div className="flex items-center gap-4 mb-10">
        <span className="font-share-tech text-xs text-neon-cyan tracking-[4px] uppercase">// 04. Channel</span>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-neon-cyan/20 to-transparent" />
      </div>

      <h2 className="font-orbitron font-bold text-2xl tracking-[2px] text-slate-100 uppercase flex items-center justify-center md:justify-start gap-2 mb-12">
        <Terminal className="w-5 h-5 text-neon-cyan" />
        Open Comms Channel
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column: Info & Logs Console */}
        <div className="flex flex-col gap-6">
          <p className="font-share-tech text-xs text-slate-400 leading-relaxed uppercase tracking-wider text-center md:text-left">
            // Establish contact for project collaborations, entrepreneurial ventures, or technical consultations.
          </p>

          <div className="flex flex-col gap-4 font-share-tech text-xs">
            {/* Email */}
            <div className="hud-glass p-3 rounded flex items-center gap-4 hover:border-cyan-500/30 transition-colors">
              <div className="w-8 h-8 border border-neon-cyan/20 bg-neon-cyan/5 flex items-center justify-center rounded">
                <Mail className="w-4 h-4 text-neon-cyan" />
              </div>
              <div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest">Email Address</div>
                <div className="text-slate-300">mohammadgalibkhan845@gmail.com</div>
              </div>
            </div>

            {/* GitHub */}
            <a
              href="https://github.com/mohammadgalibkhan845"
              target="_blank"
              rel="noopener noreferrer"
              className="hud-glass p-3 rounded flex items-center gap-4 hover:border-cyan-500/30 transition-colors"
            >
              <div className="w-8 h-8 border border-neon-cyan/20 bg-neon-cyan/5 flex items-center justify-center rounded">
                <svg className="w-4 h-4 text-neon-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </div>
              <div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest">GitHub Repository</div>
                <div className="text-slate-300">github.com/mohammadgalibkhan845</div>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/mohammad-galib-khan-252693386"
              target="_blank"
              rel="noopener noreferrer"
              className="hud-glass p-3 rounded flex items-center gap-4 hover:border-cyan-500/30 transition-colors"
            >
              <div className="w-8 h-8 border border-neon-cyan/20 bg-neon-cyan/5 flex items-center justify-center rounded">
                <svg className="w-4 h-4 text-neon-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest">LinkedIn Network</div>
                <div className="text-slate-300">linkedin.com/in/mohammad-galib-khan-252693386</div>
              </div>
            </a>

            {/* Location */}
            <div className="hud-glass p-3 rounded flex items-center gap-4">
              <div className="w-8 h-8 border border-neon-cyan/20 bg-neon-cyan/5 flex items-center justify-center rounded">
                <MapPin className="w-4 h-4 text-neon-cyan" />
              </div>
              <div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest">Base Coordinates</div>
                <div className="text-slate-300">Bhopal, Madhya Pradesh, India</div>
              </div>
            </div>
          </div>

          {/* Holographic Console Logs */}
          <div className="hud-glass rounded p-4 border border-cyan-500/20 bg-black/60 flex flex-col gap-2 font-mono text-[9px] min-h-[120px] text-slate-300 relative overflow-hidden">
            <div className="flex items-center gap-1 border-b border-cyan-500/10 pb-2 mb-1 text-neon-cyan font-bold uppercase tracking-widest">
              <Terminal className="w-3.5 h-3.5" />
              <span>Diagnostic Console Logs</span>
            </div>
            <div className="flex flex-col gap-1.5 overflow-y-auto max-h-[140px] scrollbar-thin">
              {consoleLogs.map((log, idx) => (
                <div key={idx} className="flex gap-2">
                  <span className="text-cyan-500">&gt;</span>
                  <span>{log}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <form onSubmit={handleTransmit} className="flex flex-col gap-4 font-share-tech">
          <div>
            <label className="block text-[10px] text-slate-400 uppercase tracking-widest mb-1.5">// Sender Name</label>
            <input
              type="text"
              required
              disabled={isSubmitting}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. TONY STARK"
              className="w-full bg-cyber-dark/40 border border-slate-800 focus:border-neon-cyan rounded px-4 py-3 text-sm text-slate-200 outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-[10px] text-slate-400 uppercase tracking-widest mb-1.5">// Return Comms Channel (Email)</label>
            <input
              type="email"
              required
              disabled={isSubmitting}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. tony@starkindustries.com"
              className="w-full bg-cyber-dark/40 border border-slate-800 focus:border-neon-cyan rounded px-4 py-3 text-sm text-slate-200 outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-[10px] text-slate-400 uppercase tracking-widest mb-1.5">// Payload Description (Message)</label>
            <textarea
              required
              disabled={isSubmitting}
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Provide transmission details..."
              className="w-full bg-cyber-dark/40 border border-slate-800 focus:border-neon-cyan rounded px-4 py-3 text-sm text-slate-200 outline-none resize-none transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="relative w-full inline-flex items-center justify-center gap-2 px-6 py-3 font-share-tech text-xs uppercase tracking-widest text-slate-100 bg-neon-cyan/20 hover:bg-neon-cyan/35 border border-neon-cyan/50 rounded transition-all duration-300 disabled:opacity-40 disabled:pointer-events-none cursor-pointer overflow-hidden mt-2"
            style={{ clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)" }}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin text-neon-cyan" />
                <span>Transmitting Stream...</span>
              </>
            ) : (
              <>
                <Send className="w-3.5 h-3.5 text-neon-cyan" />
                <span>Transmit Packet</span>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
