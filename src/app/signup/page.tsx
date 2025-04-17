"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignupPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {
    console.log("Signed in successful");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-2">
      <h1 className="">Sign Up</h1>
      <hr />
      <label htmlFor="username">Username</label>
      <input
        type="text"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none"
      />
      <label htmlFor="email">email</label>
      <input
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none"
      />
      <label htmlFor="password">password</label>
      <input
        type="text"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none"
      />

      <button
      onClick={onSignup}
      className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 hover:bg-blue-900">Signup</button>
      <Link href="/login" className="text-blue-500">Visit Login Page</Link>
    </div>
  );
}
