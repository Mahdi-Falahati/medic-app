import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  role: {
    type: String,
    default: "USER",
  },
});

const User = models.User || model("User", userSchema);

export default User;
