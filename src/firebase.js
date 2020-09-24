import firebase from 'firebase';

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDCduSs5kVl82HQAW-v45JVphj-blQPH3U",
    authDomain: "instagram-clone-ed64e.firebaseapp.com",
    databaseURL: "https://instagram-clone-ed64e.firebaseio.com",
    projectId: "instagram-clone-ed64e",
    storageBucket: "instagram-clone-ed64e.appspot.com",
    messagingSenderId: "176172643739",
    appId: "1:176172643739:web:cbb44cff6d2ec7d6ec1d3e",
    measurementId: "G-MPQKZ7MH2G"
});

export default { db, auth, storage }