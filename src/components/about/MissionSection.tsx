import React from 'react';
import { Section } from '@/components/ui/Section';
import { Heart, Users, Book } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: "L'Amour",
    description: "Nous croyons en l'amour inconditionnel de Dieu et nous nous efforçons de le partager avec tous."
  },
  {
    icon: Users,
    title: "La Communauté",
    description: "Nous construisons une communauté forte où chacun peut grandir dans sa foi et trouver sa place."
  },
  {
    icon: Book,
    title: "La Parole",
    description: "Nous sommes fondés sur la Parole de Dieu et nous l'enseignons fidèlement."
  }
];

export function MissionSection() {
  return (
    <Section background="gray">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Notre Mission</h2>
        <p className="text-xl text-gray-600">
          Notre mission est de faire connaître l'amour de Dieu, de former des disciples 
          et de servir notre communauté avec compassion.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 mb-4">
                <Icon className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}