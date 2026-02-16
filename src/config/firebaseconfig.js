// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCx6sYMkWlceS6eK058UfETSdC_jWHRrCg",
  authDomain: "cryptomarket-4a0a4.firebaseapp.com",
  projectId: "cryptomarket-4a0a4",
  storageBucket: "cryptomarket-4a0a4.firebasestorage.app",
  messagingSenderId: "91127297385",
  appId: "1:91127297385:web:a8358dd7ddfc7d913079f8",
  measurementId: "G-4GPP2L6LRM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let auth = getAuth(app)
let googleProvider = new GoogleAuthProvider()

export { auth, googleProvider }