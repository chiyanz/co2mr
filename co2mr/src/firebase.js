import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCf8oHrxIdszGzHWGUDv-LBxsp1hVoNldg",
  authDomain: "co2mr-1bef5.firebaseapp.com",
  databaseURL: "https://co2mr-1bef5-default-rtdb.firebaseio.com",
  projectId: "co2mr-1bef5",
  storageBucket: "co2mr-1bef5.appspot.com",
  messagingSenderId: "871492180957",
  appId: "1:871492180957:web:bfd551bd8ed93361ff3434",
  measurementId: "G-GCVWTFB38R"
};

const app = initializeApp(firebaseConfig);
export default getFirestore();