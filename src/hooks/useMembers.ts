import { useEffect } from 'react';
import { useStore } from '@/store/useStore';

export function useMembers() {
  const store = useStore();

  useEffect(() => {
    store.loadMembers();
  }, []);

  return {
    members: store.members,
    addMember: store.addMember,
    updateMember: store.updateMember,
    deleteMember: store.deleteMember,
  };
}