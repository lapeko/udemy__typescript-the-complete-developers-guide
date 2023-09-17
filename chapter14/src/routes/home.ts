import { Router } from "express";

export const homeRouter = Router();

homeRouter.get("/", (req, res) => {
  if (req.session?.loggedIn) return res.send(`
      <form action="/logout" method="POST" >
        <p>You are logged in</p>
         <button>Log out</button>
      </form>
    `);
  res.send(`
      <div>
        <p>You are logged out</p>
        <a href="/login">Log in</a>
      </div>
    `)
});