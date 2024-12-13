import React from 'react';

interface AnalyticsChartProps {
  data: number[];
}

export function AnalyticsChart({ data }: AnalyticsChartProps) {
  return (
    <div className="h-64 flex items-end justify-between space-x-2">
      {data.map((height, index) => (
        <div
          key={index}
          className="w-full bg-indigo-100 rounded-t"
          style={{ height: `${height}%` }}
        />
      ))}
    </div>
  );
}