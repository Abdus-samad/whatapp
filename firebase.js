import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBEMhNROThE_oT-o459f2a1klCKfT97l0U",
  authDomain: "whatapp-2-cc429.firebaseapp.com",
  projectId: "whatapp-2-cc429",
  storageBucket: "whatapp-2-cc429.appspot.com",
  messagingSenderId: "732379374938",
  appId: "1:732379374938:web:8447ae3b8a2d4613d5bf63"
};
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();


const db = app.firestore()
const auth = app.auth()
const provider = new firebase.auth.GoogleAuthProvider()


export { db, auth, provider}
