import React from "react";
import "./App.css";
import RegisterForm from "./components/RegisterForm";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  console.log("token:", token);
  return (
    <div className="App">
      <h1>Stranger Things</h1>
      <RegisterForm />
    </div>
  );
}

export default App;
