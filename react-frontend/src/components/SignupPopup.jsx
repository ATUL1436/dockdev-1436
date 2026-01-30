import { useState } from "react";
import { publicApi } from "../services/api";
import "../styles/SignupPopup.css";


function SignupPopup({ onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  

  const handleSignup = async () => {
    try {
      await publicApi.post("/signup/", {
        username,
        password,
      });

      alert("User created successfully");
      onClose(); // popup बंद
    } catch (error) {
      alert("Signup failed");
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <h3>Sign Up</h3>

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

        <button onClick={handleSignup}>Create Account</button>
        <button className="cancel" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default SignupPopup;
