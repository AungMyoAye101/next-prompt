import React from "react";

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-60px)] flex justify-center items-center p-6">
      <div className="text-center w-full md:w-[80vw] lg:w-[60vw] flex flex-col gap-2">
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
        <div className="mt-4">
          <input
            type="text"
            placeholder="search a tag or username"
            className="w-full py-2 px-4 rounded shadow-lg border border-gray-400 focus:outline-none"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
