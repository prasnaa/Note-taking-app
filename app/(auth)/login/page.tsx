'use client'

import Link from "next/link";
import { useState } from "react";
import { saveUser } from "@/lib/auth";
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //  error states
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

  //  save user
    saveUser({ email, password });

    alert("Login successful!");
    setEmail("");
    setPassword("");
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-2">
          My Note Book
        </h1>
        <p className="text-center text-gray-600 mb-6 font-semibold">
          Smart Note Taking with Nepali Support
        </p>

        <div className="flex justify-center gap-4 mb-6">
          <button className="px-6 py-2 rounded-lg bg-blue-500 text-white font-semibold">
            Login
          </button>

          <Link href="/register">
            <button className="px-6 py-2 rounded-lg bg-gray-300 text-gray-500 font-semibold">
              Register
            </button>
          </Link>
        </div>

        {/* email */}
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 border rounded-lg mb-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/*  email error */}
        {emailError && (
          <p className="text-red-500 text-sm mb-3">{emailError}</p>
        )}

        {/* password */}
        <label className="block mb-1 font-medium">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full p-3 border rounded-lg mb-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* password error */}
        {passwordError && (
          <p className="text-red-500 text-sm mb-4">{passwordError}</p>
        )}

        <button
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
