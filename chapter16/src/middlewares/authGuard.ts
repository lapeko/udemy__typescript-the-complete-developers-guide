import { RequestHandler } from "express";

export const authGuard: RequestHandler = (req, res, next) => {
    if (req.session?.loggedIn) return next();
    res.status(403).send('Not authorized');
};
