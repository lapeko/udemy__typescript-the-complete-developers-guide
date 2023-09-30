import { Request, Response } from 'express';
import { controller, get } from "../decorators";

@controller("/logout")
class RootController {
  @get("/")
  logOut(req: Request, res: Response) {
    req.session = { loggedIn: false };
    res.redirect('/');
  }
}
