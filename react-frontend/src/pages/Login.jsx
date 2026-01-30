import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { publicApi } from "../services/api";
import "../styles/login.css";
import SignupPopup from "../components/SignupPopup";

function Login({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showSignup, setShowSignup] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await publicApi.post("/login/", {
        username,
        password,
      });

      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);

      setToken(response.data.access);
      navigate("/dashboard");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      {/* LOGIN PAGE */}
      <div className="login-page">
        <div className="login-box">
          <h2>Login AtulFarm</h2>

          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleLogin}>Login</button>

          <p className="signup-text">
            Don’t have an account?{" "}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => setShowSignup(true)}
            >
              Sign up
            </span>
          </p>
        </div>
      </div>

      {/* SIGNUP POPUP */}
      {showSignup && (
        <SignupPopup onClose={() => setShowSignup(false)} />
      )}
    </>
  );
}

export default Login;
