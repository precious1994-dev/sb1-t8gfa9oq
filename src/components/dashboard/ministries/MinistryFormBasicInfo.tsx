import React from 'react';

interface MinistryFormBasicInfoProps {
  data: {
    title: string;
    description: string;
    category: string;
  };
  onChange: (data: Partial<MinistryFormBasicInfoProps['data']>) => void;
}

export function MinistryFormBasicInfo({ data, onChange }: MinistryFormBasicInfoProps) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Titre
        </label>
        <input
          type="text"
          value={data.title}
          onChange={(e) => onChange({ title: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          value={data.description}
          onChange={(e) => onChange({ description: e.target.value })}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Catégorie
        </label>
        <select
          value={data.category}
          onChange={(e) => onChange({ category: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="Jeunesse">Jeunesse</option>
          <option value="Enfants">Enfants</option>
          <option value="Adultes">Adultes</option>
          <option value="Femmes">Femmes</option>
          <option value="Hommes">Hommes</option>
        </select>
      </div>
    </div>
  );
}