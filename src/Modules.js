import Style from "./Css/Style.module.css";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_pzXzNRkIzVbaKFSdO02Z5uUGJ7jXdcA",
  authDomain: "pulu-app-48dfe.firebaseapp.com",
  projectId: "pulu-app-48dfe",
  storageBucket: "pulu-app-48dfe.appspot.com",
  messagingSenderId: "622496239915",
  appId: "1:622496239915:web:1edc82a8121c06040e756e",
  measurementId: "G-JR7GGZMD36",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { Style, auth };
