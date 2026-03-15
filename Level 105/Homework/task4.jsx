import React, { createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

export const MyContext = createContext();
export const OtherContext = createContext();

export function NestedProvider({ children }) {
  return (
    <OtherContext.Provider value={{ theme: "dark" }}>
      {children}
    </OtherContext.Provider>
  );
}

export function Child() {
  const { theme } = useContext(OtherContext);

  const { user } = useContext(MyContext);

  return (
    <div>
      <p>User: {user}</p>
      <p>Current theme: {theme}</p>
    </div>
  );
}

export function App() {
  return (
    <MyContext.Provider value={{ user: "LUKA" }}>
      <NestedProvider>
        <Child />
      </NestedProvider>
    </MyContext.Provider>
  );
}
