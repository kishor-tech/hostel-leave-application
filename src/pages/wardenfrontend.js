import React, { useEffect } from "react";
import { useLeaveContext } from "./leavecontext";
import { useNavigate } from "react-router-dom";
import "./wardenfrontend.css";

function WardenFrontend() {
  const {
    leaveRequests,
    approveLeaveRequest,
    denyLeaveRequest,
    wardenLoggedIn,
  } = useLeaveContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (!wardenLoggedIn) {
      navigate("/warden-login");
    }
  }, [wardenLoggedIn, navigate]);

  return (
    <div className="warden-page-background">
      <div className="warden-content-card">
        <h2 className="warden-title">
          <span role="img" aria-label="leave-request" className="warden-icon">
            🧑‍🎓
          </span>
          Leave Requests
        </h2>
        <div className="warden-subtitle">
          Review and manage student leave requests
        </div>
        {leaveRequests.length === 0 && (
          <div className="warden-no-requests">No requests yet.</div>
        )}
        {leaveRequests.map((req) => (
          <div key={req.id} className="leave-request-card">
            <div className="student-name">{req.student}</div>
            <div className="register-no">Register No: {req.regno}</div>
            <div className="reason">{req.reason}</div>
            <div className="dates">
              <span className="date-item">
                📅 From: {new Date(req.from).toLocaleDateString()}
              </span>
              <span className="date-item">
                📅 To: {new Date(req.to).toLocaleDateString()}
              </span>
            </div>
            <div className={`status ${req.status.toLowerCase()}`}>
              {req.status}
            </div>
            {req.status === "Pending" && (
              <div className="action-buttons">
                <button
                  className="btn-approve"
                  onClick={() => approveLeaveRequest(req.id)}
                >
                  ✓ Approve
                </button>
                <button
                  className="btn-deny"
                  onClick={() => denyLeaveRequest(req.id)}
                >
                  ✗ Deny
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WardenFrontend;
