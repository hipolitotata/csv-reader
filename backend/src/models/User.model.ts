import { Schema } from "mongoose";
import mongoose from "../config/database";

const UserSchema = new Schema({
  name: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  favorite_sport: {
    type: String,
  },
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
