'use client';

import React from 'react';
import { Heart, ShieldCheck, Sparkles, ArrowUp } from 'lucide-react';
import { FOUNDER_INFO, RESENCE_PROJECTS } from '@/data/portfolio-data';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/10 bg-[#05080f] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl overflow-hidden border border-cyan-500/30 shadow-md shadow-cyan-500/20 bg-slate-950 p-0.5">
                <img
                  src="/images/logos/logo-option-1.jpg"
                  alt="Resence Logo"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <span className="text-white font-bold text-base tracking-tight">Resence</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              Official Master Portfolio of <strong className="text-white">Piyush Singh</strong>, Founder & CEO of Resence. Engineering high-velocity AI operating systems, medical intelligence platforms, and agentic commerce protocols.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-mono">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Google Knowledge Graph Indexed Entity · 100% Ground Truth</span>
            </div>
          </div>

          {/* Ecosystem Links */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
              Resence Ecosystem
            </h4>
            <ul className="space-y-2 text-xs">
              {RESENCE_PROJECTS.map(p => (
                <li key={p.id}>
                  <a href={p.domain} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                    {p.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coordinates */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
              Founder Coordinates
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href={FOUNDER_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  GitHub Profile (24 Repos)
                </a>
              </li>
              <li>
                <a href={FOUNDER_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  LinkedIn (2,077+ Followers)
                </a>
              </li>
              <li>
                <a href="https://ai.resence.in" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  Resence AI (Chat Live)
                </a>
              </li>
              <li>
                <span className="text-slate-400">GL Bajaj Institute of Management</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center sm:text-left text-slate-500 text-[11px]">
            © {new Date().getFullYear()} Resence. All rights reserved. Founded & Directed by <span className="text-slate-300 font-medium">{FOUNDER_INFO.name}</span>.
          </p>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl glass-panel hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors flex items-center gap-1.5 text-[11px]"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
