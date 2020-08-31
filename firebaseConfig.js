import * as firebase from "firebase"



var firebaseConfig = {
  apiKey: "AIzaSyBS7HibO8jA-VYXZ9z4jps9COLdpFSgpRc",
  authDomain: "day4firebase-b15ee.firebaseapp.com",
  databaseURL: "https://day4firebase-b15ee.firebaseio.com",
  projectId: "day4firebase-b15ee",
  storageBucket: "day4firebase-b15ee.appspot.com",
  messagingSenderId: "906335909534",
  appId: "1:906335909534:web:04adfebdd72fd547b4ed8f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export default db;