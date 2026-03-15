import React, { createContext, useContext } from "react";

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

// Child კომპონენტი
export function Child() {
  const { theme } = useContext(OtherContext);

  return (
    <div>
      <p>Current theme: {theme}</p>
    </div>
  );
}