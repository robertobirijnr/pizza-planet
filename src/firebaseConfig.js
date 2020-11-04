import firebase from 'firebase'


 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCw68PMLlGOIAtTp4WhNPd1UDDEr9nJ4TM",
    authDomain: "pizza-planet-f1259.firebaseapp.com",
    databaseURL: "https://pizza-planet-f1259.firebaseio.com",
    projectId: "pizza-planet-f1259",
    storageBucket: "pizza-planet-f1259.appspot.com",
    messagingSenderId: "37394463122",
    appId: "1:37394463122:web:bc62f07e5d9e616205a94b"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.database()
  export const dbMenuRef = db.ref('menu')