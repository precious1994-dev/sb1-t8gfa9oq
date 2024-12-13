import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { useAuth } from '@/hooks/useAuth';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/login');
    } catch (error) {
      console.error('Erreur de déconnexion:', error);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar onSignOut={handleSignOut} />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}