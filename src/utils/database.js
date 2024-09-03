import mongoose, { ConnectOptions } from "mongoose";

let isConnect = false;

export const connectToDb = async () => {
  mongoose.set("strictQuery", true);

  if (isConnect) {
    console.log("mongo db is connected");
    return;
  } else {
    try {
      await mongoose.connect(process.env.MONGODB_URI, {
        dbName: "prompt",
        // useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      isConnect = true;
      console.log("mongo db is connected");
    } catch (error) {
      console.log(error);
    }
  }

  // try {
  //   await mongoose.connect(process.env.MONGODB_URI);
  //   console.log("Connected to MONGODB");
  // } catch (error) {
  //   console.log("Erro connecting to database: ", error);
  // }
};
