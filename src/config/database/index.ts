import mongoose from "mongoose";

 export default mongoose.connect("mongodb://localhost:27017/contracts", () => {
    console.log("MonogoDB connection succeeded")
  })