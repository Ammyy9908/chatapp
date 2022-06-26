import React from "react";
import styles from "./Chat.module.css";
function Chat({ ingoing, message }) {
  return (
    <div className={`${styles.chat} ${ingoing && styles.chat_ingoing}`}>
      <div className={styles.chat_bubble}>
        <div
          className={`${styles.chat_text} ${
            ingoing && styles.ingoing_chat_text
          }`}
        >
          {ingoing && (
            <img
              src="/svg/chat_left.svg"
              alt="chat_polygon"
              className={`${styles.chat_plygon_left}`}
            />
          )}
          {!ingoing && (
            <img
              src="/svg/chat_right.svg"
              alt="chat_polygon"
              className={`${styles.chat_plygon_right}`}
            />
          )}
          <p>{message}</p>
        </div>
      </div>
      <div className="chat_time">
        <p className="text-white text-sm">17:45</p>
      </div>
    </div>
  );
}

export default Chat;
