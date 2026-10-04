'use client';

import React from 'react';
import { ShieldCheck, User, Award, GraduationCap, ArrowRight, Sparkles } from 'lucide-react';
import { FOUNDER_INFO } from '@/data/portfolio-data';

interface FounderSpotlightProps {
  onOpenFounderModal: () => void;
}

export function FounderSpotlight({ onOpenFounderModal }: FounderSpotlightProps) {
  return (
    <section id="founder" className="py-20 relative overflow-hidden bg-slate-950/80 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-cyan-500/30 bg-gradient-to-r from-cyan-500/[0.04] via-indigo-500/[0.04] to-transparent relative overflow-hidden shadow-2xl">
          
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 blur-[90px] rounded-full pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
            
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs font-mono text-cyan-400 border border-cyan-500/20">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Leadership & Architecture</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Led by <span className="gradient-text-cyan">{FOUNDER_INFO.name}</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Founder & Chief Executive Officer of <strong>Resence</strong>. Selected as a <strong>Google Student Ambassador (GSA &apos;26, ID: 6403)</strong> and graduate of the Google Cloud Gen AI Academy. Directing autonomous agent systems to bridge frontier foundation models with high-utility applications.
              </p>

              <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-xl border border-white/10">
                  <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                  <span>BCA (AI/ML) · GL Bajaj</span>
                </span>
                <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-xl border border-white/10">
                  <Award className="w-3.5 h-3.5 text-cyan-400" />
                  <span>10 Verified Certifications</span>
                </span>
                <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-xl border border-white/10">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  <span>6 Live Subdomains</span>
                </span>
              </div>
            </div>

            <div className="shrink-0 w-full lg:w-auto">
              <button
                onClick={onOpenFounderModal}
                className="w-full lg:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2.5 transition-all active:scale-95 group"
              >
                <User className="w-4 h-4" />
                <span>Open Founder Dossier</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
