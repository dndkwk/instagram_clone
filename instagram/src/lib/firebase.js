import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//한번만 실행시킨다.
//import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyDzBo2pecI3TkDjQvLE7Oug7bPgujZDPmI",
  authDomain: "instagram-clone-2dc8c.firebaseapp.com",
  projectId: "instagram-clone-2dc8c",
  storageBucket: "instagram-clone-2dc8c.appspot.com",
  messagingSenderId: "476089705893",
  appId: "1:476089705893:web:c4df4ff8e5c0d4cf80b44c",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

//seedDatabase(firebase);

export { firebase, FieldValue };
