"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {
    console.log("Logged in successful");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-2">
      <h1 className="">Login</h1>
      <hr />
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
      onClick={onLogin}
      className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 hover:bg-blue-900">Login</button>
      <Link href="/signup" className="text-blue-500">Register User Here</Link>
    </div>
  );
}
