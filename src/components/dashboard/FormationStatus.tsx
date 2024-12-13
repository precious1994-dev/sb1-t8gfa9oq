import React from 'react';
import { Button } from '@/components/ui/Button';

export function FormationStatus() {
  return (
    <div className="bg-indigo-900 text-white p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Formation des Leaders</h3>
      <p className="text-sm text-indigo-200 mb-4">Session en cours</p>
      
      <div className="mb-4">
        <div className="h-2 bg-indigo-800 rounded-full">
          <div className="h-full w-3/4 bg-white rounded-full" />
        </div>
      </div>
      
      <p className="text-sm text-indigo-200 mb-6">
        Module actuel: Leadership Spirituel
        <br />
        2 sessions restantes
      </p>
      
      <Button
        variant="outline"
        className="w-full border-indigo-700 text-white hover:bg-indigo-800"
      >
        Voir le programme
      </Button>
    </div>
  );
}