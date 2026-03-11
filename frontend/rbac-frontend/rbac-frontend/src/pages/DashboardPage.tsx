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
    <div className="min-h-screen flex items-center justify-center bg-gray-50">

      <div className="w-96 bg-white border border-gray-200 p-8 rounded-xl shadow-lg">

        <h1 className="text-2xl font-semibold mb-4 text-center text-gray-800">
          Dashboard
        </h1>

        {role === "USER" && (
          <div className="border border-gray-200 p-4 rounded mb-4">
            <h2 className="text-lg font-semibold mb-2">
              User Content
            </h2>
            <p>
              You are logged in as a USER. You can access user level content.
            </p>
          </div>
        )}

        {role === "ADMIN" && (
          <div className="border border-gray-200 p-4 rounded mb-4">
            <h2 className="text-lg font-semibold mb-2">
              Admin Content
            </h2>
            <p>
              Admin access granted. You can access admin level content.
            </p>
          </div>
        )}

        <button
          onClick={handleLogout}
          className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700 transition"
        >
          Logout
        </button>

      </div>

    </div>
  );
};

export default DashboardPage;