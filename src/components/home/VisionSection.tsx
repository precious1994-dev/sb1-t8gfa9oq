import React from 'react';
import { Section } from '@/components/ui/Section';

export function VisionSection() {
  return (
    <Section background="gray">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8">Notre Vision</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          ELM est une communauté chrétienne dynamique et accueillante, 
          dédiée à partager l'amour de Dieu et à construire des relations 
          authentiques. Nous croyons en la puissance transformatrice de 
          l'Évangile et nous nous efforçons de faire une différence positive 
          dans notre communauté.
        </p>
      </div>
    </Section>
  );
}