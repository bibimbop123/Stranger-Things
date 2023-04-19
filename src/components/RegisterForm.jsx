import React, { useState } from "react";
import { registerUser } from "../api/Users";

export default function RegisterForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await registerUser(username, password);
      console.log("result in component: ", result);
      setToken(result.data.token);
      localStorage.setItem("token", result.data.token);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Registration form</label>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button> Submit </button>
      </form>
    </div>
  );
}
