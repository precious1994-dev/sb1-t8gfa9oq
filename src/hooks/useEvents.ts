import { useEffect } from 'react';
import { useStore } from '@/store/useStore';

export function useEvents() {
  const store = useStore();

  useEffect(() => {
    store.loadEvents();
  }, []);

  return {
    events: store.events,
    addEvent: store.addEvent,
    updateEvent: store.updateEvent,
    deleteEvent: store.deleteEvent,
  };
}