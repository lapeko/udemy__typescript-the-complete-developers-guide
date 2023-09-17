import { Router } from "express";

export const protectedRouter = Router();

protectedRouter.get("/", (req, res) => {
    if (req.session?.loggedIn) return res.send(`
        <div>
            <p>Welocme to protected route</p>
        </div>
    `);
    res.status(403).send(`
        <div>
            <p>Denied</p>
            <a href="/login">Try to login</a>
        </div>
    `)
});
