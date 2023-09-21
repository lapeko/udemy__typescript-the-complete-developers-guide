import { Router } from "express";

export const loginRouter = Router();

loginRouter.get("/", (req, res) =>
    res.send(`
    <form method="POST">
      <div>
        <label>
          Enter email
          <input type="email" name="email" />
        </label>
      </div>
      <div>
        <label>
          Enter password
          <input type="password" name="password" />
        </label>
      </div>
      <button>Log in</button>
    </form>
  `)
);

loginRouter.post("/", (req, res) => {
    const { password, email } = req.body as Record<string, string | undefined>;
    const isAuthenticated = email === "a@a.com" && password === "1234";
    if (isAuthenticated) {
        req.session = { loggedIn: true };
        res.redirect("/");
    }
    else res.status(401).send(`
        <div>
            <p>Invalid email or password</p>
            <a href="/login">Try again</a>
        </div>
    `);
});
