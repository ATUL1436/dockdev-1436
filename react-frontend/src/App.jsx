import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./layouts/MainLayout";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("access");
    setToken(storedToken);
  }, []);

  return (
    <Routes>
      {/* LOGIN – NO LAYOUT */}
      <Route
        path="/login"
        element={<Login setToken={setToken} />}
      />

      {/* DASHBOARD – PROTECTED + LAYOUT */}
      <Route
        path="/dashboard"
        element={
          token ? (
            <MainLayout>
              <Dashboard />
            </MainLayout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* DEFAULT */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
