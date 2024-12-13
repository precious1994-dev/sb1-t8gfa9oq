import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Church, ChevronDown } from 'lucide-react';
import { MinistrySubmenu } from '@/components/ministries/MinistrySubmenu';

export function Header() {
  const [showMinistryMenu, setShowMinistryMenu] = useState(false);

  return (
    <header className="bg-white shadow-sm relative">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <Church className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">ELM</span>
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link to="/" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
              Accueil
            </Link>
            <Link to="/about" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
              À Propos
            </Link>
            <div className="relative">
              <button
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
                onClick={() => setShowMinistryMenu(!showMinistryMenu)}
              >
                Ministères
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {showMinistryMenu && (
                <div className="absolute top-full left-0 mt-1 w-64 z-50">
                  <MinistrySubmenu />
                </div>
              )}
            </div>
            <Link to="/events" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
              Événements
            </Link>
            <Link to="/sermons" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
              Sermons
            </Link>
            <Link to="/contact" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}