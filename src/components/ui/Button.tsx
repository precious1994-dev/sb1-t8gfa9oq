import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'rounded-lg font-medium transition-colors',
        {
          'bg-indigo-600 hover:bg-indigo-700 text-white': variant === 'primary',
          'bg-gray-200 hover:bg-gray-300 text-gray-900': variant === 'secondary',
          'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50': variant === 'outline',
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-3 text-base': size === 'md',
          'px-8 py-4 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    />
  );
}