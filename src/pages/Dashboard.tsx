import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { dashboardRoutes } from '@/routes/dashboard.routes';

export function Dashboard() {
  return (
    <DashboardLayout>
      <Routes>
        {dashboardRoutes.map(({ path, component: Component }) => (
          <Route 
            key={path} 
            path={path} 
            element={<Component />} 
          />
        ))}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </DashboardLayout>
  );
}