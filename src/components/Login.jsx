import { loginUser } from "../api";
import { useState, useEffect } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser({ email, password });
      console.log("Logged in:", res);
      alert("Login successful!");
        } catch (err) {
      setError("Invalid email or password");
        }
    };

  // Optional backend test
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/topics`)
      .then((res) => res.json())
      .then((data) => console.log("Frontend → Backend connection OK:", data))
      .catch((err) => console.error("Connection FAILED:", err));
    }, []);

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
        );
    }