import express, { Application } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import session from "express-session";

declare module "express-session" {
  interface Session {
    userId: string;
  }
}

dotenv.config();

const app: Application = express();
const PORT: string | number = process.env.PORT || 3000;
const mongoString = process.env.DATABASE_URL;

app.use(express.json());

mongoose.connect(mongoString!);
mongoose.connection.on('error', err => console.log(err));
mongoose.connection.once('connected', () => console.log('database connected'));

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`)
});