import React from 'react';
import { Section } from '@/components/ui/Section';
import { MinistryCard } from '@/components/ministries/MinistryCard';
import { ministries } from '@/data/ministries';

export function Ministries() {
  return (
    <>
      <Section className="pt-24 pb-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Nos Ministères</h1>
          <p className="text-xl text-gray-600">
            Découvrez nos différents ministères conçus pour répondre aux besoins 
            spirituels de chaque membre de notre communauté.
          </p>
        </div>
      </Section>

      <Section background="gray">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry, index) => (
            <MinistryCard key={index} {...ministry} />
          ))}
        </div>
      </Section>
    </>
  );
}