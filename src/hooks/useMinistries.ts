import { useEffect } from 'react';
import { useStore } from '@/store/useStore';

export function useMinistries() {
  const store = useStore();

  useEffect(() => {
    store.loadMinistries();
  }, []);

  return {
    ministries: store.ministries,
    addMinistry: store.addMinistry,
    updateMinistry: store.updateMinistry,
    deleteMinistry: store.deleteMinistry,
  };
}