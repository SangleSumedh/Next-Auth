"use client";

import axios from "axios";
import Link from "next/link";
import { VscAccount } from "react-icons/vsc";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProfilePage() {
  const router = useRouter();

  const [data, setData] = useState("nothing");

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get('/api/users/me')
    console.log(res.data);
    setData(res.data.data._id)
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen w-full">
        <h1>Profile</h1>
        <hr />
        <p>Profile Page</p>
        <hr />
        <h2 className="p-2 bg-green-500 rounded text-black">
          {data === "nothing" ? (
            "Nothing to see here"
          ) : (
            <Link href={`/profile/${data}`}>{data}</Link>
          )}
        </h2>
        <button
          onClick={logout}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg mt-5"
        >
          Logout
        </button>

        <button
          onClick={getUserDetails}
          className="px-4 py-2 bg-violet-500 hover:bg-violet-700 text-white font-bold rounded-lg mt-5"
        >
          Get User Details
        </button>
      </div>
    </>
  );
}
