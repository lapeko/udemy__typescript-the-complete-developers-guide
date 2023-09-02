import fs from "fs";
import { ExportType, MatchResult, Printable } from "./types";
import { consolePrinter } from "./printers/console";
import { htmlPrinter } from "./printers/html";

type MatchData = {
  date: Date;
  homeTeam: string;
  guestTeam: string;
  homeTeamGoals: number;
  guestTeamGoals: number;
  result: MatchResult;
  referee: string;
};

const readCsvFile = (filePath: string) =>
  fs
    .readFileSync(filePath, { encoding: "utf-8" })
    .split("\n")
    .filter((row) => row)
    .map((row) => row.split(","));

const prepareReport = (
  matches: MatchData[],
  team: string,
  exportType: ExportType
) => {
  const wins = matches.reduce((acc, match) => {
    if (
      (match.homeTeam === team && match.result === MatchResult.HomeWin) ||
      (match.guestTeam === team && match.result === MatchResult.AwayWin)
    )
      acc++;
    return acc;
  }, 0);

  let report: string;
  switch (exportType) {
    case ExportType.Console:
      report = `Team ${team} won ${wins} games`;
      break;
    case ExportType.Html:
      report = `<html>
  <body>
    <h1>${team} statistic</h1>
    <p>Wins: ${wins}</p>
  </body>
</html>`;
  }

  return { print: () => printReport(report, exportType) };
};

const printReport = (report: string, exportType: ExportType) => {
  switch (exportType) {
    case ExportType.Console:
      return consolePrinter(report);
    case ExportType.Html:
      return htmlPrinter(report);
  }
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

export { readCsvFile, parseFootballMatch, prepareReport };
