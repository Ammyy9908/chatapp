import React from "react";
import styles from "./NewChatPanel.module.css";
import { AiOutlineUserAdd } from "react-icons/ai";
function NewChatPanel({ setNewChat, new_chat, setNewContact }) {
  return (
    <div
      className={`${styles.new_chat_panel} ${
        new_chat && styles.new_chat_panel_enable
      }`}
    >
      <div className={styles.new_chat_sidebar_header}>
        <button onClick={() => setNewChat(false)}>
          <img src="/svg/arrow_left.svg" alt="arrow_left" />
        </button>
        <p className="text-white text-sm">New Chat</p>
      </div>
      <div className={styles.search_section}>
        <div className={styles.search}>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search Contacts"
          />
          <div className={styles.search_icon}>
            <img src="/svg/search.svg" alt="search" />
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className={styles.new_chats__contacts}>
        <div
          className={styles.new_contact_button}
          onClick={() => setNewContact(true)}
        >
          <div className={styles.new_contact_button_icon}>
            <AiOutlineUserAdd />
          </div>
          <span>New contact</span>
        </div>

        <div className={styles.contact_group}>
          <div className={styles.contact_group_label}>A</div>
          <div className={styles.contact_group_items}>
            <div className={styles.contact_item}>
              <div className={styles.contact_user__avatar}>AB</div>
              <div className="contact_user_meta">
                <p>Sumit</p>
                <p className="text-gray-400 text-sm">Speak Less| Listen more</p>
              </div>
            </div>
            <div className="divider"></div>
            <div className={styles.contact_item}>
              <div className={styles.contact_user__avatar}>AB</div>
              <div className="contact_user_meta">
                <p>Sumit</p>
                <p className="text-gray-400 text-sm">Speak Less| Listen more</p>
              </div>
            </div>
            <div className="divider"></div>
            <div className={styles.contact_item}>
              <div className={styles.contact_user__avatar}>AB</div>
              <div className="contact_user_meta">
                <p>Sumit</p>
                <p className="text-gray-400 text-sm">Speak Less| Listen more</p>
              </div>
            </div>
            <div className="divider"></div>
            <div className={styles.contact_item}>
              <div className={styles.contact_user__avatar}>AB</div>
              <div className="contact_user_meta">
                <p>Sumit</p>
                <p className="text-gray-400 text-sm">Speak Less| Listen more</p>
              </div>
            </div>
            <div className="divider"></div>
            <div className={styles.contact_item}>
              <div className={styles.contact_user__avatar}>AB</div>
              <div className="contact_user_meta">
                <p>Sumit</p>
                <p className="text-gray-400 text-sm">Speak Less| Listen more</p>
              </div>
            </div>
            <div className="divider"></div>
          </div>
        </div>
        <div className={styles.contact_group}>
          <div className={styles.contact_group_label}>A</div>
          <div className={styles.contact_group_items}>
            <div className={styles.contact_item}>
              <div className={styles.contact_user__avatar}>AB</div>
              <div className="contact_user_meta">
                <p>Sumit</p>
                <p className="text-gray-400 text-sm">Speak Less| Listen more</p>
              </div>
            </div>
            <div className="divider"></div>
            <div className={styles.contact_item}>
              <div className={styles.contact_user__avatar}>AB</div>
              <div className="contact_user_meta">
                <p>Sumit</p>
                <p className="text-gray-400 text-sm">Speak Less| Listen more</p>
              </div>
            </div>
            <div className="divider"></div>
            <div className={styles.contact_item}>
              <div className={styles.contact_user__avatar}>AB</div>
              <div className="contact_user_meta">
                <p>Sumit</p>
                <p className="text-gray-400 text-sm">Speak Less| Listen more</p>
              </div>
            </div>
            <div className="divider"></div>
            <div className={styles.contact_item}>
              <div className={styles.contact_user__avatar}>AB</div>
              <div className="contact_user_meta">
                <p>Sumit</p>
                <p className="text-gray-400 text-sm">Speak Less| Listen more</p>
              </div>
            </div>
            <div className="divider"></div>
            <div className={styles.contact_item}>
              <div className={styles.contact_user__avatar}>AB</div>
              <div className="contact_user_meta">
                <p>Sumit</p>
                <p className="text-gray-400 text-sm">Speak Less| Listen more</p>
              </div>
            </div>
            <div className="divider"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewChatPanel;
