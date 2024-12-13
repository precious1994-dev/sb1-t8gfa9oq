import { useEffect } from 'react';
import { useStore } from '@/store/useStore';

export function useSermons() {
  const store = useStore();

  useEffect(() => {
    store.loadSermons();
  }, []);

  return {
    sermons: store.sermons,
    addSermon: store.addSermon,
    updateSermon: store.updateSermon,
    deleteSermon: store.deleteSermon,
  };
}