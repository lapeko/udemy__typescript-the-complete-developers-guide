import path from "path";
import { parseFootballMatch, prepareReport, readCsvFile } from "./helpers";
import { ExportType } from "./types";

const matches = readCsvFile(
  path.join(__dirname, "..", "assets", "football.csv")
).map(parseFootballMatch);

prepareReport(matches, "Man United", ExportType.Html).print();
