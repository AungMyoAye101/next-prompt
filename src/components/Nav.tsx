"use client";
import { getProviders, signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdAddCard } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { GoSignIn } from "react-icons/go";
import { IoLogoDribbble } from "react-icons/io";

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
    <nav className="flex justify-between items-center py-2 px-4 shadow mt-1">
      <Link href={"/"}>
        <h1 className="text-xl font-bold font-serif flex items-center gap-1">
          <IoLogoDribbble className="text-2xl text-orange-500 shadow-sm " />
          <span className=" bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
            Promptopia
          </span>
        </h1>
      </Link>

      <div className="hidden md:flex gap-2 items-center">
        {session?.user ? (
          <>
            <Link
              href={"/create"}
              className="flex gap-1 items-center px-4 py-1 rounded-md hover:bg-orange-500 text-slate-200 bg-gray-700 shadow-md "
            >
              <MdAddCard />
              <span>Create New</span>
            </Link>
            <button
              className=" flex items-center gap-1 px-4 py-1 rounded-md text-red-700 border border-red-600 hover:bg-red-800  shadow-md hover:border-red-800 hover:text-gray-200"
              onClick={() => signOut()}
            >
              <BiLogOut /> <span>Sign out</span>
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
          <p className="link-p" onClick={() => signIn("google")}>
            <span>
              <GoSignIn />
            </span>{" "}
            <span>Signin</span>
          </p>
          <Link
            href={"/"}
            className="link-p"
            onClick={() => setToggle((pre) => !pre)}
          >
            <span>
              <IoMdHome />
            </span>
            <span>Home</span>
          </Link>
          <Link
            href={`/profile/${session?.user.id}`}
            className="link-p"
            onClick={() => setToggle((pre) => !pre)}
          >
            <span>
              <FaUser />
            </span>
            <span>Profile</span>
          </Link>
          <Link
            href={"/create"}
            className="link-p"
            onClick={() => setToggle((pre) => !pre)}
          >
            <span>
              <MdAddCard />
            </span>
            <span>Create new</span>
          </Link>

          <p
            className="link-p text-red-700 hover:text-gray-800"
            onClick={() => signOut()}
          >
            <span>
              <BiLogOut />
            </span>
            <span>Sign out</span>
          </p>
        </section>
      )}
    </nav>
  );
};

export default Nav;
