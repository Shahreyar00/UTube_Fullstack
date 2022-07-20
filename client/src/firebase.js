import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAQjgs3QLHT43HlU18Jw2cPGINjdwVuHM",
  authDomain: "utube-13e47.firebaseapp.com",
  projectId: "utube-13e47",
  storageBucket: "utube-13e47.appspot.com",
  messagingSenderId: "22030476922",
  appId: "1:22030476922:web:3960c173ca63ccc589bdc3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;