'use client';

import React from 'react';
import { X, ArrowUpRight, Github, Sparkles, CheckCircle2, Layers, Cpu, ShieldCheck } from 'lucide-react';
import { Project } from '@/data/portfolio-data';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl rounded-3xl glass-panel border border-cyan-500/40 p-6 sm:p-8 relative shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/15 blur-3xl rounded-full pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-slate-900/80 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
              {project.category}
            </span>
            {project.badge && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                {project.badge}
              </span>
            )}
          </div>
          <h3 className="text-3xl font-extrabold text-white mb-1">{project.title}</h3>
          <p className="text-sm font-mono text-cyan-400">{project.tagline}</p>
        </div>

        {/* Full Overview */}
        <div className="space-y-4 mb-8 text-sm text-slate-300 leading-relaxed">
          <p>{project.description}</p>
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 font-bold">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>Architecture & Implementation Highlights</span>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-400 list-disc list-inside">
              <li>Direct domain routing deployed under <strong className="text-white">{project.domainLabel}</strong></li>
              <li>Engineered using high-velocity AI agent orchestration with strict ground truth compliance</li>
              <li>Decoupled modular architecture with zero server cost and fast edge response</li>
            </ul>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
            Core Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900/90 text-slate-300 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
          <a
            href={project.domain}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-xs tracking-wider uppercase text-center shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <span>Launch {project.domainLabel}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-5 rounded-xl glass-panel hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-mono flex items-center gap-2 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Source Code</span>
            </a>
          )}
        </div>

      </div>
    </div>
  );
}
