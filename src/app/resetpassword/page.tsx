"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function ResetPasswordPage() {
  const [message, setMessage] = useState("");

  const [user, setUser] = useState({
    email: "",
    password: "",
    token: "",
  });

  const router = useRouter();

  const updatePassword = async () => {
    try {
      const res = await axios.post("/api/users/resetpassword", user);
      setMessage(res.data.message);
      router.push("/login");
    } catch (error: any) {
      setMessage(error.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-2">
      <h1 className="text-2xl font-bold mb-4">Reset Password</h1>

      <input
        type="email"
        placeholder="Enter your email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-80"
      />

      <input
        type="text"
        placeholder="Enter your reset token"
        value={user.token}
        onChange={(e) => setUser({ ...user, token: e.target.value })}
        className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-80"
      />

      <input
        type="password"
        placeholder="Enter your new password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-80"
      />

      <button
        onClick={updatePassword}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md"
      >
        Update Password
      </button>

      {message && (
        <p className="mt-4 text-center text-sm text-gray-700">{message}</p>
      )}
    </div>
  );
}
