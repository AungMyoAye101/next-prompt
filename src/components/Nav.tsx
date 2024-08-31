"use client";
import { getProviders, signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Nav = () => {
  const { data: session } = useSession();
  const [toggle, setToggle] = useState(false);
  const [providers, setProviders] = useState(null);
  const isLogedIn = false;

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();
    };
  }, []);
  return (
    <nav className="flex justify-between items-center py-2 px-4">
      <div>
        <h1 className="text-xl font-bold font-serif"> Promptopia</h1>
      </div>

      <div className="hidden md:flex gap-2">
        {session?.user ? (
          <>
            <button className="px-4 py-2 rounded-lg hover:bg-orange-500 text-slate-200 bg-gray-700 shadow-md text-sm font-semibold">
              Create New
            </button>
            <button className="px-4 py-2 rounded-lg hover:bg-gray-800 border border-gray-300 shadow-md text-sm hover:text-gray-100  font-semibold">
              Log Out
            </button>
          </>
        ) : (
          <>
            <button
              className="px-4 py-2 rounded-lg hover:bg-gray-800 border border-gray-300 shadow-md text-sm hover:text-gray-100  font-semibold"
              onClick={() => signIn("google")}
            >
              Sign In
            </button>
          </>
        )}
      </div>
      <div className="block md:hidden">
        <button
          onClick={() => setToggle((pre) => !pre)}
          className="size-8 flex flex-col gap-0.5 justify-center items-center rounded-full"
        >
          <div
            className={`w-5 h-1 bg-gray-900 rounded transition-transform ease-out duration-200 origin-left ${
              toggle ? "rotate-[42deg] " : ""
            }`}
          ></div>
          <div
            className={`w-5 h-1 bg-gray-900 rounded transition-transform ease-out duration-200 origin-right ${
              toggle ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-5 h-1 bg-gray-900 rounded transition-transform ease-out duration-200 origin-left ${
              toggle ? "-rotate-[42deg] " : ""
            }`}
          ></div>
        </button>
      </div>
      {/* mobile menu */}
      {toggle && (
        <section className="absolute right-0 top-12 rounded shadow-lg p-4 w-[90vw] flex flex-col gap-2">
          <Link
            href={"/"}
            className="w-full p-2 bg-gray-200 rounded hover:bg-orange-400"
            onClick={() => setToggle((pre) => !pre)}
          >
            Home
          </Link>
          <Link
            href={"/"}
            className="w-full p-2 bg-gray-200 rounded hover:bg-orange-400"
            onClick={() => setToggle((pre) => !pre)}
          >
            Home
          </Link>
          <Link
            href={"/"}
            className="w-full p-2 bg-gray-200 rounded hover:bg-orange-400"
            onClick={() => setToggle((pre) => !pre)}
          >
            Home
          </Link>
          <Link
            href={"/"}
            className="w-full p-2 bg-gray-200 rounded hover:bg-orange-400"
            onClick={() => setToggle((pre) => !pre)}
          >
            Logout
          </Link>
        </section>
      )}
    </nav>
  );
};

export default Nav;
