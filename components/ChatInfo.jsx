import React from "react";
import styles from "./ChatInfo.module.css";
function ChatInfo({ contact, setContact }) {
  return (
    <div className={`${styles.chat_info} ${contact && styles.contact_enable}`}>
      <div className={styles.chat_info_header}>
        <button onClick={() => setContact(false)}>
          <img src="/svg/close.svg" alt="" />
        </button>
        <h5 className="text-white">Contact info</h5>
      </div>
      <div className="divider"></div>
      {contact && (
        <div className={styles.animatable}>
          <div className={styles.user_section}>
            <div className="user__avatar">
              <img src="/chat_image.png" alt="" />
            </div>
            <div className="user_name_plus_phone">
              <p className="font-bold text-white">Lara Mueller</p>
              <p className="text-sm text-gray-400">+49 1522 792358</p>
            </div>
          </div>
          <div className="divider"></div>
          <div className={styles.info_section}>
            <div className={styles.info_wrapper}>
              <p className="text-sm text-gray-400 mb-1">Info</p>
              <div className={styles.info_edit}>
                <p className="text-white">Spring is coming 🌱</p>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className={styles.chat_media_section}>
            <div className="chat_media_header flex items-center mb-2">
              <span className="text-gray-400 text-sm">
                Media,Links and Documents
              </span>
              <img src="/svg/arrow-right.svg" alt="" />
            </div>
            <div className={styles.chat__media__wrapper}>
              <div className={styles.chat_media_overlay}></div>
              <div className={styles.chat_media}>
                <img src="/media1.png" alt="" />
              </div>
              <div className={styles.chat_media}>
                <img src="/media2.png" alt="" />
              </div>
              <div className={styles.chat_media}>
                <img src="/media3.png" alt="" />
              </div>
              <div className={styles.chat_media}>
                <img src="/media3.png" alt="" />
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className={styles.function_section}>
            <div className={styles.list_item}>
              <div className="function__left flex items-center gap-5">
                <div className="function-icon">
                  <img src="/svg/star.svg" alt="" />
                </div>
                <p className="text-white">Marked messages</p>
              </div>
              <div className="function-icon">
                <img src="/svg/arrow-right.svg" alt="" />
              </div>
            </div>
            <div className={styles.list_item}>
              <div className="function_left flex items-center gap-5">
                <div className="function-icon">
                  <img src="/svg/notification.svg" alt="" />
                </div>
                <div className={styles.function_item_content}>
                  <p className="text-white">Noticications</p>
                  <p className="text-sm text-gray-400">On</p>
                </div>
              </div>
              <div className="function-icon">
                <img src="/svg/arrow-right.svg" alt="" />
              </div>
            </div>
            <div className={styles.list_item}>
              <div className="function_left flex items-center gap-5">
                <div className="function-icon">
                  <img src="/svg/timer.svg" alt="" />
                </div>
                <div className={styles.function_item_content}>
                  <p className="text-white">Self Deleting Messages</p>
                  <p className="text-sm text-gray-400">Off</p>
                </div>
              </div>
              <div className="function-icon">
                <img src="/svg/arrow-right.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="divider"></div>
        </div>
      )}
    </div>
  );
}

export default ChatInfo;
