import React from "react";
import "./App.css";
import RegisterForm from "./components/auth/RegisterForm";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import FetchAllPosts from "./components/FetchAllPosts";
import useAuth from "./hooks/useAuth";
import { useContext } from "react";
import { AuthContext } from "./components/auth/AuthProvider";
import CreatePost from "./components/auth/CreatePosts";
import Profile from "./components/auth/Profile";
import { LoginForm } from "./components/auth/LoginForm";

function App() {
  const { token, user } = useAuth();

  console.log("token in app.jsx:", token);
  console.log("User in app.jsx:", user);
  return (
    <div className="App">
      <nav id="navbar">
        <Link to="/"> Home Page</Link>
        <Link to="/posts"> Posts </Link>
        <Link to="/users/profile">Profile</Link>
        <Link to="/create-post">Create Posts</Link>
      </nav>
      <h1>Stranger Things</h1>
      <Link to="/form"> Register Form</Link>
      <div id="main-section">
        <Routes>
          <Route path="/form" element={<RegisterForm />} />
          <Route path="/" element={<LoginForm />} />
          <Route path="/posts" element={<FetchAllPosts />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/users/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
