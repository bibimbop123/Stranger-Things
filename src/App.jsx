import React from "react";
import "./App.css";
import RegisterForm from "./components/auth/RegisterForm";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import FetchAllPosts from "./components/FetchAllPosts";
import useAuth from "./hooks/useAuth";
import { useContext } from "react";
import { AuthContext } from "./components/auth/AuthProvider";

function App() {
  const { token } = useAuth();
  console.log("token in app.jsx:", token);
  return (
    <div className="App">
      <nav id="navbar">
        <Link to="/"> Home Page</Link>
        <Link to="/posts"> Posts </Link>
      </nav>
      <h1>Stranger Things</h1>
      <Link to="/form"> Register Form</Link>
      <div id="main-section">
        <Routes>
          <Route path="/form" element={<RegisterForm />} />
          <Route
            path="/"
            element={
              <div>
                <h1>Login!</h1>
                <form>
                  <input type="text" placeholder="username" />

                  <input type="text" placeholder="password" />
                  <button>login</button>
                </form>
              </div>
            }
          />
          <Route path="/posts" element={<FetchAllPosts />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
