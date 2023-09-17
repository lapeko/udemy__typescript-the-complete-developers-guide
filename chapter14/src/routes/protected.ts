import { Router } from "express";

export const protectedRouter = Router();

protectedRouter.get("/", (req, res) => res.send(`
  <div>
    <p>Welocme to protected route</p>
  </div>
`));
