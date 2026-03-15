import React, { useState } from "react";
import { MyContext } from "./MyContext";

const Wrapper = ({ children }) => {
  const [user, setUser] = useState("Mate");

  const value = {
    user,
    setUser
  };

  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
};

export default Wrapper;
