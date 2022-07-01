import React from "react";
import { connect } from "react-redux";
import styles from "./ThemePopUp.module.css";
function ThemePopUp({ setThemeView }) {
  return (
    <div className={styles.theme_pop_up}>
      <div className={styles.theme_modal}>
        <div className="theme_modal_body">
          <h3 className="text-2xl">Choose Theme</h3>
          <div className="theme_options mt-2">
            <label htmlFor="light" className="flex items-center gap-3">
              <input type="radio" name="theme" id="light" value="light" />
              <span>Light</span>
            </label>
            <label htmlFor="dark" className="flex items-center gap-3">
              <input type="radio" name="theme" id="dark" value="dark" />
              <span>Dark</span>
            </label>
            <label htmlFor="default" className="flex items-center gap-3">
              <input type="radio" name="theme" id="default" value="default" />
              <span>System default</span>
            </label>
          </div>
        </div>
        <div className={styles.theme_modal_footer}>
          <div className="theme_modal_actions w-full flex items-start justify-end gap-2">
            <button
              className="btn bg-black text-white py-2 px-6 rounded"
              onClick={() => {
                setThemeView(false);
              }}
            >
              Cancel
            </button>
            <button className="btn bg-indigo-600 text-white py-2 px-6 rounded">
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setThemeView: (theme_view) =>
    dispatch({
      type: "SET_THEME_VIEW",
      theme_view,
    }),
});

export default connect(null, mapDispatchToProps)(ThemePopUp);
