import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyCt9HVP2pMpF4T6cWDkNLyFmq09L4M0lYE",
    authDomain: "awesomeapp-abedd.firebaseapp.com",
    projectId: "awesomeapp-abedd",
    storageBucket: "awesomeapp-abedd.appspot.com",
    messagingSenderId: "610033959174",
    appId: "1:610033959174:web:4c9e30e6e6b9bb429cde87",
    measurementId: "G-VECTC12BVK"
}

export const firebaseApp = () =>{
    initializeApp(firebaseConfig);
}

