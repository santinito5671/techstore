import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Las credenciales se leen de variables de entorno (archivo .env, no se sube al repo)
const firebaseConfig = {
  apiKey: "AIzaSyCEMVuP1i-Sh4mbSi5CLIc4nnFMnI2-OH8",
  authDomain: "techstore-3bc71.firebaseapp.com",
  projectId: "techstore-3bc71",
  storageBucket: "techstore-3bc71.firebasestorage.app",
  messagingSenderId: "842115800067",
  appId: "1:842115800067:web:4ebae122bf3cccab180236",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;