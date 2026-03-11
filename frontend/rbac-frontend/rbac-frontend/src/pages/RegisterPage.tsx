import React, { useState } from "react";
import axios from "axios";


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
    
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-80">
        <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>

        <div className="flex flex-col gap-3">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="border p-2 rounded"
            value={name}
onChange={(e) => setName(e.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="border p-2 rounded"
            value={email}
onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="border p-2 rounded"
          value={password}
onChange={(e) => setPassword(e.target.value)}
          />

          <label>Role</label>
          <select className="border p-2 rounded" value={role}
onChange={(e) => setRole(e.target.value)}>
            <option value="USER">USER</option>
            <option value="ADMIN">ADMIN</option>
          </select>

          <button
          onClick={handleRegister}
           className="bg-green-500 text-white p-2 rounded mt-2">

            Register
          </button>

          <p className="text-sm text-center mt-2">
            Already have an account? Login
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;