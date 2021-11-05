// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyA67XTrhWLjm4TopVWVyT6uJlYqW2jJX00",
    authDomain: "linkedin-f2283.firebaseapp.com",
    projectId: "linkedin-f2283",
    storageBucket: "linkedin-f2283.appspot.com",
    messagingSenderId: "347928597957",
    appId: "1:347928597957:web:0396664e063e6b54f827ac",
    measurementId: "G-DBTZX441N4"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  export const db=firebaseApp.firestore();
  export const auth=firebase.auth();
