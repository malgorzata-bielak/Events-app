import { firebase, googleAuthProvider } from "../firebase/firebase";

export const loginRequest = uid => ({
  type: "LOGIN_REQUESTED",
  uid,
});

export const startLogin = () => () => firebase.auth().signInWithPopup(googleAuthProvider);

export const logoutRequest = () => ({
  type: "LOGOUT_REQUESTED",
});

export const startLogout = () => () => firebase.auth().signOut();
