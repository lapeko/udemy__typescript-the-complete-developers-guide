import fs from "fs";
import { MatchResult } from "./types";

const readCsvFile = (filePath: string) =>
  fs
    .readFileSync(filePath, { encoding: "utf-8" })
    .split("\n")
    .filter((row) => row)
    .map((row) => row.split(","));

type MatchData = {
  date: Date;
  homeTeam: string;
  guestTeam: string;
  homeTeamGoals: number;
  guestTeamGoals: number;
  result: MatchResult;
  referee: string;
};
const parseFootballMatch = (row: string[], index: number): MatchData => {
  const dateParts = row[0].split("/");
  const date = new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]);
  const homeTeam = row[1];
  const guestTeam = row[2];
  const homeTeamGoals = parseInt(row[3]);
  const guestTeamGoals = parseInt(row[4]);

  if (
    row[5] !== MatchResult.AwayWin &&
    row[5] !== MatchResult.Draw &&
    row[5] !== MatchResult.HomeWin
  )
    throw new Error();

  const result: MatchResult = row[5];
  const referee = row[6];

  return {
    date,
    homeTeam,
    guestTeam,
    homeTeamGoals,
    guestTeamGoals,
    result,
    referee,
  };
};

export { readCsvFile, parseFootballMatch };
