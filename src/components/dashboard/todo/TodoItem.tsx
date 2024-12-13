import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TodoItemProps {
  title: string;
  time: string;
  icon: LucideIcon;
}

export function TodoItem({ title, time, icon: Icon }: TodoItemProps) {
  return (
    <div className="flex items-start space-x-3">
      <div className="p-2 bg-gray-100 rounded-lg">
        <Icon className="w-5 h-5 text-indigo-600" />
      </div>
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-gray-500">{time}</p>
      </div>
    </div>
  );
}