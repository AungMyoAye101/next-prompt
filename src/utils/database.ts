import mongoose, { ConnectOptions } from "mongoose";

let isConnect = false;

export const connectToDb = async () => {
  mongoose.set("strictQuery", true);

  if (isConnect) {
    console.log("mongo db is connected");
    return;
  } else {
    try {
      await mongoose.connect(process.env.MONGODB_URI!, {
        dbName: "prompt",
        useUnifiedTopology: true,
      } as ConnectOptions);

      isConnect = true;
      console.log("mongo db is connected");
    } catch (error) {
      console.log(error);
    }
  }
};
