import React, { useState } from "react";
import { Mail, Lock, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login", // backend login endpoint
        form,
        { withCredentials: true } // send/receive cookies if using them
      );

      // Store tokens in localStorage
      localStorage.setItem("token", res.data.accessToken);
      localStorage.setItem("refreshToken", res.data.refreshToken);

      alert("Login successful ✅");
      navigate("/"); // redirect to home or dashboard
    } catch (err) {
      alert(err.response?.data?.message || "Login failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-3xl p-8">
        {/* Logo / Title */}
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">
          CampusCart Login
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              />
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <a
              href="#"
              className="text-sm text-orange-600 hover:underline font-medium"
            >
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white py-2.5 rounded-xl font-semibold shadow-lg hover:opacity-90 transition disabled:opacity-50"
          >
            <LogIn className="w-5 h-5" />
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-1 border-gray-300" />
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Sign Up Redirect */}
        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a
            href="/signup"
            className="text-orange-600 font-medium hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
