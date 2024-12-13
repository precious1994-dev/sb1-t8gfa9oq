import React from 'react';
import { Users, Calendar, Heart, BookOpen } from 'lucide-react';

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
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-gray-100 rounded-lg">
                <Icon className="w-6 h-6 text-indigo-600" />
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <span className="sr-only">Plus d'informations</span>
                •••
              </button>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
              <p className="text-2xl font-semibold">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-1">{stat.info}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}