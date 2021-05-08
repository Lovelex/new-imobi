import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/functions'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBwoZrtw0Y0-XM-kocZDJflbS3U6FOkzzs",
  authDomain: "fire-imobi.firebaseapp.com",
  projectId: "fire-imobi",
  storageBucket: "fire-imobi.appspot.com",
  messagingSenderId: "530487544037",
  appId: "1:530487544037:web:a76d2918be026e85d22c0c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const authClass = firebase.auth

const db = firebaseApp.firestore() 
const auth = firebaseApp.auth() 
const functions = firebaseApp.functions() 
const storage = firebaseApp.storage() 

export { db, auth, authClass, functions, storage }