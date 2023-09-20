import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPGZZnX7GRWnPk0fjZbBMYsJ93KPNIeHA",
  authDomain: "dragndrop-authentication.firebaseapp.com",
  projectId: "dragndrop-authentication",
  storageBucket: "dragndrop-authentication.appspot.com",
  messagingSenderId: "848528521428",
  appId: "1:848528521428:web:e69f05c664453e53e82341",
  measurementId: "G-2VG3H36WEM",
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);