import React, { useState } from "react";
import "./parentlogin.css";

function ParentLogin() {
  const [formData, setFormData] = useState({
    name: "",
    regno: "",
    password: "",
    otp: "",
  });

  // Handle text input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Handle Generate OTP button click
  const generateOtp = () => {
    // Placeholder: implement real OTP generation logic here
    alert("OTP generated and sent!");
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic, e.g. validation or API call
    console.log("Form Data:", formData);
    alert("Form submitted!");
  };

  return (
    <div className="container">
      <form className="login-box" onSubmit={handleSubmit}>
        <label htmlFor="name">Name of the Student</label>
        <input
          type="text"
          id="name"
          placeholder="Name of the student"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="regno">Registration No. of the  student</label>
        <input
          type="text"
          id="regno"
          placeholder="Register No. of the student"
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
            placeholder="Enter otp"
            value={formData.otp}
            onChange={handleChange}
            required
          />
          <input
            type="button"
            id="gen-otp"
            value="Generate OTP"
            onClick={generateOtp}
          />
        </div>

        <button id="sub" type="submit">
          Submit
        </button>
      </form>
      
    </div>
  );
}

export default ParentLogin;
