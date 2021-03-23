import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyA4joK5PIfCYeuUB5GKfEb6q_pcW8fDeYM",
    authDomain: "barter-system-60f4b.firebaseapp.com",
    projectId: "barter-system-60f4b",
    storageBucket: "barter-system-60f4b.appspot.com",
    messagingSenderId: "718307398773",
    appId: "1:718307398773:web:f4930118df23d9af60d43c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firrestore();