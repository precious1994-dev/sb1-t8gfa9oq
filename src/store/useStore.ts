import { create } from 'zustand';
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDocs,
  query,
  orderBy,
  where
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '@/lib/firebase';

interface Member {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'active' | 'inactive';
  joinDate: string;
}

interface Sermon {
  id: string;
  title: string;
  speaker: string;
  date: string;
  duration: string;
  audioUrl: string;
}

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
}

interface Ministry {
  id: string;
  title: string;
  description: string;
  category: string;
  leaders: string[];
}

interface Store {
  // Members
  members: Member[];
  loadMembers: () => Promise<void>;
  addMember: (member: Omit<Member, 'id'>) => Promise<void>;
  updateMember: (id: string, data: Partial<Member>) => Promise<void>;
  deleteMember: (id: string) => Promise<void>;

  // Sermons
  sermons: Sermon[];
  loadSermons: () => Promise<void>;
  addSermon: (sermon: Omit<Sermon, 'id' | 'audioUrl'>, audioFile: File) => Promise<void>;
  updateSermon: (id: string, data: Partial<Sermon>, audioFile?: File) => Promise<void>;
  deleteSermon: (id: string) => Promise<void>;

  // Events
  events: Event[];
  loadEvents: () => Promise<void>;
  addEvent: (event: Omit<Event, 'id'>) => Promise<void>;
  updateEvent: (id: string, data: Partial<Event>) => Promise<void>;
  deleteEvent: (id: string) => Promise<void>;

  // Ministries
  ministries: Ministry[];
  loadMinistries: () => Promise<void>;
  addMinistry: (ministry: Omit<Ministry, 'id'>) => Promise<void>;
  updateMinistry: (id: string, data: Partial<Ministry>) => Promise<void>;
  deleteMinistry: (id: string) => Promise<void>;
}

export const useStore = create<Store>((set, get) => ({
  // Members
  members: [],
  loadMembers: async () => {
    const querySnapshot = await getDocs(query(collection(db, 'members'), orderBy('name')));
    const members = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Member[];
    set({ members });
  },
  addMember: async (member) => {
    const docRef = await addDoc(collection(db, 'members'), member);
    const newMember = { ...member, id: docRef.id };
    set(state => ({ members: [...state.members, newMember] }));
  },
  updateMember: async (id, data) => {
    await updateDoc(doc(db, 'members', id), data);
    set(state => ({
      members: state.members.map(member =>
        member.id === id ? { ...member, ...data } : member
      )
    }));
  },
  deleteMember: async (id) => {
    await deleteDoc(doc(db, 'members', id));
    set(state => ({
      members: state.members.filter(member => member.id !== id)
    }));
  },

  // Sermons
  sermons: [],
  loadSermons: async () => {
    const querySnapshot = await getDocs(query(collection(db, 'sermons'), orderBy('date', 'desc')));
    const sermons = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Sermon[];
    set({ sermons });
  },
  addSermon: async (sermon, audioFile) => {
    // Upload audio file
    const storageRef = ref(storage, `sermons/${Date.now()}_${audioFile.name}`);
    await uploadBytes(storageRef, audioFile);
    const audioUrl = await getDownloadURL(storageRef);

    const docRef = await addDoc(collection(db, 'sermons'), { ...sermon, audioUrl });
    const newSermon = { ...sermon, id: docRef.id, audioUrl };
    set(state => ({ sermons: [...state.sermons, newSermon] }));
  },
  updateSermon: async (id, data, audioFile) => {
    let audioUrl = data.audioUrl;
    if (audioFile) {
      const storageRef = ref(storage, `sermons/${Date.now()}_${audioFile.name}`);
      await uploadBytes(storageRef, audioFile);
      audioUrl = await getDownloadURL(storageRef);
    }

    const updateData = audioFile ? { ...data, audioUrl } : data;
    await updateDoc(doc(db, 'sermons', id), updateData);
    set(state => ({
      sermons: state.sermons.map(sermon =>
        sermon.id === id ? { ...sermon, ...updateData } : sermon
      )
    }));
  },
  deleteSermon: async (id) => {
    await deleteDoc(doc(db, 'sermons', id));
    set(state => ({
      sermons: state.sermons.filter(sermon => sermon.id !== id)
    }));
  },

  // Events
  events: [],
  loadEvents: async () => {
    const querySnapshot = await getDocs(query(collection(db, 'events'), orderBy('date')));
    const events = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Event[];
    set({ events });
  },
  addEvent: async (event) => {
    const docRef = await addDoc(collection(db, 'events'), event);
    const newEvent = { ...event, id: docRef.id };
    set(state => ({ events: [...state.events, newEvent] }));
  },
  updateEvent: async (id, data) => {
    await updateDoc(doc(db, 'events', id), data);
    set(state => ({
      events: state.events.map(event =>
        event.id === id ? { ...event, ...data } : event
      )
    }));
  },
  deleteEvent: async (id) => {
    await deleteDoc(doc(db, 'events', id));
    set(state => ({
      events: state.events.filter(event => event.id !== id)
    }));
  },

  // Ministries
  ministries: [],
  loadMinistries: async () => {
    const querySnapshot = await getDocs(query(collection(db, 'ministries'), orderBy('title')));
    const ministries = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Ministry[];
    set({ ministries });
  },
  addMinistry: async (ministry) => {
    const docRef = await addDoc(collection(db, 'ministries'), ministry);
    const newMinistry = { ...ministry, id: docRef.id };
    set(state => ({ ministries: [...state.ministries, newMinistry] }));
  },
  updateMinistry: async (id, data) => {
    await updateDoc(doc(db, 'ministries', id), data);
    set(state => ({
      ministries: state.ministries.map(ministry =>
        ministry.id === id ? { ...ministry, ...data } : ministry
      )
    }));
  },
  deleteMinistry: async (id) => {
    await deleteDoc(doc(db, 'ministries', id));
    set(state => ({
      ministries: state.ministries.filter(ministry => ministry.id !== id)
    }));
  },
}));