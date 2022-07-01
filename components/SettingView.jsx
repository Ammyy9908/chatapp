import React from "react";
import { connect } from "react-redux";
import styles from "./SettingView.module.css";
import { MdPrivacyTip, MdWallpaper, MdOutlineSecurity } from "react-icons/md";
import { IoIosHelpCircle } from "react-icons/io";

import { CgDarkMode } from "react-icons/cg";
function SettingView({ user, setting_view, setSettings, setThemeView }) {
  return (
    <div
      className={`${styles.setting_view} ${
        setting_view && styles.setting_view_enable
      }`}
    >
      <div className={styles.setting_view_header}>
        <div
          className={`${
            setting_view && styles.animatable_left
          } flex items-center w-full gap-3`}
        >
          <button onClick={() => setSettings(false)}>
            <img src="/svg/arrow_left.svg" alt="arrow_left" />
          </button>
          <p className="text-white text-sm">Settings</p>
        </div>
      </div>

      <div className="px-3 py-3 setting_view_body">
        <div className={`${setting_view && styles.animatable_left}`}>
          <div className="setting_view_user w-full flex items-center gap-5">
            <div className="setting_view_user_avatar w-20 h-20 rounded-full">
              <img
                src={user.avatar}
                alt="user__avatar"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="setting_view_user_meta text-white">
              <h3 className="text-xl">{user.name}</h3>
              <p className="text-gray-400 text-sm">Speak Less!Listen More.</p>
            </div>
          </div>
        </div>
        <div className={`${setting_view && styles.animatable_left}`}>
          <ul
            className={`${styles.setting_view_options} mt-10 flex flex-col items-start gap-5`}
          >
            <li className="w-full h-full">
              <button className="w-full flex items-center justify-start hover:bg-gray-300 p-3 rounded-md text-gray-200 gap-3">
                <MdPrivacyTip /> Privacy
              </button>
            </li>
            <li className="w-full h-full">
              <button className="w-full flex items-center justify-start hover:bg-gray-300 p-3 rounded-md text-gray-200 gap-3">
                <MdOutlineSecurity /> Security
              </button>
            </li>
            <li className="w-full h-full">
              <button
                className="w-full flex items-center justify-start hover:bg-gray-300 p-3 rounded-md text-gray-200 gap-3"
                onClick={() => setThemeView(true)}
              >
                <CgDarkMode /> Theme
              </button>
            </li>
            <li className="w-full h-full">
              <button className="w-full flex items-center justify-start hover:bg-gray-300 p-3 rounded-md text-gray-200 gap-3">
                <MdWallpaper /> Chat Wallpaper
              </button>
            </li>
            <li className="w-full h-full">
              <button className="w-full flex items-center justify-start hover:bg-gray-300 p-3 rounded-md text-gray-200 gap-3">
                <IoIosHelpCircle /> Help
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.appReducer.user,
  setting_view: state.appReducer.setting_view,
});

const mapDispatchToProps = (dispatch) => ({
  setSettings: (setting_view) =>
    dispatch({
      type: "SET_SETTING_VIEW",
      setting_view,
    }),
  setThemeView: (theme_view) =>
    dispatch({
      type: "SET_THEME_VIEW",
      theme_view,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingView);
