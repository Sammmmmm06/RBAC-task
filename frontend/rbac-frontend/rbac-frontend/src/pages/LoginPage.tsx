import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const LoginPage = () => {

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const handleLogin = async (data: any) => {
    try {

      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        {
          email: data.email,
          password: data.password
        }
      );

      const token = response.data;

      localStorage.setItem("token", token);

      alert("Login successful");

      navigate("/dashboard");

    } catch (error) {
      console.error(error);
      alert("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">

      <div className="w-96 bg-white border border-gray-200 p-8 rounded-xl shadow-lg">

        <h1 className="text-2xl font-semibold mb-4 text-center text-gray-800">
          Login
        </h1>

        <form
          onSubmit={handleSubmit(handleLogin)}
          className="flex flex-col gap-3"
        >

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            {...register("email")}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            {...register("password")}
          />

          <button
            type="submit"
            className="bg-purple-600 text-white p-2 rounded mt-2 hover:bg-purple-700 transition"
          >
            Login
          </button>

          <p className="text-sm text-center mt-2">
            Don't have an account? <Link to="/register">Sign up</Link>
          </p>

        </form>

      </div>

    </div>
  );
};

export default LoginPage;