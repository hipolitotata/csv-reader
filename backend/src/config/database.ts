import mongoose from "mongoose";
require("dotenv").config();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`,
  {}
);

if (!mongoose) {
  console.log("database is not connected");
}

export default mongoose;
