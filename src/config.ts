import { SessionOptions } from "express-session";
import dotenv from "dotenv";
import MongoStore from "connect-mongo";

dotenv.config();

export const sessionOptions: SessionOptions = {
  secret: process.env.SESSION_SECRET!,
  resave: false,
  saveUninitialized: true, 
  cookie: { maxAge: 1000 * 60 * 60 * 24 }, 
  store: MongoStore.create({
    mongoUrl: process.env.DATABASE_URL
  })
};