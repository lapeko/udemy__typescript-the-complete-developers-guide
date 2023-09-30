import { Request, Response } from 'express';
import { controller, get } from "../decorators";

@controller("/")
class RootController {
  @get("/")
  visitHomePage(req: Request, res: Response) {
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
