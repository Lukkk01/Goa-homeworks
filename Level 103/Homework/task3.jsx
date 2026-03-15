import React, { createContext } from "react";
const AuthContext = createContext();

function AuthProvider({ children, email, password }) {
  return (
    <AuthContext.Provider value={{ email, password }}>
      {children}
    </AuthContext.Provider>
  );
}

function AuthConsumer() {
  return (
    <AuthContext.Consumer>
      {(authData) => (
        <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
          <h3>Email: {authData.email}</h3>
          <h4>Password: {authData.password}</h4>
        </div>
      )}
    </AuthContext.Consumer>
  );
}

function App() {
  return (
    <div>
      <AuthProvider email="luka@gmail.com" password="1234">
        <AuthConsumer />
      </AuthProvider>

      <AuthProvider email="nika@gmail.com" password="abcd">
        <AuthConsumer />
      </AuthProvider>

      <AuthProvider email="ana@gmail.com" password="pass5678">
        <AuthConsumer />
      </AuthProvider>
    </div>
  );
}

export default App;
