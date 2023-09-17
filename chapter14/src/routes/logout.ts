import { Router } from "express";

export const logoutRouter = Router();

logoutRouter.post('/', (req, res) => {
    req.session = { loggedIn: false };
    res.redirect('/login');
});
