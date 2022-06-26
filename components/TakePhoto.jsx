import React, { useRef } from "react";
import styles from "./TakePhoto.module.css";
import { MdClose } from "react-icons/md";
import { BsFillCameraFill, BsCheck2 } from "react-icons/bs";
import Webcam from "react-webcam";
import uploadFileFromWebCam from "../utils/uploadFileFromWebCam";
import { connect } from "react-redux";
import getCurrentUserData from "../utils/getUser";
function TakePhoto({ setWebCam, user, setUser }) {
  const [uploading, setUploading] = React.useState(false);

  const [image, setImage] = React.useState(null);

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };

  const refreshUser = () => {
    getCurrentUserData(user.uid)
      .then((u) => {
        console.log(u);
        setUser(u);
      })
      .catch((e) => {
        console.log(`Error in refershing the user`, e);
      });
  };

  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  }, [webcamRef]);

  console.log(image);
  //   const stopCamera = () => {
  //     if (videoRef.current.srcObject) {
  //       videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
  //     }
  //   };

  const handleUpload = () => {
    uploadFileFromWebCam(user.uid, setUploading, refreshUser, image, setWebCam)
      .then((r) => {
        console.log(r);
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className={styles.take_photo_overlay}>
      <div className={styles.take_photo_container}>
        <div className={styles.take_photo_header}>
          <div className={"flex items-center gap-3 text-white"}>
            <button
              className="px-2 py-3"
              onClick={() => {
                setWebCam(false);
              }}
            >
              <MdClose />
            </button>
            <p>Take photo</p>
          </div>
        </div>
        {uploading && (
          <div className={styles.file_progress}>
            <div className={styles.file_progress_bar}></div>
          </div>
        )}
        <div className={styles.photo__main__stream}>
          {!image ? (
            <Webcam
              audio={false}
              height={720}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={1280}
              videoConstraints={videoConstraints}
            />
          ) : (
            <img src={image} className="w-full" />
          )}
        </div>
        <div
          className={`${styles.take_photo_footer} py-8 px-8 bg-gray-100 relative`}
        >
          {!image ? (
            <button
              className={`${styles.image_capture_button} py-6 px-6 bg-gray-500 rounded-full text-white absolute shadow-lg`}
              onClick={capture}
            >
              <BsFillCameraFill />
            </button>
          ) : (
            <button
              className={`${styles.image_capture_button} py-6 px-6 bg-gray-500 rounded-full text-white absolute shadow-lg`}
              onClick={handleUpload}
            >
              <BsCheck2 />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch({ type: "SET_USER", user }),
});

const mapStateToProps = (state) => ({
  user: state.appReducer.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(TakePhoto);
