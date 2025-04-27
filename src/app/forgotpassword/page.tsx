"use client";

import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function ForgetPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();

  const sendUserEmail = async () => {
    try {
      console.log("Sending email", { email });
      const res = await axios.post("/api/users/forgotpassword", { email });
      setMessage(res.data.message);
      router.push("/resetpassword")
    } catch (error: any) {
      setMessage(error.response.data.error || "Something went wrong");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-2">
      <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-80"
      />
      <button
        onClick={sendUserEmail}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md"
      >
        Send Reset Link
      </button>
      {message && (
        <p className="mt-4 text-center text-sm text-gray-700">{message}</p>
      )}
    </div>
  );
}
