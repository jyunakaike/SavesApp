import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MEASUREMENTID
    
    
    // apiKey: "AIzaSyC0RLMKKBDB5n1A6x1aMKd5Aaph5JBpCjg",
    // authDomain: "saves-9b0ae.firebaseapp.com",
    // projectId: "saves-9b0ae",
    // storageBucket: "saves-9b0ae.appspot.com",
    // messagingSenderId: "455756301952",
    // appId: "1:455756301952:web:b60b603553ddd831d34865",
    // measurementId: "G-NY7P3YBSJX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

