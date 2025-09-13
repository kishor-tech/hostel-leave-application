import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./parentlogin.css";

function ParentLogin() {
  const [formData, setFormData] = useState({
    name: "",
    regno: "",
    password: "",
    otp: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const generateOtp = () => {
    alert("OTP generated and sent!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login submitted!");
    // Route to parentfrontend with form data as state
    navigate("/parentfrontend", { state: formData });
  };

  return (
    <div className="container">
      <form className="login-box" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Name of the student"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="regno">Reg.no</label>
        <input
          type="text"
          id="regno"
          placeholder="Register no of student"
          value={formData.regno}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="otp">OTP</label>
        <div className="otp-container">
          <input
            type="number"
            id="otp"
            placeholder="Enter OTP"
            value={formData.otp}
            onChange={handleChange}
            required
          />
          <input type="button" id="gen-otp" value="Generate OTP" onClick={generateOtp} />
        </div>

        <button id="sub" type="submit">
          Submit
        </button>

        <p className="register-link">
          Don't have an account? <Link to="/parentregister">Register here</Link>
        </p>
      </form>
    </div>
  );
}

export default ParentLogin;
