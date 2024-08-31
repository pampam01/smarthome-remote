// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase, ref, get, set, onValue } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getDatabase(app);

// Function to get data from Firebase
export const getFirebaseData = async (path: string) => {
  const dbRef = ref(db, path);
  const snapshot = await get(dbRef);
  return snapshot.exists() ? snapshot.val() : null;
};

// Function to set data in Firebase
export const setFirebaseData = async (path: string, value: any) => {
  const dbRef = ref(db, path);
  await set(dbRef, value);
};

export const listenToFirebaseData = (
  path: string,
  callback: (data: any) => void
) => {
  // const db = getDatabase();
  const dataRef = ref(db, path);

  const unsubscribe = onValue(dataRef, (snapshot) => {
    const data = snapshot.val();
    callback(data);
  });

  // Return the unsubscribe function to stop listening when the component unmounts
  return unsubscribe;
};

export const getRealtimeFirebaseData = (
  path: string,
  callback: (data: any) => void
) => {
  // const db = getDatabase();
  const dataRef = ref(db, path);
  onValue(dataRef, (snapshot) => {
    const data = snapshot.val();
    callback(data);
  });
};
