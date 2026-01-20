'use client'

import Link from "next/link";
import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, AlertCircle, NotebookTabs } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // error states
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = () => {
    // reset errors
    setEmailError("");
    setPasswordError("");

    // email validation
    if (!email) {
      setEmailError("Email is required");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setEmailError("Please enter @ for a valid email address");
      return;
    }

    // password validation
    if (!password) {
      setPasswordError("Password is required");
      return;
    }

    const strongPasswordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!strongPasswordRegex.test(password)) {
      setPasswordError(
        "Password must be 6+ chars, include uppercase, number & special character"
      );
      return;
    }

    // save user (replace with your actual function)
    // saveUser({ email, password });

    alert("Login successful!");
    setEmail("");
    setPassword("");
    // router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-white rounded-2xl shadow-lg">
              <NotebookTabs size={32} className="text-blue-600" strokeWidth={2.5} />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">
            My Note Book
          </h1>
          <p className="text-blue-100 text-sm font-medium">
            Smart Note Taking with Nepali Support
          </p>
        </div>

        {/* Form Section */}
        <div className="p-8">
          
          {/* Tab Buttons */}
          <div className="flex gap-3 mb-6">
            <button className="flex-1 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-md transition-all">
              Login
            </button>

            <Link href="/register" className="flex-1">
              <button className="w-full px-6 py-2.5 rounded-xl bg-slate-100 text-slate-600 font-semibold hover:bg-slate-200 transition-all">
                Register
              </button>
            </Link>
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block mb-2 font-medium text-slate-700 text-sm">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="email"
                placeholder="Enter your email"
                className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                  emailError 
                    ? "border-red-300 focus:ring-red-200 bg-red-50" 
                    : "border-slate-300 focus:ring-blue-200 focus:border-blue-400"
                }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {emailError && (
              <div className="flex items-center gap-1 mt-2 text-red-600 text-sm">
                <AlertCircle size={14} />
                <p>{emailError}</p>
              </div>
            )}
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="block mb-2 font-medium text-slate-700 text-sm">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                  passwordError 
                    ? "border-red-300 focus:ring-red-200 bg-red-50" 
                    : "border-slate-300 focus:ring-blue-200 focus:border-blue-400"
                }`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {passwordError && (
              <div className="flex items-start gap-1 mt-2 text-red-600 text-sm">
                <AlertCircle size={14} className="mt-0.5 flex-shrink-0" />
                <p>{passwordError}</p>
              </div>
            )}
          </div>

          {/* Login Button */}
          <button
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
            onClick={handleLogin}
          >
            Login
          </button>

          {/* Forgot Password Link */}
          <div className="text-center mt-4">
            <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline">
              Forgot Password?
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-8 py-4 border-t border-slate-200 text-center">
          <p className="text-xs text-slate-600">
            Don't have an account?{" "}
            <Link href="/register" className="text-blue-600 font-semibold hover:underline">
              Sign up now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}