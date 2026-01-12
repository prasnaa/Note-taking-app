// 'use client'
import Link from "next/link";


export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg">

        {/* App Title */}
        <h1 className="text-3xl font-bold text-center mb-2">
          My Note Book
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Smart Note Taking with Nepali Support
        </p>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <Link href="/login">
          <button className="px-6 py-2 rounded-lg bg-gray-200 font-semibold text-gray-700">
            Login
          </button>
          </Link>

          <button className="px-6 py-2 rounded-lg bg-blue-500 text-white font-semibold">
            Register
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4">

          {/* Full Name */}
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Role */}
          <div>
            <label className="block mb-1 font-medium">Role</label>
            <select className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option>Editor</option>
              <option>Viewer</option>
              <option>Admin</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-4 bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
