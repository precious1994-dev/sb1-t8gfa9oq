import React from 'react';
import { Bell, MessageSquare, User } from 'lucide-react';

export function DashboardHeader() {
  return (
    <header className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-semibold">Bienvenue, Pasteur David</h1>
        <p className="text-sm text-gray-600">Tableau de bord administratif ELM</p>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 text-gray-600 hover:text-gray-900">
          <Bell className="w-6 h-6" />
        </button>
        <button className="p-2 text-gray-600 hover:text-gray-900">
          <MessageSquare className="w-6 h-6" />
        </button>
        <button className="flex items-center space-x-2 p-2">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <User className="w-5 h-5 text-gray-600" />
          </div>
        </button>
      </div>
    </header>
  );
}