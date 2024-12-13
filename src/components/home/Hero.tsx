import React from 'react';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section 
      className="relative h-[600px] bg-cover bg-center"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&q=80")'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Bienvenue à l'Église ELM
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Un lieu de foi, d'espérance et d'amour
          </p>
          <Button size="lg">
            Découvrir notre église
          </Button>
        </div>
      </div>
    </section>
  );
}