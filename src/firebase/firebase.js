import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyByKLGpoi0Xbu18wNYhPNCoeC6BaqSb5EQ",
  authDomain: "events-app-c1ba0.firebaseapp.com",
  databaseURL: "https://events-app-c1ba0.firebaseio.com",
  projectId: "events-app-c1ba0",
  storageBucket: "events-app-c1ba0.appspot.com",
  messagingSenderId: "663582502588",
};

firebase.initializeApp(config);

const database = firebase.database();
const storage = firebase.storage();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, storage, googleAuthProvider, database as default };
