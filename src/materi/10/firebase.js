import Firebase from 'firebase';
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAgTk7hS6LJDKGWK08T85ebbKM3ckOXm48",
  authDomain: "coba2-d7462.firebaseapp.com",
  databaseURL: "https://coba2-d7462.firebaseio.com",
  projectId: "coba2-d7462",
  storageBucket: "coba2-d7462.appspot.com",
  messagingSenderId: "822412515173",
  appId: "1:822412515173:web:30cb867d21939ade0db38c"
};

Firebase.initializeApp(firebaseConfig);

export default Firebase;
