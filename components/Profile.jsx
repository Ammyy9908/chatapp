import React from "react";
import styles from "./Profile.module.css";
import { AiFillCamera } from "react-icons/ai";
import bytesToSize from "../utils/getFileSize";
import uploadFile from "../utils/uploadFile";
import useUser from "../hooks/useUser";
import { connect } from "react-redux";
import getCurrentUserData from "../utils/getUser";
import DeafultUser from "./Icons/DeafultUser";
import updateAvatar from "../utils/updateUserAvatar";
function Profile({ setProfile, profile, setWebCam, user, setUser }) {
  console.log(user, "user");
  const uid = user && user.uid;
  console.log(uid);
  const [avatar_option, setAvatarOption] = React.useState(false);
  const [uploading, setUploading] = React.useState(false);

  const refreshUser = () => {
    getCurrentUserData(uid)
      .then((u) => {
        console.log(u);
        setUser(u);
      })
      .catch((e) => {
        console.log(`Error in refershing the user`, e);
      });
  };

  // handle avatar upload
  const handleAvatarUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const { name, size, type } = file;
    console.log(name, size, type);
    if (file) {
      console.log(bytesToSize(size));
      if (bytesToSize(size) > 1) {
        alert("File size is too big");
        return;
      }
      // now we can upload the image
      uploadFile(
        uid,
        name,
        "avatars",

        setUploading,
        file,
        refreshUser
      ).then((done) => {
        if (done) {
          console.log("upload success");
        }
      });
    }
  };

  const handleDelete = () => {
    updateAvatar(uid, { avatar: null })
      .then((done) => {
        if (done) {
          refreshUser();
        } else {
          alert("Error in deleting the avatar");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div
      className={`${styles.profile_sidebar} ${
        profile && styles.profile_enable
      }`}
    >
      <div className={styles.profile_sidebar_header}>
        <button onClick={() => setProfile(false)}>
          <img src="/svg/arrow_left.svg" alt="arrow_left" />
        </button>
        <p className="text-white text-sm">Profile</p>
      </div>
      <div className="divider"></div>
      {profile && (
        <div className={styles.animatable}>
          <div className={styles.user_section}>
            <div className={styles.user__avatar}>
              {user.avatar ? <img src={user.avatar} alt="" /> : <DeafultUser />}
              <div
                className={styles.profile__avatar_overlay}
                onClick={() => setAvatarOption(!avatar_option)}
                tabIndex="0"
                onBlur={() => setAvatarOption(false)}
              >
                <div className={styles.profile_avatar_overlay_content}>
                  <div className="camera_icon">
                    <AiFillCamera />
                  </div>
                  <span className="text-sm">CHANGE PROFILE PHOTO</span>
                </div>
                <ul
                  className={`${styles.profile__avatar__options} ${
                    avatar_option && styles.profile__avatar__options_enabled
                  }`}
                >
                  <li>
                    <button>View photo</button>
                  </li>
                  <li>
                    <button onClick={() => setWebCam(true)}>Take photo</button>
                  </li>
                  <li>
                    <button>
                      <label htmlFor="avatar">
                        <input
                          type="file"
                          name="avatar"
                          id="avatar"
                          onChange={handleAvatarUpload}
                          accept="image/*"
                        />
                        <span>Upload photo</span>
                      </label>
                    </button>
                  </li>
                  <li>
                    <button onClick={handleDelete}>Remove photo</button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="user_name_plus_phone">
              <p className="font-bold text-white">{profile.displayName}</p>
              <p className="text-sm text-gray-400">{profile.email}</p>
            </div>
          </div>
          <div className="divider"></div>
          <div className={styles.info_section}>
            <div className={styles.info_wrapper}>
              <p className="text-sm text-gray-400 mb-1">Info</p>
              <div className={styles.info_edit}>
                <p className="text-white">Dreaming 😊</p>
                <button>
                  <img src="/svg/pencil.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className={styles.info_section}>
            <div className={styles.info_wrapper}>
              <p className="text-sm text-gray-400 mb-1">Name</p>
              <div className={styles.info_edit}>
                <p className="text-white">Sarah Joy</p>
                <button>
                  <img src="/svg/pencil.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="divider"></div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.appReducer.user,
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch({ type: "SET_USER", user }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
