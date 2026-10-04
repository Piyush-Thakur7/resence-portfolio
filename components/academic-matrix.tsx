'use client';

import React from 'react';
import { GraduationCap, BookOpen, Database, Cpu, Code2, LineChart, Binary } from 'lucide-react';
import { ACADEMIC_MODULES } from '@/data/portfolio-data';

export function AcademicMatrix() {
  return (
    <section id="academics" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs font-mono text-cyan-400 mb-4 border border-cyan-500/20">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Rigor & Core CS Foundations</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            BCA in Artificial Intelligence & Machine Learning
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            <strong>GL Bajaj Institute of Management (GLBIM), Greater Noida</strong> · Affiliated with Chaudhary Charan Singh University (CCSU) · 2nd Year (Semester III)
          </p>
        </div>

        {/* Academic Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACADEMIC_MODULES.map((mod) => (
            <div
              key={mod.code}
              className="p-6 rounded-3xl glass-panel glass-panel-hover border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {mod.code}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{mod.subject}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {mod.focus}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
