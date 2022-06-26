import React from "react";
import getCurrentUserData from "../utils/getUser";
import useAuth from "./useAuth";

function useUser() {
  const [user, setUser] = React.useState(null);
  const auth_user = useAuth();
  React.useEffect(() => {
    const getUser = async () => {
      let u = await getCurrentUserData(auth_user ? auth_user.uid : null);
      setUser(u);
    };
    getUser();
  }, [auth_user]);
  return user;
  return <div>useUser</div>;
}

export default useUser;
