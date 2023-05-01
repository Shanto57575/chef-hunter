// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCTpfRNuNgIulBXL3a2uxXBEoR2UZhCeqs",
    authDomain: "chef-recipe-hunter-ec167.firebaseapp.com",
    projectId: "chef-recipe-hunter-ec167",
    storageBucket: "chef-recipe-hunter-ec167.appspot.com",
    messagingSenderId: "405116401521",
    appId: "1:405116401521:web:ca7fbfa9a6e39a218868d0"
};

const app = initializeApp(firebaseConfig);
export default app;