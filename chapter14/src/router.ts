import { Router } from "express";

import { homeRouter } from "./routes/home";
import { loginRouter } from "./routes/login";
import { protectedRouter } from "./routes/protected";
import { logoutRouter } from "./routes/logout";

export const router = Router();

router.use("/", homeRouter);
router.use("/login", loginRouter);
router.use('/logout', logoutRouter)
router.use("/protected", protectedRouter);

