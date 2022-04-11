import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBNcmKwfHIGVZM2XSpW7E45HZB3-LnSyFk",
  authDomain: "app-barrios.firebaseapp.com",
  projectId: "app-barrios",
  storageBucket: "app-barrios.appspot.com",
  messagingSenderId: "1003858887439",
  appId: "1:1003858887439:web:9b79b932ffd3f4d923747a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = ()=>{
    return app
}