import React from "react";
import styles from "./Story.module.css";
function Story({ active }) {
  return (
    <button
      className={`${styles.story} ${active && styles.active_story} story`}
    >
      <img src="/u1.png" alt="add" />
    </button>
  );
}

export default Story;
