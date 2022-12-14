import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

console.log("INITIALIZE APP");

const firebaseApp = initializeApp(clientCredentials);

const firestoreDb = getFirestore(firebaseApp);

export { firebaseApp, firestoreDb };

export const initFirebase = () => {
  return firebaseApp;
};
