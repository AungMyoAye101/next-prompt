import React from "react";

const PromptCreateForm = () => {
  return (
    <form action="/">
      <textarea
        name="prompt"
        id="prompt"
        placeholder="Enter your awsome prompt.."
      />
      <input type="text" name="tag" placeholder="tags your related field" />
    </form>
  );
};

export default PromptCreateForm;
