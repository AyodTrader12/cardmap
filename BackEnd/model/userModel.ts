import { Document, model, Schema } from "mongoose";

interface iUser {
  name: string;
  email: string;
  password: string;
}

interface iUserData extends iUser, Document {}

const userModel = new Schema<iUserData>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default model<iUserData>("user", userModel);
