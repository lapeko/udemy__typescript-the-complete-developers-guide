export enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

export enum ExportType {
  Console,
  Html,
}

export type Printable = (line: string) => void;
