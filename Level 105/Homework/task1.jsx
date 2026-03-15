import React, { createContext } from "react";

export const MyContext = createContext();
export const OtherContext = createContext();

export function AppProviders({ children }) {
  return (
    <MyContext.Provider value={{ user: "LUKIA" }}>
      <OtherContext.Provider value={{ theme: "dark" }}>
        {children}
      </OtherContext.Provider>
    </MyContext.Provider>
  );
}