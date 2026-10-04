'use client';

import React, { useState } from 'react';
import { Award, ShieldCheck, CheckCircle2, ExternalLink, Calendar, BookmarkCheck } from 'lucide-react';
import { CERTIFICATIONS, LEADERSHIP_HONORS } from '@/data/portfolio-data';

export function CredentialsSection() {
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = ['All', 'Google Cloud', 'AI & ML', 'Cloud & Systems', 'Data & Analytics', 'Security'];

  const filteredCerts = activeTab === 'All'
    ? CERTIFICATIONS
    : CERTIFICATIONS.filter(c => c.category === activeTab);

  return (
    <section id="credentials" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs font-mono text-cyan-400 mb-4 border border-cyan-500/20">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials & Honors</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Leadership & Industry Certifications
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            100% verified credentials, Google community leadership, and certifications across Cloud, Generative AI, and Systems Engineering.
          </p>
        </div>

        {/* Leadership & Hackathon Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {LEADERSHIP_HONORS.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-3xl glass-panel glass-panel-hover border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                    {item.highlightBadge}
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{item.role}</h3>
                <p className="text-xs font-mono text-indigo-400 mb-3">{item.organization}</p>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">{item.description}</p>
              </div>

              {item.credentialId && (
                <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{item.credentialId}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 10 Verified Certifications Header & Filters */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-3">
            Industry Certifications (10 Verified Total)
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  activeTab === cat
                    ? 'bg-cyan-500 text-black font-semibold shadow-lg shadow-cyan-500/25'
                    : 'glass-panel text-slate-300 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="p-5 rounded-2xl glass-panel glass-panel-hover border border-white/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-cyan-300 border border-cyan-500/20">
                    {cert.category}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">{cert.date}</span>
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">{cert.title}</h4>
                <p className="text-xs text-slate-400 mb-3">{cert.issuer}</p>
              </div>

              {cert.credentialId && (
                <div className="pt-2 border-t border-white/5 text-[10px] font-mono text-slate-400 truncate">
                  ID: {cert.credentialId}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
