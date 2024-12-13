import React from 'react';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { StatsGrid } from '@/components/dashboard/StatsGrid';
import { AnalyticsSection } from '@/components/dashboard/AnalyticsSection';
import { RecentEmails } from '@/components/dashboard/RecentEmails';
import { TodoList } from '@/components/dashboard/TodoList';
import { FormationStatus } from '@/components/dashboard/FormationStatus';

export function DashboardOverview() {
  return (
    <div className="p-8">
      <DashboardHeader />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <StatsGrid />
          <AnalyticsSection />
          <RecentEmails />
        </div>
        <div className="space-y-6">
          <FormationStatus />
          <TodoList />
        </div>
      </div>
    </div>
  );
}