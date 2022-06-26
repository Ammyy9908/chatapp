import React from "react";
import styles from "./UserChat.module.css";
function UserChat({ active, unread_messages_count, user }) {
  return (
    <div
      className={`${styles.chat} hover:bg-black cursor-pointer ${
        active && styles.active_chat
      }`}
    >
      <div className={styles.user_story}>
        <img src="/u1.png" alt="user-story" />
      </div>
      <div className={styles.message_content}>
        <div className={styles.chat_name_timestamp}>
          <span>{user}</span>
          <p>17:33</p>
        </div>
        <div className={`message_plus_count flex gap-3 mt-2`}>
          <p className={styles.chat_message}>
            Makes to a illustrated on all and...
          </p>
          {unread_messages_count > 0 && (
            <span className={styles.message_count}>
              {unread_messages_count}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserChat;
