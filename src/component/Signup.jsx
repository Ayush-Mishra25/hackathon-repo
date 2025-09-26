import React, { useState } from "react";
import { Mail, Lock, User as UserIcon, LogIn } from "lucide-react";

const SignupPage = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Registration failed");
        return;
      }

      // Save tokens in localStorage
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Redirect to home or protected page
      window.location.href = "/sell-item"; // or use navigate from react-router
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed. Check console.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-3xl p-8">
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">
          CampusCart Sign Up
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <div className="relative">
              <UserIcon className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="username"
                placeholder="Enter username"
                value={form.username}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              />
            </div>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white py-2.5 rounded-xl font-semibold shadow-lg hover:opacity-90 transition"
          >
            <LogIn className="w-5 h-5" />
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-orange-600 font-medium hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
