import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://Deeksha:Dee9090@cluster.vdww6.mongodb.net/frenzybuzz"
    )
    .then(() => console.log("DB Connected!"));
};
