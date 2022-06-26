import { getAuth, onAuthStateChanged } from "firebase/auth";
import React from "react";
import { firebase } from "../firebase";
function useAuth() {
  const [u, setUser] = React.useState(null);
  const auth = getAuth();
  React.useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      console.log("user", user);
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User

        setUser(user);
        // ...
      }
    });
  }, [u]);
  return u;
}

export default useAuth;
