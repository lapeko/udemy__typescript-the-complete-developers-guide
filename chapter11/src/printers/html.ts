import fs from "fs";
import path from "path";

import { Printable } from "./../types";

export const htmlPrinter: Printable = (html: string) => {
  const root = path.join(__dirname, "..", "..", "report.html");
  fs.writeFileSync(root, html);
};
