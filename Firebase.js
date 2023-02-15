import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadString } from "firebase/storage";
import {
  collection,
  addDoc,
  serverTimestamp,
  getFirestore,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMgsJ-B2w_hj_bW28MpduHZ1bYQe0skQg",
  authDomain: "facebookclone-f8bab.firebaseapp.com",
  projectId: "facebookclone-f8bab",
  storageBucket: "facebookclone-f8bab.appspot.com",
  messagingSenderId: "1035561930449",
  appId: "1:1035561930449:web:22433dad1dcf694f8a3ff0",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, app, storage };
