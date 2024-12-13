import React from 'react';
import { Section } from '@/components/ui/Section';

export function AboutHero() {
  return (
    <Section className="pt-24 pb-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">À Propos de Notre Église</h1>
        <p className="text-xl text-gray-600">
          Découvrez notre histoire, notre mission et nos valeurs fondamentales qui guident notre communauté depuis sa création.
        </p>
      </div>
    </Section>
  );
}