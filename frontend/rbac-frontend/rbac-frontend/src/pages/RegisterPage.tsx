import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("USER");

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/auth/register", {
        name,
        email,
        password,
        role
      });

      alert("User registered successfully");
    } catch (error) {
      console.error(error);
      alert("Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-96 bg-white border border-gray-200 p-8 rounded-xl shadow-lg">

        <h1 className="text-2xl font-semibold mb-4 text-center text-gray-800">
          Register
        </h1>

        <div className="flex flex-col gap-3">

          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Role</label>
          <select
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="USER">USER</option>
            <option value="ADMIN">ADMIN</option>
          </select>

          <button
            onClick={handleRegister}
            className="bg-purple-600 text-white p-2 rounded mt-2 hover:bg-purple-700 transition"
          >
            Register
          </button>

         <p className="text-sm text-center mt-2">
  Already have an account? <Link to="/login">Login</Link>
</p>

        </div>
      </div>
    </div>
  );
};

export default RegisterPage;