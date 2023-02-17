import { NextFunction, Request, Response, Router } from "express";
import { auth } from "../middleware";
import NoteModel from "../model/note.model";

const router: Router = Router();
router.use(auth);

// create note
router.route('/notes').post(async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = await NoteModel.create({ ...req.body, user: req.session.userId });
    console.log('POST /notes');
    return res.status(201).json({ id });
  } catch (err) {
    return next(err);
  }
});

// read all notes
router.route('/notes').get(async (req: Request, res: Response, next: NextFunction) => {
  try {
    const notes = await NoteModel.find({ user: req.session.userId });
    console.log('GET /notes');
    return res.status(200).json(notes);
  } catch (err) {
    return next(err);
  }
});

// read single note
router.route('/notes/:id').get(async (req: Request, res: Response, next: NextFunction) => {
  try {
    const note = await NoteModel.findById(req.params.id);
    console.log('GET /notes/:id');
    return res.status(200).json(note);
  } catch (err) {
    return next(err);
  }
});

// update single note
router.route('/notes/:id').put(async (req: Request, res: Response, next: NextFunction) => {
  try {
    await NoteModel.findByIdAndUpdate(req.params.id, { $set: req.body });
    console.log('PUT /notes/:id');
    return res.status(204);
  } catch (err) {
    return next(err);
  }
});

// delete single note
router.route('/notes/:id').delete(async (req: Request, res: Response, next: NextFunction) => {
  try {
    await NoteModel.findByIdAndRemove(req.params.id);
    console.log('DELETE /notes/:id');
    return res.status(204); 
  } catch (err) {
    return next(err);
  }
});

export default router;