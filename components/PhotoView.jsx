import React from "react";
import { MdClose } from "react-icons/md";
import { connect } from "react-redux";
import DeafultUser from "./Icons/DeafultUser";
import styles from "./PhotoView.module.css";
function PhotoView({ user, setPhotoView }) {
  const handleClose = (e) => {
    const targetClass = e.target.classList;
    console.log(targetClass);
    if (targetClass.contains("photo-view-close-area")) {
      setPhotoView(false);
    }
  };
  return (
    <div
      className={`${styles.photo_view_overlay} backdrop-blur-md photo-view-close-area`}
      onClick={handleClose}
    >
      <div
        className={`${styles.profile__photo_view__main} photo-view-close-area`}
      >
        <div className={styles.photo_view_header}>
          <div
            className={`${styles.photo_view_user_info} flex items-center gap-6`}
          >
            <div className="photo_view_user__avatar w-12 h-12 rounded-full">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt="user__header__avatar"
                  className="w-full h-full object-cover"
                  style={{
                    borderRadius: "inherit",
                  }}
                />
              ) : (
                <DeafultUser />
              )}
            </div>
            <p className="text-md">{user.email}</p>
          </div>

          <button
            className="photo_view_close_btn w-12 h-12 bg-gray-500 text-white flex items-center justify-center rounded-full focus:ring"
            onClick={() => {
              setPhotoView(false);
            }}
          >
            <MdClose />
          </button>
        </div>
        <div className={styles.photo_view_image_wrapper}>
          {user.avatar ? (
            <img src={user.avatar} alt="user__avatar" />
          ) : (
            <DeafultUser />
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.appReducer.user,
});

const mapDispatchToProps = (dispatch) => ({
  setPhotoView: (photo_view) =>
    dispatch({ type: "SET_PHOTO_VIEW", photo_view }),
});
export default connect(mapStateToProps, mapDispatchToProps)(PhotoView);
