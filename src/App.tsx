/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { EnergyCounter } from './components/EnergyCounter';
import { InteractiveKundali } from './components/InteractiveKundali';
import { Testimonials } from './components/Testimonials';
import { VirtualTemple } from './components/VirtualTemple';
import { Donation } from './components/Donation';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  return (
    <div className="relative w-full min-h-screen bg-dark-900 overflow-x-hidden">
      {/* Background Particles/Noise overlay can go here */}
      <div className="fixed inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-screen z-0"></div>
      
      <Navigation />
      <Hero />
      <EnergyCounter />
      <Services />
      <InteractiveKundali />
      <VirtualTemple />
      <Testimonials />
      <Donation />
      
      <FloatingActions />
    </div>
  );
}
