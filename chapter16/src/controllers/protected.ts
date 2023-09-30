import { Request, Response } from 'express';
import {controller, get, use} from "../decorators";
import {authGuard} from "../middlewares/authGuard";

@controller("/protected")
class RootController {
  @use(authGuard)
  @get("/")
  visitProtectedPage(req: Request, res: Response) {res.send(`
    <div>
      <p>Welcome to protected route</p>
    </div>
  `)}
}
