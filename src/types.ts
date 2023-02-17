import { isValidObjectId, Types } from "mongoose";
import { z } from "zod"; 

const ZNoteSchema = z.object({
  user: z.custom<Types.ObjectId>((val) => isValidObjectId(val), {
    message: "invalid user id"
  }), 
  title: z.string({
    description: "title of note"
  }).optional().default("(no title)"), 
  content: z.string({
    description: "body of note"
  }).optional().default("")
});

export type Note = z.infer<typeof ZNoteSchema>;

const ZUserSchema = z.object({
  name: z.string({
    description: 'name of user', 
    required_error: "user's name is required"
  }), 
  email: z.string({
    description: 'email address of user', 
    required_error: "user's email address is required"
  }).email(), 
  password: z.string({
    description: 'password of user', 
    required_error: "user's password is required"
  })
});

export type User = z.infer<typeof ZUserSchema>;