'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import CommandPalette from '../components/CommandPalette';
import SynapticScrollNavigator from '../components/SynapticScrollNavigator';
import QuantumFluxBackground from '../components/QuantumFluxBackground';
import ScrollStorySection from '../components/ScrollStorySection';
import SystemsPortfolio from '../components/SystemsPortfolio';
import ChronologicalOdyssey from '../components/ChronologicalOdyssey';
import SafetyDashboard from '../components/SafetyDashboard';
import ExecutiveContact from '../components/ExecutiveContact';
import Footer from '../components/Footer';
import ScrollAnimationEngine from '../components/ScrollAnimationEngine';

export default function Home() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main style={{ position: 'relative', width: '100%', overflowX: 'clip' }}>
      <ScrollAnimationEngine />
      <Navbar onOpenSearch={() => setCommandPaletteOpen(true)} />
      <CommandPalette isOpen={commandPaletteOpen} onClose={() => setCommandPaletteOpen(false)} />
      <SynapticScrollNavigator />
      <QuantumFluxBackground />
      <ScrollStorySection />
      <SystemsPortfolio />
      <ChronologicalOdyssey />
      <SafetyDashboard />
      <ExecutiveContact />
      <Footer />
    </main>
  );
}
