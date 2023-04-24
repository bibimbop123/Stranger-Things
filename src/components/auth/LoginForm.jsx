import { useState } from "react";
import { loginUser } from "../../api/Users";

import { Link } from "react-router-dom";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  async function handleSubmit() {
    e.preventDefault();
    try {
      const result = await loginUser(username, password);
      console.log("result in loginForm component: ", result);
      setToken(result.data.token);
      localStorage.setItem("token", result.data.token);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <div>
        <h1>Login</h1>
        <form>
          <label className="label" htmlFor="username">
            Username
          </label>
          <input
            required
            minLength={6}
            type="text"
            id="username"
            className="input"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            required
            minLength={6}
            type="text"
            id="password"
            className="input"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="button">Login</button>
          <p className="signup-link">
            Don't have an account?
            <Link to="/users/register"> Sign up!</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
