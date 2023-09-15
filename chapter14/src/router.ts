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
  console.log(req.body);
  res.send("Ok");
});
