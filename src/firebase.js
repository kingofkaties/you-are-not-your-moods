// firebase.js
import firebase from 'firebase/app';
import 'firebase/database';

// Initialize Firebase
// USE YOUR CONFIG OBJECT
const config = {
    apiKey: "AIzaSyAlpwL8OhJxvIUpid8Ld0ew47rYRVQH_8w",
    authDomain: "you-are-not-your-moods.firebaseapp.com",
    databaseURL: "https://you-are-not-your-moods.firebaseio.com",
    projectId: "you-are-not-your-moods",
    storageBucket: "you-are-not-your-moods.appspot.com",
    messagingSenderId: "1098971436734",
    appId: "1:1098971436734:web:ae1675734cd6aa63a970ef"
};
firebase.initializeApp(config);

// this exports the CONFIGURED version of firebase
export default firebase;