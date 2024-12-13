import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  label: string;
  value: string;
  info: string;
  icon: LucideIcon;
}

export function StatsCard({ label, value, info, icon: Icon }: StatsCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
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
        <p className="text-sm text-gray-600 mb-1">{label}</p>
        <p className="text-2xl font-semibold">{value}</p>
        <p className="text-xs text-gray-500 mt-1">{info}</p>
      </div>
    </div>
  );
}