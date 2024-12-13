import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ministryRoutes } from '@/routes/ministries.routes';

interface MinistrySubmenuProps {
  className?: string;
}

export function MinistrySubmenu({ className }: MinistrySubmenuProps) {
  return (
    <div className={cn("bg-white shadow-lg rounded-lg overflow-hidden", className)}>
      <div className="p-4 bg-indigo-50 border-b border-indigo-100">
        <h3 className="text-lg font-semibold text-indigo-900">Nos Ministères</h3>
      </div>
      <nav className="divide-y divide-gray-100">
        {ministryRoutes.map((ministry) => {
          const Icon = ministry.icon;
          return (
            <Link
              key={ministry.link}
              to={ministry.link}
              className="flex items-center space-x-3 p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex-shrink-0">
                <Icon className="h-5 w-5 text-indigo-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">{ministry.title}</p>
                <p className="text-sm text-gray-500 truncate">{ministry.description}</p>
              </div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}