import { getAuth, signOut } from "firebase/auth";
import { firebase } from "../firebase";
const auth = getAuth();
const logout = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export default logout;
