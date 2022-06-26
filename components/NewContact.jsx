import React from "react";
import styles from "./NewContact.module.css";
function NewContact({ setNewContact, new_contact }) {
  const handleClose = (e) => {
    console.log(e.target);
    if (e.target.classList.contains("new_contact_popup")) {
      setNewContact(false);
    }
  };
  return (
    <div
      className={`${styles.new__contact} new_contact_popup`}
      onClick={handleClose}
    >
      {new_contact && (
        <div className={styles.new__contact__modal}>
          <form className={styles.contact_form}>
            <div className={styles.form_control}>
              <label htmlFor="name">Full name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className={styles.form_control}>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className={styles.form_control}>
              <label htmlFor="phone">Phone</label>
              <input type="text" name="phone" id="phone" />
            </div>
            <input
              type="submit"
              value="Save Contact"
              className={styles.save_btn}
            />
          </form>
        </div>
      )}
    </div>
  );
}

export default NewContact;
