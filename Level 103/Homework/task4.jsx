import React, { createContext, useContext } from "react";
const AuthContext = createContext();


function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}

function AuthProvider({ children, email, password }) {
  return (
    <AuthContext.Provider value={{ email, password }}>
      {children}
    </AuthContext.Provider>
  );
}

function AuthConsumer() {
  const { email, password } = useAuth();

  return (
    <div>
      <h3>Email: {email}</h3>
      <h4>Password: {password}</h4>
    </div>
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