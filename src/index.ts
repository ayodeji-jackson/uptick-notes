import express, { Application } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { default as noteRouter } from "./routes/note.routes";
import { default as authRouter } from "./routes/auth.routes";
import { errorHandler } from "./middleware";
import session from "express-session";
import { sessionOptions } from "./config";

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
app.use(session(sessionOptions));

app.use(noteRouter);
app.use(authRouter);

app.use(errorHandler);

mongoose.connect(mongoString!);
mongoose.connection.on('error', err => console.log(err));
mongoose.connection.once('connected', () => console.log('database connected'));

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`)
});