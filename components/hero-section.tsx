'use client';

import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, User, ExternalLink, Cpu, Layers, Server, Globe2, Activity } from 'lucide-react';
import { FOUNDER_INFO } from '@/data/portfolio-data';

interface HeroSectionProps {
  onOpenFounderModal: () => void;
}

export function HeroSection({ onOpenFounderModal }: HeroSectionProps) {
  return (
    <section id="hero" className="relative min-h-[90vh] pt-36 pb-20 flex flex-col justify-center items-center overflow-hidden grid-bg">
      {/* Dynamic Ambient Backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[400px] bg-gradient-to-tr from-cyan-600/20 via-indigo-600/15 to-purple-600/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Founder Attribution & Accreditation Pill */}
        <button
          onClick={onOpenFounderModal}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-8 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all shadow-lg shadow-cyan-500/10 active:scale-95 group"
        >
          <ShieldCheck className="w-4 h-4 text-cyan-400" />
          <span>Founded & Architected by <strong>{FOUNDER_INFO.name}</strong> (GSA &apos;26)</span>
          <span className="text-[10px] bg-cyan-500/20 px-2 py-0.5 rounded-full text-cyan-200 group-hover:bg-cyan-500/30">View Dossier →</span>
        </button>

        {/* Ecosystem Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
          The Frontier <span className="gradient-text-cyan">AI & Agentic</span> Ecosystem
        </h1>

        {/* Positioning Subtitle */}
        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-10">
          <strong>Resence</strong> is an independent AI technology laboratory engineering multi-model intelligence hubs, multimodal medical demystifiers, and autonomous Model Context Protocol (MCP) commerce protocols.
        </p>

        {/* Primary Interactive CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="#ecosystem"
            className="flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-cyan-500/25 active:scale-95 transition-all"
          >
            <Layers className="w-4 h-4" />
            <span>Explore 6 Subdomains</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="https://ai.resence.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl glass-panel hover:bg-white/10 text-white font-medium text-sm border border-white/15 transition-all active:scale-95 shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Launch Resence AI</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>

          <button
            onClick={onOpenFounderModal}
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl glass-panel hover:bg-cyan-500/10 text-cyan-300 hover:text-white font-medium text-sm border border-cyan-500/20 hover:border-cyan-500/40 transition-all active:scale-95 shadow-lg"
          >
            <User className="w-4 h-4 text-cyan-400" />
            <span>Meet the Founder</span>
          </button>
        </div>

        {/* Interactive Neural Mesh Product Frame Preview */}
        <div className="mb-14 max-w-5xl mx-auto rounded-3xl p-2 sm:p-3 glass-panel border border-cyan-500/30 shadow-2xl relative overflow-hidden group">
          <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-white/10 aspect-[16/9] sm:aspect-[21/9]">
            <img
              src="/images/hero-mesh.jpg"
              alt="Resence AI Multi-Model Intelligence Hub Interface (ai.resence.in)"
              className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700 opacity-95 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070a12] via-transparent to-transparent opacity-80" />
            
            {/* Live Telemetry Overlay Bar */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 px-4 py-3 rounded-2xl bg-slate-950/80 backdrop-blur-xl border border-white/10 text-xs">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 text-emerald-400 font-mono font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Resence Core 3.2: Operational</span>
                </span>
                <span className="hidden sm:inline text-slate-500">|</span>
                <span className="hidden sm:inline text-slate-400 font-mono">OmniRoute 16-Key Failover Pool</span>
              </div>
              <div className="flex items-center gap-4 text-slate-400 font-mono text-[11px]">
                <span>Inference: <strong className="text-cyan-400">450 t/s</strong></span>
                <span>Latency: <strong className="text-indigo-400">Sub-Second</strong></span>
              </div>
            </div>
          </div>
        </div>

        {/* Ecosystem High-Velocity Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="p-5 rounded-2xl glass-panel text-left glass-panel-hover">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono mb-1">6</div>
            <div className="text-xs text-slate-400 font-medium">Live Connected Subdomains</div>
          </div>
          <div className="p-5 rounded-2xl glass-panel text-left glass-panel-hover">
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono mb-1">450 t/s</div>
            <div className="text-xs text-slate-400 font-medium">Hardware LPU Inference</div>
          </div>
          <div className="p-5 rounded-2xl glass-panel text-left glass-panel-hover">
            <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400 font-mono mb-1">100%</div>
            <div className="text-xs text-slate-400 font-medium">Prefix-Locked KV Caching</div>
          </div>
          <div className="p-5 rounded-2xl glass-panel text-left glass-panel-hover">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono mb-1">v1.1.5</div>
            <div className="text-xs text-slate-400 font-medium">NPM Published MCP Rails</div>
          </div>
        </div>

      </div>
    </section>
  );
}
