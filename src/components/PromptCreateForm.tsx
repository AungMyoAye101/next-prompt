"use client";

import Link from "next/link";
import React, { useState } from "react";
interface CreatePrompt {
  type: string;
  createPrompt: () => Promise<void>;
  prePrompt?: string;
  preTag?: string;
}
const PromptCreateForm = ({
  type,
  createPrompt,
  prePrompt,
  preTag,
}: CreatePrompt) => {
  const [prompt, setPrompt] = useState(prePrompt);
  const [tag, setTag] = useState(preTag);

  return (
    <section className="flex flex-col gap-4 p-6 md:px-8 w-full max-w-3xl mt-4  mx-auto border border-gray-400 rounded-md shadow-md ">
      <div>
        <h1 className="text-2xl md:3xl  font-bold font-serif text-orange-400">
          {type} your Ai power prompt
        </h1>
      </div>
      <form action={createPrompt} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="prompt" className="font-semibold text-gray-500">
            Text your AI powered prompt
          </label>
          <textarea
            name="prompt"
            id="prompt"
            value={prompt}
            placeholder="Enter your awsome prompt.."
            className="p-2 border border-gray-200 rounded shadow-md outline-none focus:border-green-400 "
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="tag" className="font-semibold text-gray-500">
            Add tag for your prompt(eg:#webdev,#prompt,#help,etc..)
          </label>
          <input
            type="text"
            name="tag"
            value={tag}
            placeholder="Tags "
            className="p-2 border border-gray-200 rounded shadow-md outline-none focus:outline-none focus:border-green-400 "
            onChange={(e) => setTag(e.target.value)}
          />
        </div>
        <div className="flex justify-end gap-2">
          <Link
            href="/"
            className="px-4 py-2 text-sm text-mono border border-gray-200 rounded-md font-semibold shadow hover:rounded-full hover:bg-orange-400 "
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="px-4 py-2 text-sm text-mono bg-orange-400 border border-gray-200 rounded-md font-semibold shadow hover:rounded-full hover:bg-lime-500"
          >
            {type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default PromptCreateForm;
