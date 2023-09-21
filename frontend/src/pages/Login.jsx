import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginFn } from "../redux/auth/action";
import { useNavigate } from "react-router-dom";

function Login() {
    const [errorMessage, setErrorMessage] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
      const [formData, setFormData] = useState({
        email: "",
        password: "",
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handleSubmit = (e) => {
          e.preventDefault();
          const {email,password} = formData
          if (!email || !password) {
              setErrorMessage('All Fields are required')
              return
          }
          dispatch(loginFn(formData))
              .then(() => navigate('/'))

        // Perform login logic here using formData
        console.log("Form data submitted:", formData);
      };

  return (
    <div className="flex justify-center items-center h-screen bg-[#f3f4f6] font-Roboto">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-4xl font-semibold  mb-4 text-center">Login</h1>
        <div className="my-2 py-3 border-activeBlack">
          <p className="text-md font-bold capitalize">
            Use this Account or Login to your account
          </p>
          <div className="">
            <p>Email : testuser1@gmail.com</p>
            <p>Password : testuser1</p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
              placeholder="Your password"
            />
            {errorMessage && (
              <p className="text-sm text-[#FF274C]">{errorMessage}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold py-2 rounded focus:outline-none"
          >
            Login
          </button>
        </form>{" "}
        <p className="text-gray-600 mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
