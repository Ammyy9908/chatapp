import { firebase } from "../firebase";
const storage = getStorage();

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadString,
} from "firebase/storage";
import updateAvatar from "./updateUserAvatar";

const generateFileName = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

export default async function uploadFileFromWebCam(
  uid,
  setUploading,
  refreshUser,
  fileString,
  setWebCam
) {
  // console.log(uid, fileString);
  const storageRef = ref(storage, `${"avatars"}/${uid}/${generateFileName()}`);
  setUploading(true);
  uploadString(storageRef, fileString, "data_url").then((snapshot) => {
    console.log("Uploaded a data_url string!");
    getDownloadURL(snapshot.ref).then((downloadURL) => {
      console.log("File available at", downloadURL);
      let url = downloadURL;

      updateAvatar(uid, { avatar: url })
        .then((done) => {
          if (done) {
            refreshUser();
            setUploading(false);
            setWebCam(false);
          } else {
            alert("Error updating profile photo");
          }
        })
        .catch((e) => {
          console.log(e);
        });
    });
  });
}
