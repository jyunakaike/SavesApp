import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    // // apiKey: "AIzaSyC0RLMKKBDB5n1A6x1aMKd5Aaph5JBpCjg",
    // apiKey: process.env.APIKEY,
    // // authDomain: "saves-9b0ae.firebaseapp.com",
    // authDomain: process.env.AUTHDOMAIN,
    // // projectId: "saves-9b0ae",
    // projectId: process.env.PROJECTID,
    // // storageBucket: "saves-9b0ae.appspot.com",
    // storageBucket: process.env.STORAGEBUCKET,
    // // messagingSenderId: "455756301952",
    // messagingSenderId: process.env.MESSAGINGSENDERID,
    // // appId: "1:455756301952:web:b60b603553ddd831d34865",
    // appId: process.env.APPID,
    // // measurementId: "G-NY7P3YBSJX"
    // measurementId: process.env.MESSAGINGSENDERID
    apiKey: "AIzaSyC0RLMKKBDB5n1A6x1aMKd5Aaph5JBpCjg",
    authDomain: "saves-9b0ae.firebaseapp.com",
    projectId: "saves-9b0ae",
    storageBucket: "saves-9b0ae.appspot.com",
    messagingSenderId: "455756301952",
    appId: "1:455756301952:web:b60b603553ddd831d34865",
    measurementId: "G-NY7P3YBSJX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

