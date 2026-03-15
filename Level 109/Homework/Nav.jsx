import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Nav() {
  const { user, logout } = useAuth();
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/panel">Admin Panel</Link> |{" "}
      {!user ? <Link to="/login">Login</Link> : <button onClick={logout}>Logout</button>}
    </nav>
  );
}