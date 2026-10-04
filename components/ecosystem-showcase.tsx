'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Github, Sparkles, Activity, ShieldCheck, HeartHandshake, Dumbbell, FileCode2, Layers, Info } from 'lucide-react';
import { RESENCE_PROJECTS, Project } from '@/data/portfolio-data';
import { ProjectModal } from './project-modal';

export function EcosystemShowcase() {
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'AI Assistant', 'Frontier Healthcare', 'Agentic Commerce', 'Social Impact', 'Health & Fitness', 'Utilities'];

  const filteredProjects = filter === 'All' 
    ? RESENCE_PROJECTS 
    : RESENCE_PROJECTS.filter(p => p.category === filter);

  return (
    <section id="ecosystem" className="py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs font-mono text-cyan-400 mb-4 border border-cyan-500/20">
            <Layers className="w-3.5 h-3.5" />
            <span>Resence Innovation Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Products & Frontier AI Architectures
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A cohesive suite of multi-model AI assistants, medical OCR intelligence, agentic commerce protocols, and social utility platforms under the <strong className="text-cyan-400">resence.in</strong> domain umbrella.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                filter === cat
                  ? 'bg-cyan-500 text-black font-semibold shadow-lg shadow-cyan-500/25'
                  : 'glass-panel text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between border cursor-pointer transition-all overflow-hidden group ${
                project.isFlagship ? 'border-cyan-500/40 shadow-cyan-500/10' : 'border-white/10'
              }`}
              onClick={() => setSelectedProject(project)}
            >
              {/* Product Visual Mockup Banner */}
              {project.imageUrl && (
                <div className="relative h-48 w-full overflow-hidden bg-slate-950 border-b border-white/10">
                  <img
                    src={project.imageUrl}
                    alt={`${project.title} Preview`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d18] via-transparent to-transparent" />
                  
                  {/* Category Chip over Image */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-slate-950/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30">
                      {project.category}
                    </span>
                  </div>

                  {project.badge && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-gradient-to-r from-cyan-500/80 to-indigo-600/80 backdrop-blur-md text-white border border-white/20 shadow-md">
                        {project.badge}
                      </span>
                    </div>
                  )}
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <Info className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mb-3">{project.tagline}</p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-900/80 text-slate-400 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Card Bottom Links */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10" onClick={(e) => e.stopPropagation()}>
                    <a
                      href={project.domain}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group/link"
                    >
                      <span>Launch {project.domainLabel}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-slate-900/80 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
                        title="View Source on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
