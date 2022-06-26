import { firebase } from "../firebase";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const getCurrentUserData = async (uid) => {
  console.log(uid);
  const database = getFirestore();
  const docRef = doc(database, "users", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null;
  }
};

export default getCurrentUserData;
