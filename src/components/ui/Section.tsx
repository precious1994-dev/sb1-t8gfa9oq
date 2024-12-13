import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  className?: string;
  children: React.ReactNode;
  containerClassName?: string;
  background?: 'white' | 'gray';
}

export function Section({ 
  className,
  children,
  containerClassName,
  background = 'white'
}: SectionProps) {
  return (
    <section className={cn(
      'py-16',
      {
        'bg-white': background === 'white',
        'bg-gray-50': background === 'gray',
      },
      className
    )}>
      <div className={cn(
        'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
        containerClassName
      )}>
        {children}
      </div>
    </section>
  );
}