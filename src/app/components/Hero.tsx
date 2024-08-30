import React from "react";

const Hero = () => {
  return (
    <section className="h-[calc(100vh-60px)] flex justify-center items-center p-6">
      <div className="text-center w-full md:w-[80vw] lg:w-[60vw] flex flex-col gap-2">
        <h1 className="text-3xl sm:text-4xl  md:text-5xl lg:text-6xl font-serif font-bold ">
          Discover & Share
        </h1>
        <h2 className="text-3xl sm:text-4xl  md:text-5xl lg:text-6xl font-serif font-bold text-orange-500">
          Ai Powered Prompts
        </h2>
        <p className="md:text-md text-gray-400 font-medium mt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
          dolores officia dolore dolorum beatae maiores cum necessitatibus,
        </p>
        <div className="mt-4">
          <input
            type="text"
            placeholder="search a tag or username"
            className="w-full py-2 px-4 rounded shadow-lg border border-gray-200 focus:outline-none"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
