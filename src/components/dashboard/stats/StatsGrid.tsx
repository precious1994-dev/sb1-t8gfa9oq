import React from 'react';
import { Users, Calendar, Heart, BookOpen } from 'lucide-react';
import { StatsCard } from './StatsCard';

const stats = [
  {
    label: 'Membres',
    value: '243',
    icon: Users,
    info: 'Membres actifs'
  },
  {
    label: 'Événements',
    value: '12',
    icon: Calendar,
    info: 'Événements à venir'
  },
  {
    label: 'Ministères',
    value: '7',
    icon: Heart,
    info: 'Ministères actifs'
  },
  {
    label: 'Sermons',
    value: '156',
    icon: BookOpen,
    info: 'Sermons enregistrés'
  }
];

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  );
}