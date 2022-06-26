import { firebase } from "../firebase";
const storage = getStorage();

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import updateAvatar from "./updateUserAvatar";

export default async function uploadFile(
  uid,
  filename,
  folder_name,
  setUploading,
  file,
  refreshUser
) {
  const storageRef = ref(storage, `${folder_name}/${uid}/${filename}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  setUploading(true);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (error) => {
      // Handle unsuccessful uploads
    },
    () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);
        let url = downloadURL;
        setUploading(false);
        updateAvatar(uid, { avatar: url }).then((done) => {
          if (done) {
            console.log("Profile Photo Changed");
            refreshUser();
          }
        });
      });
    }
  );
}
