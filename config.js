import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBkq9FMtmjvS0Nie9MxaXUQfjKrV34IUXg",
    authDomain: "project-67-e1cb8.firebaseapp.com",
    databaseURL: "https://project-67-e1cb8-default-rtdb.firebaseio.com",
    projectId: "project-67-e1cb8",
    storageBucket: "project-67-e1cb8.appspot.com",
    messagingSenderId: "584425085602",
    appId: "1:584425085602:web:02cf33f470fbec7d5ed5fb"

};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase.database();