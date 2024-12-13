import React from 'react';
import { Button } from '@/components/ui/Button';
import { FormationProgress } from './FormationProgress';

export function FormationStatus() {
  return (
    <div className="bg-indigo-900 text-white p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Formation des Leaders</h3>
      <p className="text-sm text-indigo-200 mb-4">Session en cours</p>
      
      <FormationProgress progress={75} />
      
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