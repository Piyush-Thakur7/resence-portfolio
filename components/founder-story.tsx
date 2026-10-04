'use client';

import React from 'react';
import { User, Cpu, Code2, Sparkles, Compass, ShieldCheck, Terminal, Lightbulb } from 'lucide-react';
import { FOUNDER_INFO } from '@/data/portfolio-data';

export function FounderStory() {
  return (
    <section id="founder" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Vision & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs font-mono text-cyan-400 border border-cyan-500/20">
              <Compass className="w-3.5 h-3.5" />
              <span>The Founder&apos;s Methodology</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Architecting with Autonomous AI Agents & First Principles
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              As a 2nd-year BCA student in Artificial Intelligence & Machine Learning at <strong className="text-white">GL Bajaj Institute of Management</strong>, my philosophy centers on high-velocity systems engineering.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Rather than writing rote boilerplate syntax by hand, I operate as an <strong className="text-cyan-400">AI Systems Architect & Director</strong> — conceptualizing user journeys, designing decoupled API contracts, and steering autonomous coding agents (<span className="text-indigo-300">Antigravity, Hermes, Cursor</span>) to scaffold, integrate, and deploy production MVPs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl glass-panel border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
                  <Lightbulb className="w-4 h-4" />
                  <span>Product Ideation & Strategy</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Identifying friction in healthcare, commerce, and daily workflows to design high-impact solutions.
                </p>
              </div>

              <div className="p-4 rounded-2xl glass-panel border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm">
                  <Cpu className="w-4 h-4" />
                  <span>Agentic Toolchain & MCP</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Building Model Context Protocol gateways and zero-cost serverless multi-tier failover meshes.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Profile Box */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl glass-panel border border-cyan-500/30 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/20 blur-3xl rounded-full pointer-events-none" />

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-extrabold text-2xl shadow-xl shadow-cyan-500/25">
                  PS
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{FOUNDER_INFO.name}</h3>
                  <p className="text-xs text-cyan-400 font-mono">{FOUNDER_INFO.tagline}</p>
                </div>
              </div>

              <div className="space-y-3 text-xs font-mono border-t border-white/10 pt-4 text-slate-300">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Date of Birth:</span>
                  <span className="text-white font-semibold">January 11, 2008</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Academic Standing:</span>
                  <span className="text-white font-semibold">BCA (AI/ML) · 2nd Year (Sem III)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">College / Institution:</span>
                  <span className="text-white font-semibold text-right">GLBIM Greater Noida</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Google Ambassador:</span>
                  <span className="text-cyan-300 font-semibold">GSA &apos;26 (ID: 6403)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Primary Domain:</span>
                  <a href="https://www.resence.in" className="text-cyan-400 hover:underline">
                    www.resence.in
                  </a>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Ground Truth Verified Record</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
