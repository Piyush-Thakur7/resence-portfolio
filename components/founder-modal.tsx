'use client';

import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Award, 
  GraduationCap, 
  BookOpen, 
  Code2, 
  Mail, 
  Linkedin, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles,
  User,
  Compass,
  FileBadge
} from 'lucide-react';
import { FOUNDER_INFO, CERTIFICATIONS, ACADEMIC_MODULES, LEADERSHIP_HONORS } from '@/data/portfolio-data';

interface FounderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FounderModal({ isOpen, onClose }: FounderModalProps) {
  const [activeTab, setActiveTab] = useState<'profile' | 'credentials' | 'academics'>('profile');
  const [selectedCertFilter, setSelectedCertFilter] = useState<string>('All');

  if (!isOpen) return null;

  const certCategories = ['All', 'Google Cloud', 'AI & ML', 'Cloud & Systems', 'Data & Analytics', 'Security'];

  const filteredCerts = selectedCertFilter === 'All' 
    ? CERTIFICATIONS 
    : CERTIFICATIONS.filter(c => c.category === selectedCertFilter);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-4xl max-h-[90vh] bg-[#090d18] border border-cyan-500/30 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between bg-slate-950/80 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-cyan-500/25">
              P
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-extrabold text-white tracking-tight">{FOUNDER_INFO.name}</h2>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  Founder & CEO
                </span>
              </div>
              <p className="text-xs text-slate-400">AI Systems Architect · Resence</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b border-white/10 bg-slate-900/40 px-6 pt-3 gap-2 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('profile')}
            className={`pb-3 px-3 text-xs sm:text-sm font-semibold transition-all border-b-2 flex items-center gap-2 ${
              activeTab === 'profile'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Executive Profile</span>
          </button>

          <button
            onClick={() => setActiveTab('credentials')}
            className={`pb-3 px-3 text-xs sm:text-sm font-semibold transition-all border-b-2 flex items-center gap-2 ${
              activeTab === 'credentials'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Credentials ({CERTIFICATIONS.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('academics')}
            className={`pb-3 px-3 text-xs sm:text-sm font-semibold transition-all border-b-2 flex items-center gap-2 ${
              activeTab === 'academics'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Academic Matrix</span>
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6 text-slate-300">
          
          {/* TAB 1: EXECUTIVE PROFILE */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              {/* Quick Summary Card */}
              <div className="p-6 rounded-3xl glass-panel border border-cyan-500/20 bg-gradient-to-r from-cyan-500/[0.05] to-indigo-500/[0.05]">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs mb-3">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Google Student Ambassador &apos;26 (ID: 6403)</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Architecting Autonomous AI & Intelligent Systems</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Piyush Singh is the Founder & CEO of <strong>Resence</strong>. As an AI Systems Architect, he directs multi-model AI clusters, Model Context Protocol (MCP) integrations, and serverless AI infrastructure to build high-utility intelligent tools across healthcare, commerce, and developer tooling.
                </p>
              </div>

              {/* Leadership & Ecosystem Roles */}
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>Leadership & Honors</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {LEADERSHIP_HONORS.map(item => (
                    <div key={item.id} className="p-5 rounded-2xl glass-panel border border-white/10">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 mb-2">
                        {item.highlightBadge}
                      </span>
                      <h5 className="font-bold text-sm text-white">{item.role}</h5>
                      <p className="text-xs text-slate-400 mb-2">{item.organization} · <span className="font-mono text-cyan-400">{item.period}</span></p>
                      <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>
                      {item.credentialId && (
                        <p className="mt-2 text-[10px] font-mono text-slate-400">ID: {item.credentialId}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Coordinates */}
              <div className="p-5 rounded-2xl glass-panel border border-white/10">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-indigo-400" />
                  <span>Education & Institutional Affiliations</span>
                </h4>
                <div className="space-y-1.5 text-xs text-slate-300">
                  <p><strong className="text-white">Degree:</strong> {FOUNDER_INFO.degree} in {FOUNDER_INFO.specialization}</p>
                  <p><strong className="text-white">Institution:</strong> {FOUNDER_INFO.college}</p>
                  <p><strong className="text-white">Affiliating University:</strong> {FOUNDER_INFO.university}</p>
                  <p><strong className="text-white">Academic Standing:</strong> {FOUNDER_INFO.academicYear}</p>
                </div>
              </div>

              {/* Direct Founder Coordinates */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">
                <a
                  href={`mailto:${FOUNDER_INFO.email}`}
                  className="px-4 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono flex items-center gap-2 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{FOUNDER_INFO.email}</span>
                </a>
                <a
                  href={FOUNDER_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-mono flex items-center gap-2 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={FOUNDER_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-mono flex items-center gap-2 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub (@Piyush-Thakur7)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}

          {/* TAB 2: VERIFIED CREDENTIALS */}
          {activeTab === 'credentials' && (
            <div className="space-y-6">
              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-2">
                {certCategories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCertFilter(cat)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                      selectedCertFilter === cat
                        ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                        : 'glass-panel text-slate-400 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Certifications Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredCerts.map(cert => (
                  <div key={cert.id} className="p-5 rounded-2xl glass-panel border border-white/10 hover:border-cyan-500/30 transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        {cert.category}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">{cert.date}</span>
                    </div>
                    <h5 className="font-bold text-sm text-white mb-1">{cert.title}</h5>
                    <p className="text-xs text-slate-400 mb-2">{cert.issuer}</p>
                    {cert.credentialId && (
                      <p className="text-[10px] font-mono text-slate-500 break-all bg-slate-950/60 p-2 rounded-lg border border-white/5">
                        ID: {cert.credentialId}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: ACADEMIC MATRIX */}
          {activeTab === 'academics' && (
            <div className="space-y-6">
              <div className="p-5 rounded-2xl glass-panel border border-indigo-500/20 bg-indigo-500/[0.04]">
                <h4 className="text-sm font-bold text-white mb-1">BCA AI/ML Curriculum Foundations</h4>
                <p className="text-xs text-slate-400">Rigorous 3rd Semester Computer Science & Applied AI Foundations.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ACADEMIC_MODULES.map((mod, idx) => (
                  <div key={idx} className="p-5 rounded-2xl glass-panel border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-white">{mod.subject}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-white/10">
                        {mod.code}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{mod.focus}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-slate-950/80 flex items-center justify-between text-xs text-slate-400">
          <span>Resence Founder Dossier · 100% Ground Truth Verified</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-colors"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
}
