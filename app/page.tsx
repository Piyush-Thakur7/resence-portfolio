'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero-section';
import { EcosystemShowcase } from '@/components/ecosystem-showcase';
import { ArchitectureSection } from '@/components/architecture-section';
import { FounderSpotlight } from '@/components/founder-spotlight';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { AiChatDrawer } from '@/components/ai-chat-drawer';
import { FounderModal } from '@/components/founder-modal';

export default function Home() {
  const [isFounderModalOpen, setIsFounderModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#070a12] text-slate-100 relative selection:bg-cyan-500 selection:text-black">
      {/* Top Navbar */}
      <Navbar onOpenFounderModal={() => setIsFounderModalOpen(true)} />

      {/* Hero Section (Ecosystem First + Founder Reference) */}
      <HeroSection onOpenFounderModal={() => setIsFounderModalOpen(true)} />

      {/* Flagship Ecosystem (6 Live Subdomains) */}
      <EcosystemShowcase />

      {/* Ecosystem Architecture & Deep Tech Stack */}
      <ArchitectureSection />

      {/* Founder & Leadership Spotlight */}
      <FounderSpotlight onOpenFounderModal={() => setIsFounderModalOpen(true)} />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Interactive AI Drawer Assistant */}
      <AiChatDrawer />

      {/* Comprehensive Founder Dossier Modal */}
      <FounderModal 
        isOpen={isFounderModalOpen} 
        onClose={() => setIsFounderModalOpen(false)} 
      />
    </main>
  );
}
