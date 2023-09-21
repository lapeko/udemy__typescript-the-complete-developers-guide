import express from "express";
import cookieSession from "cookie-session";

import { AppRouter } from "./appRouter";
import "./controllers/root";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["klajsdhbjasdb"] }));
app.use(AppRouter.instance);

app.listen(3000, () => console.log("Server is running on port 3000"));
