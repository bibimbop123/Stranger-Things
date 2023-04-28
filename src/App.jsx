import React from "react";
import "./App.css";
import RegisterForm from "./components/RegisterForm";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import FetchAllPosts from "./components/FetchAllPosts";
import useAuth from "./hooks/useAuth";
import { useContext } from "react";
import { AuthContext } from "./components/auth/AuthProvider";
import CreatePost from "./components/auth/CreatePosts";
import Profile from "./components/auth/Profile";
import { LoginForm } from "./components/auth/LoginForm";
import Messages from "./components/auth/Messages";

function App() {
  const { token, user } = useAuth();

  console.log("token in app.jsx:", token);
  console.log("User in app.jsx:", user);

  const ProtectedRoute = () => {
    const { user } = useAuth();
    if (user) {
      return <Outlet />;
    } else {
      return <SignIn />;
    }
  };
  return (
    <div className="App">
      <nav id="navbar">
        {user?.posts != undefined && (
          <>
            <Link to="/posts"> Posts </Link>
            <Link to="/users/profile">Profile</Link>
            <Link to="/create-post">Create Posts</Link>
          </>
        )}
        {(user?.posts == null || user?.posts == undefined) && (
          <>
            <Link to="/"> Login </Link>
            <Link to="/posts"> Posts </Link>
            <Link to="/users/register"> Register Form</Link>
          </>
        )}
      </nav>
      <h1>Stranger Things</h1>
      <div id="main-section">
        <Routes>
          <Route path="/users/register" element={<RegisterForm />} />
          <Route path="/" element={<LoginForm />} />
          <Route path="/posts" element={<FetchAllPosts />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/users/profile" element={<Profile />} />
            <Route path="/posts/:postId/messages" element={<Messages />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
