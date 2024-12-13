import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { dashboardRoutes } from '@/routes/dashboard.routes';

interface SidebarProps {
  onSignOut: () => void;
}

export function Sidebar({ onSignOut }: SidebarProps) {
  const location = useLocation();

  return (
    <div className="w-64 bg-indigo-900 flex flex-col min-h-screen">
      <div className="p-6">
        <Link to="/" className="flex items-center">
          <span className="text-white text-2xl font-bold">ELM</span>
        </Link>
      </div>
      
      <nav className="flex-1 px-4 space-y-1">
        {dashboardRoutes.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === `/dashboard/${item.path}`;
          
          return (
            <Link
              key={item.path}
              to={`/dashboard/${item.path}`}
              className={cn(
                'flex items-center px-4 py-3 rounded-lg transition-colors duration-200',
                'hover:bg-indigo-800 hover:text-white',
                {
                  'bg-indigo-800 text-white': isActive,
                  'text-indigo-200': !isActive,
                }
              )}
            >
              <Icon className="w-5 h-5 mr-3" />
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>
      
      <div className="p-4 border-t border-indigo-800">
        <div className="flex items-center px-4 py-3 text-indigo-200">
          <div className="w-8 h-8 rounded-full bg-indigo-800 flex items-center justify-center">
            <span className="text-sm font-medium">PD</span>
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-white">Pasteur David</p>
            <p className="text-xs text-indigo-300">Administrateur</p>
          </div>
          <button
            onClick={onSignOut}
            className="p-2 text-indigo-200 hover:text-white"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}