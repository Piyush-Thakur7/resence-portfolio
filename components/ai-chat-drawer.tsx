'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, MessageSquare, X, Send, Bot, User, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { FOUNDER_INFO, RESENCE_PROJECTS } from '@/data/portfolio-data';

export function AiChatDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: 'assistant' | 'user'; content: string }>>([
    {
      role: 'assistant',
      content: `Hello! I am the Resence AI Assistant. Ask me anything about our Founder **Piyush Singh**, our product ecosystem, or our architecture.`
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const QUICK_PROMPTS = [
    "Who is the founder of Resence?",
    "Give me details of your founder",
    "What is Resence AI OS?",
    "Tell me about WellBridge AI",
    "How to contact Piyush?"
  ];

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg = { role: 'user' as const, content: query };
    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = '';
      const qLower = query.toLowerCase();

      if (qLower === 'who is the founder of resence?' || qLower === 'who is your founder?' || qLower === 'who created you?') {
        reply = "Piyush Singh is the Founder of Resence and my creator.";
      } else if (qLower.includes('detail') || qLower.includes('tell me more about piyush') || qLower.includes('how old')) {
        const birthDate = new Date('2008-01-11T00:00:00+05:30').getTime();
        const now = new Date().getTime();
        const ageYears = Math.floor((now - birthDate) / (1000 * 60 * 60 * 24 * 365.25));
        
        reply = `**Piyush Singh** is the Founder of Resence and my creator.\n\n• **Date of Birth**: January 11, 2008 (${ageYears} years old)\n• **Academics**: 2nd-Year BCA (AI/ML) at GL Bajaj Institute of Management (GLBIM), Greater Noida\n• **Leadership**: Google Student Ambassador (GSA '26, ID: 6403), Google Cloud Gen AI Academy Graduate\n• **Ecosystem**: Resence AI, WellBridge AI, RazorAgent MCP, ServeMATE, Resence Fitness.`;
      } else if (qLower.includes('resence ai') || qLower.includes('ai assistant')) {
        reply = "Resence AI (ai.resence.in) is our flagship multi-model AI platform featuring Groq LPU inference (450 t/s), 100% prefix-locked KV-caching, multimodal vision OCR, and real-time live internet search.";
      } else if (qLower.includes('wellbridge')) {
        reply = "WellBridge AI (wellbridgeai.resence.in) is our healthcare platform developed for Google Cloud Gen AI Academy Cohort 3. It utilizes Gemini Vision OCR on Google Cloud Run to demystify complex pathology and radiology lab reports.";
      } else if (qLower.includes('razoragent')) {
        reply = "RazorAgent (razoragent.resence.in) is a published NPM package (v1.1.5) built for Razorpay AI Buildathon 2026, providing Model Context Protocol (MCP) commerce rails for AI agents with SHA-256 idempotency locks.";
      } else if (qLower.includes('contact') || qLower.includes('email') || qLower.includes('reach')) {
        reply = `You can reach Piyush directly:\n• **Email**: ${FOUNDER_INFO.email}\n• **LinkedIn**: ${FOUNDER_INFO.linkedin}\n• **GitHub**: ${FOUNDER_INFO.github}`;
      } else {
        reply = `Resence is founded by **Piyush Singh** (GSA '26). We build multi-model AI platforms, medical intelligence, and agentic commerce protocols. Explore our live ecosystem at [ai.resence.in](https://ai.resence.in) or ask for specific details!`;
      }

      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-xs shadow-2xl shadow-cyan-500/30 border border-cyan-400/40 active:scale-95 transition-all group"
        >
          <div className="relative">
            <Bot className="w-5 h-5 text-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#070a12] animate-pulse" />
          </div>
          <span className="hidden sm:inline">Ask Resence AI</span>
          <span className="px-1.5 py-0.5 rounded bg-black/20 text-[10px] font-mono">Live</span>
        </button>
      </div>

      {/* Slide-over Drawer / Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-end sm:justify-end p-0 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
          <div 
            className="w-full sm:max-w-md h-[85vh] sm:h-[620px] rounded-t-3xl sm:rounded-3xl glass-panel border border-cyan-500/40 flex flex-col justify-between overflow-hidden shadow-2xl animate-in slide-in-from-bottom sm:slide-in-from-right-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="bg-slate-900/90 px-5 py-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-md shadow-cyan-500/20">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-sm text-white">Resence AI Assistant</h3>
                    <span className="px-1.5 py-0.5 rounded-full text-[9px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Online</span>
                  </div>
                  <p className="text-[11px] text-slate-400">Founder & Ecosystem Intelligence</p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl bg-slate-800/80 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex gap-2.5 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {m.role === 'assistant' && (
                    <div className="w-6 h-6 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}
                  <div
                    className={`p-3 rounded-2xl max-w-[85%] leading-relaxed whitespace-pre-line ${
                      m.role === 'user'
                        ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white rounded-tr-none font-medium'
                        : 'bg-slate-900/90 text-slate-200 border border-white/10 rounded-tl-none'
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-slate-400 text-xs pl-8">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />
                  <div className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce [animation-delay:0.2s]" />
                  <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce [animation-delay:0.4s]" />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts */}
            <div className="px-4 py-2 border-t border-white/5 flex gap-1.5 overflow-x-auto no-scrollbar">
              {QUICK_PROMPTS.map((qp, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(qp)}
                  className="px-2.5 py-1 rounded-full text-[10px] font-mono whitespace-nowrap bg-slate-800/80 hover:bg-cyan-500/20 hover:text-cyan-300 text-slate-300 border border-white/10 transition-colors shrink-0"
                >
                  {qp}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-slate-900/90 border-t border-white/10 flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about Founder Piyush Singh or projects..."
                className="flex-1 bg-slate-950/80 border border-white/10 px-3.5 py-2.5 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
              <button
                onClick={() => handleSendMessage()}
                className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-md shadow-cyan-500/20 transition-all active:scale-95"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
