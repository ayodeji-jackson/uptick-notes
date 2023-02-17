import { Schema, model } from "mongoose";
import { User } from "../types";

const UserSchema = new Schema<User>({
  name: {
    type: String, 
    required: true, 
  }, 
  email: {
    type: String, 
    requred: true, 
    unique: true, 
  }, 
  password: {
    type: String, 
    required: true, 
  }
}, { timestamps: true });
const UserModel = model<User>('User', UserSchema);

export default UserModel;