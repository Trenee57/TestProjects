// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDInACs9m0ePyLHhH3mLqIyAaaIZThrT0Y",
  authDomain: "dis-vid-streamer.firebaseapp.com",
  projectId: "dis-vid-streamer",
  storageBucket: "dis-vid-streamer.appspot.com",
  messagingSenderId: "93436644285",
  appId: "1:93436644285:web:5d611144d7d383e82ee0d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider =  new GoogleAuthProvider();
const storage = getStorage(app);

export {auth, provider, storage};

export default db;