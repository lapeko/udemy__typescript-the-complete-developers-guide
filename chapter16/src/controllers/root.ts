import { Request, Response } from 'express';
import { controller } from "./decorators/controller";
import { get } from './decorators/methods';

@controller("/")
export class RootController {
  @get("/")
  getRoot(req: Request, res: Response) {
    if (req.session?.loggedIn) return res.send(`
      <div>
        <p>You are logged in</p>
        <a href="/logout">Log out</button>
      </div>
    `);
    res.send(`
      <div>
        <p>You are logged out</p>
        <a href="/login">Log in</a>
      </div>
    `)
  }
}
