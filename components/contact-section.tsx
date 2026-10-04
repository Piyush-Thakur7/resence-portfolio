'use client';

import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, ExternalLink, ArrowRight } from 'lucide-react';
import { FOUNDER_INFO } from '@/data/portfolio-data';

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(FOUNDER_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs font-mono text-cyan-400 mb-4 border border-cyan-500/20">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect with the Founder</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let&apos;s Build the Future of AI Together
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Whether for collaboration, hackathons, AI architecture inquiries, or engineering partnerships, reach out directly.
          </p>
        </div>

        {/* Contact Cards Grid (3 Columns: Email, LinkedIn, GitHub) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          
          {/* Email */}
          <div className="p-8 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between relative overflow-hidden border border-cyan-500/20 bg-gradient-to-b from-cyan-500/[0.04] to-transparent">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Direct Email</h3>
              <p className="text-xs text-slate-400 mb-3">Primary inbox for architecture inquiries and official correspondence.</p>
              <p className="text-xs font-mono text-cyan-300 mb-6 break-all bg-slate-900/60 p-2.5 rounded-xl border border-white/5">{FOUNDER_INFO.email}</p>
            </div>
            <div className="space-y-2">
              <button
                onClick={handleCopyEmail}
                className="w-full py-3 rounded-xl bg-slate-900/80 hover:bg-white/10 text-xs font-mono text-slate-300 hover:text-white border border-white/10 flex items-center justify-center gap-2 transition-colors"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedEmail ? 'Copied to Clipboard' : 'Copy Email Address'}</span>
              </button>
              <a
                href={`mailto:${FOUNDER_INFO.email}`}
                className="w-full py-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-xs font-mono text-cyan-300 border border-cyan-500/30 flex items-center justify-center gap-2 transition-colors"
              >
                <span>Compose Mail</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="p-8 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between relative overflow-hidden border border-blue-500/20 bg-gradient-to-b from-blue-500/[0.04] to-transparent">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                <Linkedin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">LinkedIn Network</h3>
              <p className="text-xs text-slate-400 mb-3">Professional connections, leadership updates, and industry networking.</p>
              <p className="text-xs font-mono text-blue-300 mb-6 bg-slate-900/60 p-2.5 rounded-xl border border-white/5">2,077+ Followers · Active Creator</p>
            </div>
            <a
              href={FOUNDER_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-xs font-mono text-blue-300 border border-blue-500/30 flex items-center justify-center gap-2 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>Connect on LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* GitHub */}
          <div className="p-8 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between relative overflow-hidden border border-purple-500/20 bg-gradient-to-b from-purple-500/[0.04] to-transparent">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
                <Github className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">GitHub Engineering</h3>
              <p className="text-xs text-slate-400 mb-3">Public repositories, open-source MCP tools, and architecture codebases.</p>
              <p className="text-xs font-mono text-purple-300 mb-6 bg-slate-900/60 p-2.5 rounded-xl border border-white/5">24 Repositories · @Piyush-Thakur7</p>
            </div>
            <a
              href={FOUNDER_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 text-xs font-mono text-purple-300 border border-purple-500/30 flex items-center justify-center gap-2 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Explore GitHub Repos</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
