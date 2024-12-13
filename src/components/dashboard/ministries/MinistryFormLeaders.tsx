import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface MinistryFormLeadersProps {
  leaders: string[];
  onChange: (leaders: string[]) => void;
}

export function MinistryFormLeaders({ leaders, onChange }: MinistryFormLeadersProps) {
  const [newLeader, setNewLeader] = useState('');

  const handleAddLeader = () => {
    if (newLeader.trim()) {
      onChange([...leaders, newLeader.trim()]);
      setNewLeader('');
    }
  };

  const handleRemoveLeader = (index: number) => {
    onChange(leaders.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Leaders
        </label>
        <div className="mt-2 space-y-2">
          {leaders.map((leader, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className="flex-1 px-3 py-2 bg-gray-50 rounded-md">
                {leader}
              </span>
              <button
                type="button"
                onClick={() => handleRemoveLeader(index)}
                className="p-1 text-gray-400 hover:text-red-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex space-x-2">
        <input
          type="text"
          value={newLeader}
          onChange={(e) => setNewLeader(e.target.value)}
          placeholder="Nom du leader"
          className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        <Button
          type="button"
          onClick={handleAddLeader}
          disabled={!newLeader.trim()}
        >
          <Plus className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}