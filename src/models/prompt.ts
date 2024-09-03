import { model, models, Schema } from "mongoose";

const PromptSchema = new Schema({
  creator: {
    ref: "User",
  },
  prompt: {
    type: String,
    require: [true, "prompt is required"],
  },
  tag: {
    type: String,
    require: [true, "tag is required"],
  },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;
