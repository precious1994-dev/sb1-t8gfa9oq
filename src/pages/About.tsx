import React from 'react';
import { AboutHero } from '@/components/about/AboutHero';
import { MissionSection } from '@/components/about/MissionSection';

export function About() {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <MissionSection />
    </div>
  );
}