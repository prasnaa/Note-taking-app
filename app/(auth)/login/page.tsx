// 'use client'

import Link from "next/link";

export default function LoginPage() {
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

        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label className="block mb-1 font-medium">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full p-3 border rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
          Login
        </button>
      </div>
    </div>
  );
}
