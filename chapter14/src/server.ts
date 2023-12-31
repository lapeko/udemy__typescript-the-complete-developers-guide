import express from "express";
import cookieSession from "cookie-session";
import { router } from "./router";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({keys: ["klajsdhbjasdb"]}));
app.use(router);

app.listen(3000, () => console.log("Server is running on port 3000"));
