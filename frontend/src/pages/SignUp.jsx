import React, { useState } from "react";
import { api } from "../api";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const [isLoading,setIsLoading] = useState(false)
  const handleSignup = async (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setErrorMessage("All Fields are Required");
      return;
    }
      try {
        setIsLoading(true)
          const res = await api.post("/user/signUp", { username, email, password });
          setIsLoading(false)
      if (res.success) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
    // Perform signup logic here (e.g., send data to the server)
    console.log("Signup data:", { username, email, password });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#f3f4f6]">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4">Sign Up</h1>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full border border-[#e5e7eb] rounded px-3 py-2 focus:outline-none focus:border-blue-400"
              placeholder="Your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            {isLoading ? "Signing Up....." : " Sign Up"}
          </button>
        </form>
        <p className="text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-[#3b82f6]">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
