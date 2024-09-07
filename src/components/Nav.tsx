"use client";
import { getProviders, signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Nav = () => {
  const { data: session } = useSession();
  const [toggle, setToggle] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();
    };
  }, []);
  return (
    <nav className="flex justify-between items-center py-2 px-4">
      <Link href={"/"}>
        <h1 className="text-xl font-bold font-serif  bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
          {" "}
          Promptopia
        </h1>
      </Link>

      <div className="hidden md:flex gap-2 items-center">
        {session?.user ? (
          <>
            <Link
              href={"/create"}
              className="px-3 py-1 rounded-md hover:bg-orange-500 text-slate-200 bg-gray-700 shadow-md text-sm font-semibold"
            >
              Create New
            </Link>
            <button
              className="px-3 py-1 rounded-md bg-red-500 hover:bg-gray-800  shadow-md text-sm text-gray-100  font-semibold"
              onClick={() => signOut()}
            >
              Sign Out
            </button>

            <Link href={`/profile/${session?.user.id}`}>
              <Image
                src={`${session.user.image}`}
                width={40}
                height={40}
                alt="user profile"
                className="rounded-full cursor-pointer"
              />
            </Link>
          </>
        ) : (
          <>
            <button
              className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-300 shadow-md text-sm text-gray-100  font-semibold hover:bg-orange-400"
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
        <section className="absolute right-0 top-12 rounded shadow-lg p-4 w-[90vw] flex flex-col gap-2 z-20 bg-slate-100">
          <Link
            href={"/"}
            className="w-full p-2 bg-gray-200 rounded hover:bg-orange-400"
            onClick={() => setToggle((pre) => !pre)}
          >
            Home
          </Link>
          <Link
            href={`/profile/${session?.user.id}`}
            className="w-full p-2 bg-gray-200 rounded hover:bg-orange-400"
            onClick={() => setToggle((pre) => !pre)}
          >
            Profile
          </Link>
          <Link
            href={"/create"}
            className="w-full p-2 bg-gray-200 rounded hover:bg-orange-400"
            onClick={() => setToggle((pre) => !pre)}
          >
            Create new
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
