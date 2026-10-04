'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowUpRight, User, Menu, X, ShieldCheck, Layers } from 'lucide-react';
import { FOUNDER_INFO } from '@/data/portfolio-data';

interface NavbarProps {
  onOpenFounderModal: () => void;
}

export function Navbar({ onOpenFounderModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled ? 'bg-[#070a12]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Founder Label */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl overflow-hidden border border-cyan-500/30 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform bg-slate-950 flex items-center justify-center p-0.5">
            <img
              src="/images/logos/logo-option-1.jpg"
              alt="Resence Logo"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                Resence
              </span>
              <span className="px-2 py-0.5 text-[10px] font-mono font-semibold rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                Ecosystem Hub
              </span>
            </div>
            <p className="text-[11px] text-slate-400">Frontier AI Engineering</p>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#ecosystem" className="hover:text-cyan-400 transition-colors">Ecosystem</a>
          <a href="#architecture" className="hover:text-cyan-400 transition-colors">Architecture</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </nav>

        {/* Action Buttons: Meet Founder & Launch AI */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenFounderModal}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl glass-panel hover:bg-white/10 text-slate-200 hover:text-white font-semibold text-xs border border-white/15 transition-all active:scale-95"
          >
            <User className="w-3.5 h-3.5 text-cyan-400" />
            <span>Founder Dossier</span>
          </button>

          <a
            href="https://ai.resence.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-xs tracking-wide shadow-lg shadow-cyan-500/20 active:scale-95 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Launch Resence AI</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070a12]/95 border-b border-white/10 px-6 py-6 space-y-4 backdrop-blur-2xl animate-in slide-in-from-top-4">
          <a
            href="#ecosystem"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-cyan-400 py-1"
          >
            Ecosystem (6 Subdomains)
          </a>
          <a
            href="#architecture"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-cyan-400 py-1"
          >
            Architecture
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenFounderModal();
            }}
            className="w-full text-left text-slate-300 hover:text-cyan-400 py-1 flex items-center gap-2"
          >
            <User className="w-4 h-4 text-cyan-400" />
            <span>Founder Dossier (Piyush Singh)</span>
          </button>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-cyan-400 py-1"
          >
            Contact
          </a>
          <div className="pt-2">
            <a
              href="https://ai.resence.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-xs"
            >
              <Sparkles className="w-4 h-4" />
              <span>Launch Resence AI</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
