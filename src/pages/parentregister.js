// ParentRegister.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./parentregister.css";

function ParentRegister() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    regNo: "",
    year: "",
    department: "",
    password: "",
    confirmPassword: "",
    otp: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Here you can also send formData to backend API

    // Redirect to ParentLogin page
    navigate("/parentlogin");
  };

  return (
    <div className="register-container">
      <h2>Parent Registration</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="regNo"
          placeholder="Registration Number"
          value={formData.regNo}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="year"
          placeholder="Year"
          value={formData.year}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="otp"
          placeholder="OTP"
          value={formData.otp}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default ParentRegister;
