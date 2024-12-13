import React from 'react';
import { Hero } from '@/components/home/Hero';
import { FeaturedSection } from '@/components/home/FeaturedSection';
import { VisionSection } from '@/components/home/VisionSection';

export function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedSection />
      <VisionSection />
    </div>
  );
}