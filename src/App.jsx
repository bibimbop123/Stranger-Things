import React from "react";
import "./App.css";
import RegisterForm from "./components/RegisterForm";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import FetchAllPosts from "./components/FetchAllPosts";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  console.log("token:", token);
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
          <Route path="/form" element={<RegisterForm setToken={setToken} />} />
          <Route
            path="/"
            element={
              <form>
                <input type="text" placeholder="username" />

                <input type="text" placeholder="password" />
                <button>login</button>
              </form>
            }
          />
          <Route path="/posts" element={<FetchAllPosts />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
