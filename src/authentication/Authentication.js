// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCdn7HsjfJsEjHQPuAsDTtpDVUJADFPqpE",
    authDomain: "cortex-website-f9ef4.firebaseapp.com",
    projectId: "cortex-website-f9ef4",
    storageBucket: "cortex-website-f9ef4.appspot.com",
    messagingSenderId: "383899416569",
    appId: "1:383899416569:web:403cbddc44a21f1db8af28",
    measurementId: "G-MDS9Q2D86T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db }; 