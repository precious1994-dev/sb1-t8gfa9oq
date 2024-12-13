import React from 'react';
import { Calendar, Book, Users } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { FeaturedCard } from './FeaturedCard';
import { Button } from '@/components/ui/Button';

export function FeaturedSection() {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeaturedCard icon={Calendar} title="Événements à venir">
          <div className="space-y-4">
            <div className="border-l-4 border-indigo-600 pl-4">
              <p className="font-semibold">Culte du Dimanche</p>
              <p className="text-gray-600">Tous les dimanches à 10h30</p>
            </div>
            <div className="border-l-4 border-indigo-600 pl-4">
              <p className="font-semibold">Étude Biblique</p>
              <p className="text-gray-600">Mercredi à 19h00</p>
            </div>
          </div>
        </FeaturedCard>

        <FeaturedCard icon={Book} title="Dernier Sermon">
          <div>
            <h3 className="font-semibold">L'Amour de Dieu</h3>
            <p className="text-gray-600 mb-2">Par Pasteur David</p>
            <p className="text-gray-600">
              Découvrez notre dernier message sur l'amour inconditionnel de Dieu...
            </p>
            <Button variant="outline" className="mt-4">
              Écouter le sermon →
            </Button>
          </div>
        </FeaturedCard>

        <FeaturedCard icon={Users} title="Nos Ministères">
          <ul className="space-y-2">
            <li className="flex items-center text-gray-600">
              → Ministère de la Jeunesse
            </li>
            <li className="flex items-center text-gray-600">
              → Ministère des Enfants
            </li>
            <li className="flex items-center text-gray-600">
              → Ministère des Adultes
            </li>
            <li className="flex items-center text-gray-600">
              → Ministère des Femmes
            </li>
          </ul>
          <Button variant="outline" className="mt-4">
            Voir tous les ministères →
          </Button>
        </FeaturedCard>
      </div>
    </Section>
  );
}