import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { firebase } from "../firebase";

export const auth = getAuth(firebase);

export const signInWithGoogle = async () => {
  const user = await signInWithPopup(auth, new GoogleAuthProvider());
  return user;
};

export const logOut = () => signOut(auth);
