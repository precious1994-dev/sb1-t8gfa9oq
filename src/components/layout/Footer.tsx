import React from 'react';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">ELM</h3>
            <p className="text-gray-400">
              Une église qui proclame l'amour de Dieu et construit une communauté de foi.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                123 Rue de l'Église, Paris
              </p>
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                +33 1 23 45 67 89
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                contact@elm-church.fr
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ELM. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}