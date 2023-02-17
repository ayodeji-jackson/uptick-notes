import { NextFunction, Request, Response, Router } from "express";
import UserModel from "../model/user.model";
import bcrypt from "bcrypt";

const router: Router = Router(); 

router.route('/auth/register').post(async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await UserModel.create({ ...req.body, password: bcrypt.hashSync(req.body.password, 10) });
    res.status(201).json({ id: user.id });
  } catch (err) {
    return next(err); 
  }
});

router.route('/auth/login').post(async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body; 
    
    const user = await UserModel.findOne({ email });
    if (!user || !bcrypt.compareSync(password, user.password)) {
      res.status(400).json({ message: "invalid credentials" });
      return;
    }
    req.session.regenerate(() => {
      req.session.userId = user.id;
      res.status(200).json({ id: user.id });
    });
  } catch (err) {
    return next(err);
  }
});

router.route('/auth/logout').get((req: Request, res: Response, next: NextFunction) => {
  req.session.destroy(() => {});
  next();
})

export default router;