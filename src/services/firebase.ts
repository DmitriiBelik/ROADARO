import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOlSH1w1s6BgwNfC03wQGhbaSZO2Zrr_c",
  authDomain: "roadaro-752c1.firebaseapp.com",
  projectId: "roadaro-752c1",
  storageBucket: "roadaro-752c1.appspot.com",
  messagingSenderId: "111269175420",
  appId: "1:111269175420:web:f8617aeb1843ab32f3e9f9",
  databaseURL: "https://roadaro-752c1-default-rtdb.europe-west1.firebasedatabase.app/"
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp)
export default firebaseApp; 