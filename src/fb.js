import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBSnY8arEFzqqYeTUZ33qDo3z8acADRq44",
  authDomain: "cuapp17feb24.firebaseapp.com",
  databaseURL: "https://cuapp17feb24-default-rtdb.firebaseio.com",
  projectId: "cuapp17feb24",
  storageBucket: "cuapp17feb24.appspot.com",
  messagingSenderId: "932374919173",
  appId: "1:932374919173:web:877aa2225914f86320846c"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export default db;



