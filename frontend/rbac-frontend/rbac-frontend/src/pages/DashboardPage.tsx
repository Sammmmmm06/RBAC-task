import React from "react";
import { useNavigate } from "react-router-dom";


const DashboardPage = () => {

  const navigate = useNavigate();

  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-xl mx-auto">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Dashboard
        </h1>

        {role === "USER" && (
          <div className="bg-white p-4 rounded shadow mb-4">
            <h2 className="text-xl font-semibold mb-2">
              User Content
            </h2>
            <p>
              You are logged in as a USER. You can access user level content.
            </p>
          </div>
        )}

        {role === "ADMIN" && (
          <div className="bg-white p-4 rounded shadow mb-4">
            <h2 className="text-xl font-semibold mb-2">
              Admin Content
            </h2>
            <p>
              Admin access granted. You can access admin level content.
            </p>
          </div>
        )}

        <button
          onClick={handleLogout}
          className="w-full bg-red-500 text-white p-2 rounded"
        >
          Logout
        </button>

      </div>
    </div>
  );
};

export default DashboardPage;