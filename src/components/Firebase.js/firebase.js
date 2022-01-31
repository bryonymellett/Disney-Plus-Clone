import firebase from 'firebase'; //npm install firebase



const firebaseConfig = {
  apiKey: "AIzaSyD6tDIKTdI3Bv7FmPG4pRBRYmdhkEWfAOs",
  authDomain: "disney-clone-6baf1.firebaseapp.com",
  projectId: "disney-clone-6baf1",
  storageBucket: "disney-clone-6baf1.appspot.com",
  messagingSenderId: "139576806213",
  appId: "1:139576806213:web:d67be5e0703ef121498c2c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage }; //export as object
export default db; //export default as global object

