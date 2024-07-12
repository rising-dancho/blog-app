import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username field is required."],
    },
    email: {
      type: String,
      required: [true, "Email field is required."],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password field is required."],
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);
export default User;
