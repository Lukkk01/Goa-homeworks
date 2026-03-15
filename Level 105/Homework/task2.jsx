import React, { createContext } from "react";

export const MyContext = createContext();
export const OtherContext = createContext();

// NestedProvider კომპონენტი
export function NestedProvider({ children }) {
  return (
    <OtherContext.Provider value={{ theme: "dark" }}>
      {children}
    </OtherContext.Provider>
  );
}