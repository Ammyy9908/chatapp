import { firebase } from "../firebase";
import { doc, getFirestore, setDoc } from "firebase/firestore";

const db = getFirestore();
const updateAvatar = async (uid, avatar) => {
  const userRef = doc(db, "users", uid);
  try {
    await setDoc(userRef, avatar, { merge: true });
    return true;
  } catch {
    return false;
  }
};

export default updateAvatar;
