import mongoose from "mongoose";
export async function connectToDb(uri) {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
    });
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
}
