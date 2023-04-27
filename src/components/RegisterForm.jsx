import React, { useState } from "react";
import { registerUser } from "../api/Users";
import useAuth from "../hooks/useAuth";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");

  const { setToken, user } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    if (username.length < 8) {
      setError("username must be longer than 8 characters");
      return;
    }
    if (password !== passwordConfirmation) {
      setError("passwords don't match");
      return;
    }

    // if password = password confirmation
    try {
      const result = await registerUser(username, password);
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
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="password confirmation"
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        ></input>
        <button> Submit </button>
      </form>
      <div>{error && <h3 style={{ color: "red" }}>{error}</h3>}</div>
    </div>
  );
}
