import express from "express";
import cookieSession from "cookie-session";
import { appRouter } from "../app-router";
import "./controllers";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["klajsdhbjasdb"] }));
app.use(appRouter);

app.listen(3000, () => console.log("Server is running on port 3000"));
