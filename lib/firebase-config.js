// Import the functions you need from the SDKs you need
import firebase, { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB42rd6fCbMQwJksTvh1d1-5ACd1cOQK0",
  authDomain: "quoted-bd7ce.firebaseapp.com",
  projectId: "quoted-bd7ce",
  storageBucket: "quoted-bd7ce.appspot.com",
  messagingSenderId: "187426136542",
  appId: "1:187426136542:web:86d2c540e0c840ee67fd4f",
  measurementId: "G-3Y2JWBGHRB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export {db, auth, storage}

export default firebase