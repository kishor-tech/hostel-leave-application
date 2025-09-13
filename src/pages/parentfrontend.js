import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./parentfrontend.css";

function ParentFrontend() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fromDate: "",
    toDate: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fromDate || !formData.toDate || !formData.reason.trim()) {
      alert("Please fill all fields");
      return;
    }
    console.log("Leave Application Submitted:", formData);
    alert("Leave application submitted successfully!");
    setFormData({ fromDate: "", toDate: "", reason: "" });
  };

  return (
    <div className="leave-container">
      <form onSubmit={handleSubmit} className="leave-form">
        <h1>Leave Application</h1>

        <label>From Date</label>
        <input
          type="date"
          name="fromDate"
          value={formData.fromDate}
          onChange={handleChange}
          required
        />

        <label>To Date</label>
        <input
          type="date"
          name="toDate"
          value={formData.toDate}
          onChange={handleChange}
          required
        />

        <label>Reason</label>
        <textarea
          name="reason"
          placeholder="Enter reason for leave"
          value={formData.reason}
          onChange={handleChange}
          required
          rows="3"
        />

        <button type="submit">Submit</button>
        <button
          type="button"
          onClick={() => navigate("/parent-login")}
          className="logout-btn"
        >
          Logout
        </button>
      </form>
    </div>
  );
}

export default ParentFrontend;
