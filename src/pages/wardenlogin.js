import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLeaveContext } from "./leavecontext";
import "./wardenlogin.css";

function WardenLogin() {
  const [formData, setFormData] = useState({ year: "", password: "" });
  const { loginWarden } = useLeaveContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Warden login submitted!");
    loginWarden();
    navigate("/warden-requests");
  };

  return (
    <div className="warden-container">
      <form className="warden-login-box" onSubmit={handleSubmit}>
        <label>Year</label>
        <div className="radio-group">
          {["I", "II", "III", "IV"].map((year) => (
            <label key={year} className="radio-label">
              <input
                type="radio"
                name="year"
                value={year}
                checked={formData.year === year}
                onChange={handleChange}
                required
              />
              {year}
            </label>
          ))}
        </div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default WardenLogin;
