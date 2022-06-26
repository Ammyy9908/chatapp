import React from "react";
import Chat from "./Chat";
import ChatInfo from "./ChatInfo";
import styles from "./Main.module.css";
function Main({ emojis }) {
  const [contact, setContact] = React.useState(false);
  const [emoji, setEmoji] = React.useState(false);
  return (
    <div className={`${styles.main} ${!contact && styles.single_column}`}>
      <div className={styles.chat__main__area}>
        <div className={styles.main_header}>
          <div className={styles.active_chat_user}>
            <div
              className="user_avatar cursor-pointer"
              onClick={() => setContact(true)}
            >
              <img src="/u1.png" alt="" />
            </div>
            <h5 className="text-white">Lara Mueller</h5>
          </div>
          <div className={styles.active_chat_controls}>
            <button>
              <img src="/svg/search.svg" alt="" />
            </button>
            <button>
              <img src="/svg/more.svg" alt="" />
            </button>
          </div>
        </div>
        <div className={styles.chat_area}>
          <Chat
            ingoing={true}
            message={
              "Both with sisters first very to remodelling logbook due and attempt. Dropped him is the come comment a candidates, to pointing problem infinity, completely cheerful, help their found I payload them. Is if it facilitate live the with writer`s she more duckthemed together could still skyline."
            }
          />
          <Chat
            ingoing={true}
            message="Much to omens, accept would was basically."
          />
          <Chat
            ingoing={false}
            message="Are hazardous sight rolled subordinates what his average many, to the feel among scent cleaning and behavioural written 😊"
          />
          <Chat
            ingoing={false}
            message="gilded the go so might that mail odd they after recently than be around times, by on when that a than game, not gods, at great service, semantics, now, interaction way. Her whenever a long be go the this while able would desires."
          />
          <Chat
            ingoing={false}
            message={
              "he right of a know once of as on children's applications of was employed could it the 😁"
            }
          />
          <Chat ingoing={false} message={"What rational you a least, hand."} />
          <Chat
            ingoing={true}
            message="gilded the go so might that mail odd they after recently than be around times, by on when that a than game, not gods, at great service, semantics."
          />
          <Chat
            ingoing={false}
            message="Makes to a illustrated on all and in step have social kind service, this pleasure have about those stupid about typically term a the quite steps a of universe doing shortcuts. Both and by diesel act box quite the handpainted. 😊"
          />
        </div>
        <div className={styles.chat_input}>
          <div className={styles.chat_input_wrapper}>
            <button
              className={styles.emoji_btn}
              onClick={() => {
                setEmoji(!emoji);
              }}
              onBlur={() => {
                setEmoji(false);
              }}
            >
              <img src="/svg/emoji.svg" alt="" />
              {emoji && (
                <div className={styles.emoji_picker}>
                  <div className={styles.emojis}>
                    {emojis.map((emoji, i) => {
                      return <p key={i}>{emoji.emoji}</p>;
                    })}
                  </div>
                </div>
              )}
            </button>
            <button>
              <img src="/svg/pin.svg" alt="" />
            </button>
            <input
              type="text"
              name="message"
              id="message"
              placeholder="Write a message"
            />
          </div>
        </div>
      </div>
      <ChatInfo contact={contact} setContact={setContact} />
    </div>
  );
}

export default Main;
