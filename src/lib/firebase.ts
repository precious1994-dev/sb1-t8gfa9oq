import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDsLWGug-DfHdwpZOeGLZJZI1D9oiVGpr4",
  authDomain: "elmsite.firebaseapp.com",
  projectId: "elmsite",
  storageBucket: "elmsite.firebasestorage.app",
  messagingSenderId: "43607000",
  appId: "1:43607000:web:5fdf505c802e8ae012c8ad",
  measurementId: "G-0S8HDW7CJ9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);