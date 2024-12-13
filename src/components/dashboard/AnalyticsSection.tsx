import React from 'react';

export function AnalyticsSection() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Participation aux Cultes</h3>
          <p className="text-sm text-gray-600">7 derniers dimanches vs mois précédent</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            +15.3%
          </span>
        </div>
      </div>
      <div className="h-64 flex items-end justify-between space-x-2">
        {[85, 92, 88, 95, 89, 98, 94].map((height, index) => (
          <div
            key={index}
            className="w-full bg-indigo-100 rounded-t"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>
  );
}