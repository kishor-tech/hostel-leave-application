import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useLeaveContext } from "./leavecontext";
import "./parentfrontend.css";

function ParentFrontend() {
  const navigate = useNavigate();
  const location = useLocation();
  const loginDetails = location.state;
  const { addLeaveRequest, leaveRequests } = useLeaveContext();

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
    addLeaveRequest({
      student: loginDetails.name,
      regno: loginDetails.regno,
      reason: formData.reason,
      from: formData.fromDate,
      to: formData.toDate,
      parent: loginDetails.parentName ?? "",
    });
    alert("Leave application submitted successfully!");
    setFormData({ fromDate: "", toDate: "", reason: "" });
  };

  const studentRequests = leaveRequests.filter(
    (req) => req.regno === loginDetails.regno
  );

  return (
    <div className="leave-background">
      {loginDetails && (
        <div className="user-details">
          <h2>Student Details</h2>
          <p>
            <strong>Name:</strong> {loginDetails.name}
          </p>
          <p>
            <strong>Register No:</strong> {loginDetails.regno}
          </p>
        </div>
      )}

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

      <div className="status-section">
        <h3>Your Leave Requests Status</h3>
        {studentRequests.length === 0 && <p>No requests submitted yet.</p>}
        {studentRequests.map((req) => (
          <div key={req.id} className={`status-item ${req.status.toLowerCase()}`}>
            <p>
              Leave from <b>{new Date(req.from).toLocaleDateString()}</b> to{" "}
              <b>{new Date(req.to).toLocaleDateString()}</b> for reason: <i>{req.reason}</i>
            </p>
            <p>Status: <b>{req.status}</b></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ParentFrontend;
