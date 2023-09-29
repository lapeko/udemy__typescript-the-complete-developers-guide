import { Request, RequestHandler, Response } from 'express';
import { controller } from "./decorators/controller";
import { get } from './decorators/methods';
import { use } from './decorators/use';

const pathLogMiddleware: RequestHandler = (req, res, next) => {
  console.log(req.path);
  next();
};

@controller("/")
class RootController {
  @use(pathLogMiddleware)
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
