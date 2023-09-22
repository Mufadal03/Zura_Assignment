import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginFn } from "../redux/auth/action";
import { useNavigate } from "react-router-dom";

function Login() {
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const { isLoading } = useSelector((state) => state.authReducer);
  // State to hold form data (email and password)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    // Basic form validation
    if (!email || !password) {
      setErrorMessage("All Fields are required");
      return;
    }

    // Dispatch the login action with form data
    dispatch(loginFn(formData))
      .then(() => navigate("/")) // Redirect to the homepage upon successful login
      .catch((error) => {
        // Handle login failure
        console.error(error);
        setErrorMessage("Login failed. Please check your credentials.");
      });
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
            <p>Email: testuser1@gmail.com</p>
            <p>Password: testuser1</p>
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
                      disabled={isLoading}
            className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold py-2 rounded focus:outline-none"
          >
            {isLoading ? "Loging In......" : "Login"}
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
