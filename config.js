import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyD0QUqop6xVySPayOqCNiqKrj-BYlyuX18",
    authDomain: "wily-app-cc5de.firebaseapp.com",
  // databaseURL:"https://www.gstatic.com/firebasejs/8.9.1/firebase-app.js",
    projectId: "wily-app-cc5de",
    storageBucket: "wily-app-cc5de.appspot.com",
    messagingSenderId: "860148914651",
    appId: "1:860148914651:web:c5444dface1e464e762ffe"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()