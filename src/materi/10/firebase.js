import Firebase from 'firebase';
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

Firebase.initializeApp(firebaseConfig);

export default Firebase;
