import Link from "next/link";
import React from "react";

const PromptCreateForm = () => {
  return (
    <section className="flex flex-col gap-4 p-6 md:px-8 w-full max-w-3xl mt-4  mx-auto border border-gray-400 rounded-md shadow-md ">
      <div>
        <h1 className="text-2xl md:3xl  font-bold font-serif text-orange-400">
          Create your Ai power prompt
        </h1>
      </div>
      <form action={""} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="prompt" className="font-semibold text-gray-500">
            Text your ai powered prompt
          </label>
          <textarea
            name="prompt"
            id="prompt"
            placeholder="Enter your awsome prompt.."
            className="p-2 border border-gray-200 rounded shadow-md "
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="tag" className="font-semibold text-gray-500">
            Add tag for your prompt(#webdev,#prompt,#help,etc..)
          </label>
          <input
            type="text"
            name="tag"
            placeholder="tags your related field"
            className="p-2 border border-gray-200 rounded shadow-md "
          />
        </div>
        <div className="flex justify-end gap-2">
          <Link
            href="/"
            className="px-4 py-2 text-sm text-mono border border-gray-200 rounded-md font-semibold shadow-md"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="px-4 py-2 text-sm text-mono bg-orange-400 border border-gray-200 rounded-md font-semibold shadow-md"
          >
            Create
          </button>
        </div>
      </form>
    </section>
  );
};

export default PromptCreateForm;
