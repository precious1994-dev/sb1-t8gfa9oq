import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface MinistryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

export function MinistryCard({ icon: Icon, title, description, link }: MinistryCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-indigo-100 rounded-lg">
          <Icon className="h-6 w-6 text-indigo-600" />
        </div>
        <h3 className="text-xl font-semibold ml-3">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button variant="outline" className="w-full">
        En savoir plus →
      </Button>
    </div>
  );
}