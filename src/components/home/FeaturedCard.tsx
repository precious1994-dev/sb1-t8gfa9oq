import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeaturedCardProps {
  icon: LucideIcon;
  title: string;
  className?: string;
  children: React.ReactNode;
}

export function FeaturedCard({ icon: Icon, title, className, children }: FeaturedCardProps) {
  return (
    <div className={cn("bg-gray-50 rounded-lg p-6", className)}>
      <div className="flex items-center mb-4">
        <Icon className="h-8 w-8 text-indigo-600" />
        <h2 className="text-2xl font-bold ml-3">{title}</h2>
      </div>
      {children}
    </div>
  );
}