import { Schema, model } from "mongoose";
import { Note } from "../types";

const NoteSchema = new Schema<Note>({
  user: {
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true
  },
  title: {
    type: String, 
    default: '(no title)'
  }, 
  content: {
    type: String, 
    default: ''
  }, 
}, { timestamps: true });
const NoteModel = model<Note>('Note', NoteSchema);

export default NoteModel;