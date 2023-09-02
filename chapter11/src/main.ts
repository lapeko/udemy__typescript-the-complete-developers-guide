import path from "path";
import { parseFootballMatch, readCsvFile } from "./helpers";
import { MatchResult } from "./types";

let manUtdWins = 0;

const matches = readCsvFile(
  path.join(__dirname, "..", "assets", "football.csv")
).map(parseFootballMatch);

console.log(matches);

matches.forEach((match) => {
  if (
    (match.homeTeam === "Man United" && match.result === MatchResult.HomeWin) ||
    (match.guestTeam === "Man United" && match.result === MatchResult.AwayWin)
  )
    manUtdWins++;
});

console.log(manUtdWins);
