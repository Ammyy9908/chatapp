import React from "react";

function useNetwork() {
  const [online, setOnline] = React.useState(true);
  React.useEffect(() => {
    window.addEventListener("offline", () => {
      setOnline(false);
    });
    window.addEventListener("online", () => {
      setOnline(true);
    });

    return () => {
      window.removeEventListener("offline", () => {
        setOnline(false);
      });
      window.removeEventListener("online", () => {
        setOnline(true);
      });
    };
  }, []);
  return online;
}

export default useNetwork;
