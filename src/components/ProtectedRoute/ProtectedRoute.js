import React from "react";
import { Routes, Route } from "react-router-dom";

function ProtectedRoute({ token, children }) {
  function goBack() {
    window.history.pushState({ prevUrl: window.location.href }, null);
  }
  return (
    <Routes>
      <Route path="*" element={token ? children : goBack()} />
    </Routes>
  );
}

export default ProtectedRoute;
