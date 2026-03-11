import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

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
    <div className="h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-6 rounded shadow w-80">

        <h1 className="text-2xl font-bold mb-4 text-center">
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
            className="border p-2 rounded"
            {...register("email")}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="border p-2 rounded"
            {...register("password")}
          />

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded mt-2"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
};

export default LoginPage;