import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAHvPRRuPDqqzpqZW3aNph01DWeB_uGPF8",
    authDomain: "volunteer-network-ab5fd.firebaseapp.com",
    projectId: "volunteer-network-ab5fd",
    storageBucket: "volunteer-network-ab5fd.appspot.com",
    messagingSenderId: "278304832886",
    appId: "1:278304832886:web:527b0fd896119353ad4e57"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;