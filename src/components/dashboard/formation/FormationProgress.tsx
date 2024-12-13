import React from 'react';

interface FormationProgressProps {
  progress: number;
}

export function FormationProgress({ progress }: FormationProgressProps) {
  return (
    <div className="mb-4">
      <div className="h-2 bg-indigo-800 rounded-full">
        <div 
          className="h-full bg-white rounded-full" 
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}