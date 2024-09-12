import React, { useEffect, useState } from "react";
import Feed from "./Feed";

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-60px)] flex flex-col justify-center items-center p-6">
      <div className="text-center w-full md:w-[80vw] lg:w-[60vw] flex flex-col gap-2 py-6">
        <h1 className="text-3xl sm:text-4xl  md:text-5xl lg:text-6xl font-serif font-bold ">
          Discover & Share
        </h1>
        <h2 className="text-3xl sm:text-4xl  md:text-5xl lg:text-6xl font-serif font-bold bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
          Ai Powered Prompts
        </h2>
        <p className="md:text-md text-gray-400 font-medium mt-2">
          Promptopia is an open-source AI prompting tool for modern world to
          discover, create and share creative prompts
        </p>
      </div>
      <Feed />
    </section>
  );
};

export default Hero;
