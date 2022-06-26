import React from "react";
import logout from "../utils/logout";
import styles from "./Sidebar.module.css";
import Story from "./Story";
import UserChat from "./UserChat";
function Sidebar({ setProfile, photoURL, user, setNewChat }) {
  console.log(user);
  const [hide_btn, setHideButton] = React.useState(false);
  const [more, setMore] = React.useState(false);

  const handleScroll = (e) => {
    console.log(e.target.scrollLeft);
    if (e.target.scrollLeft > 35) {
      setHideButton(true);
    } else {
      setHideButton(false);
    }
  };

  const handleLogout = (event) => {
    console.log("logout");
    event.stopPropagation();
    logout().then((done) => {
      if (done) {
        console.log("logout success");
        window.location.reload();
      }
    });
  };
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__header}>
        <div
          className={`${styles.user__avatar} cursor-pointer`}
          onClick={() => {
            setProfile(user);
          }}
        >
          <img src={photoURL} alt="user__avatar" />
        </div>
        <div className="header_btns flex gap-3 items-center">
          <button className="new_chat_btn" onClick={() => setNewChat(true)}>
            <img src="/svg/new-chat.svg" alt="new-chat-icon" />
          </button>
          <button className={styles.more_btn} onClick={() => setMore(!more)}>
            <img src="/svg/more.svg" alt="new-chat-icon" />
            <ul
              className={`${styles.more__options} ${
                more && styles.more__options__enabled
              }`}
            >
              <li>
                <button className="list-item">New contact</button>
              </li>
              <li>
                <button className="list-item" onClick={() => setProfile(user)}>
                  Profile
                </button>
              </li>
              <li>
                <button className="list-item">Starred messages</button>
              </li>
              <li>
                <button className="list-item">Settings</button>
              </li>
              <li>
                <button className="list-item" onClick={handleLogout}>
                  Log out
                </button>
              </li>
            </ul>
          </button>
        </div>
      </div>
      <div className={styles.search_section}>
        <div className={styles.search}>
          <input type="text" name="search" id="search" placeholder="Search" />
          <div className={styles.search_icon}>
            <img src="/svg/search.svg" alt="search" />
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className={styles.story_section}>
        <h5 className="mb-5 text-white text-2xl">Stories</h5>
        <div className={styles.stories} onScroll={handleScroll}>
          <button
            className={`${styles.new_story_panel} hover:scale-105 ${
              hide_btn && "opac_btn"
            }`}
          >
            <img src="/svg/add.svg" alt="add" />
          </button>
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
        </div>
      </div>
      <div className="divider"></div>
      <div className={styles.message_title}>
        <h5 className="text-white text-2xl">Messages</h5>
      </div>
      <div className={styles.chats}>
        <UserChat active={true} unread_messages_count={0} user="Sumit" />
        <UserChat active={false} unread_messages_count={3} user="Manoj" />
        <UserChat active={false} unread_messages_count={0} user="Sumit" />
        <UserChat active={false} unread_messages_count={0} user="Sumit" />
        <UserChat active={false} unread_messages_count={0} user="Sumit" />
        <UserChat active={false} unread_messages_count={0} user="Sumit" />
        <UserChat active={false} unread_messages_count={0} user="Sumit" />
        <UserChat active={false} unread_messages_count={0} user="Sumit" />
        <UserChat active={false} unread_messages_count={0} user="Sumit" />
        <UserChat active={false} unread_messages_count={0} user="Sumit" />
        <UserChat active={false} unread_messages_count={0} user="Sumit" />
        <UserChat active={false} unread_messages_count={0} user="Sumit" />
        <UserChat active={false} unread_messages_count={0} user="Sumit" />
      </div>
    </div>
  );
}

export default Sidebar;
