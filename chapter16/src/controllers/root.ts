import { controller } from "./decorators/controller";

@controller("")
class HomeController {
  constructor() {}
}
// homeRouter.get("/", (req, res) => {
//   if (req.session?.loggedIn) return res.send(`
//       <div>
//         <p>You are logged in</p>
//         <a href="/logout">Log out</button>
//       </div>
//     `);
//   res.send(`
//       <div>
//         <p>You are logged out</p>
//         <a href="/login">Log in</a>
//       </div>
//     `)
// });
