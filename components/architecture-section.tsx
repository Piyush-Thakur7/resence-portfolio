'use client';

import React from 'react';
import { Cpu, Zap, Lock, Eye, Volume2, ShieldCheck, Terminal, Layers } from 'lucide-react';

export function ArchitectureSection() {
  const stackItems = [
    {
      icon: Cpu,
      title: 'Multi-Model Neural Core',
      description: 'Unified orchestration across Groq Llama 3.3 70B, Google Gemini 2.5 Flash, NVIDIA Nemotron 3.5, and DeepSeek R1 with sub-second failovers.',
      badge: 'Multi-LLM Hub'
    },
    {
      icon: Zap,
      title: '450 t/s Hardware Acceleration',
      description: 'LPU-accelerated inference stream delivering instant responses with 100% deterministic prefix-locked KV-caching architecture.',
      badge: 'Sub-Second Stream'
    },
    {
      icon: Lock,
      title: 'Model Context Protocol (MCP)',
      description: 'Standardized agent rails enabling autonomous reasoning agents to safely trigger deterministic payments, refunds, and tools via NPM package v1.1.5.',
      badge: 'Cryptographic Lock'
    },
    {
      icon: Eye,
      title: 'Multimodal Vision & OCR',
      description: 'High-resolution document and medical pathology ingestion pipeline powered by Gemini 2.5 Flash with sub-millimeter bounding boxes.',
      badge: 'Multimodal OCR'
    },
    {
      icon: Volume2,
      title: 'Neural Speech & Audio Engine',
      description: 'Bi-directional audio pipeline combining low-latency Whisper speech-to-text with continuous Web Speech Synthesis across 99+ languages.',
      badge: 'Voice Mode'
    },
    {
      icon: Layers,
      title: 'Serverless Cloud Infrastructure',
      description: 'Auto-scaling containers deployed across Google Cloud Run and Vercel edge nodes with global DNS resolution and zero idle overhead.',
      badge: 'Google Cloud Run'
    }
  ];

  return (
    <section id="architecture" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs font-mono text-cyan-400 mb-4 border border-cyan-500/20">
            <Cpu className="w-3.5 h-3.5" />
            <span>Ecosystem Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Built for Extreme Speed & Reliability
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            How the Resence technology ecosystem powers 6 interconnected subdomains with frontier models, deterministic protocols, and cloud infrastructure.
          </p>
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stackItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 sm:p-8 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between border border-white/10"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-slate-900 text-cyan-300 border border-white/10">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
