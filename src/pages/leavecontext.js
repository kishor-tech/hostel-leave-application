// LeaveContext.js
import React, { createContext, useContext, useState } from "react";

const LeaveContext = createContext();

export function LeaveProvider({ children }) {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [wardenLoggedIn, setWardenLoggedIn] = useState(false);

  const addLeaveRequest = (request) => {
    setLeaveRequests((prev) => [...prev, { ...request, id: Date.now(), status: "Pending" }]);
  };

  const approveLeaveRequest = (id) => {
    setLeaveRequests((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status: "Approved" } : req))
    );
  };

  const denyLeaveRequest = (id) => {
    setLeaveRequests((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status: "Denied" } : req))
    );
  };

  const loginWarden = () => setWardenLoggedIn(true);
  const logoutWarden = () => setWardenLoggedIn(false);

  return (
    <LeaveContext.Provider
      value={{
        leaveRequests,
        addLeaveRequest,
        approveLeaveRequest,
        denyLeaveRequest,
        wardenLoggedIn,
        loginWarden,
        logoutWarden,
      }}
    >
      {children}
    </LeaveContext.Provider>
  );
}

export function useLeaveContext() {
  return useContext(LeaveContext);
}
