import { Router } from "express";

export const router = Router();

router.get("/", (req, res) => res.send("Hi there"));

router.get("/login", (req, res) =>
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

router.post("/login", (req, res) => {
  const { password, email } = req.body as Record<string, string | undefined>;
  const isAuthenticated = email === "a@a.com" && password === "1234";
  if (isAuthenticated) {
    req.session = { loggedIn: true };
    res.redirect("/");
  }
  else res.status(401).send('Invalid email or password');
});
