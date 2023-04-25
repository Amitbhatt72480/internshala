import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCAlEYBP-zgqSq65Ur1dwz75hqeEN09CWY",
  authDomain: "internshala-project-2b14a.firebaseapp.com",
  projectId: "internshala-project-2b14a",
  storageBucket: "internshala-project-2b14a.appspot.com",
  messagingSenderId: "42423735937",
  appId: "1:42423735937:web:0691fead16382e71061f80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;