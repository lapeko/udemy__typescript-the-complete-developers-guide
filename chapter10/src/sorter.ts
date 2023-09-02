export abstract class Sorter {
  abstract length: number;
  abstract swap(left: number, right: number): void;
  abstract compare(left: number, right: number): boolean;
  abstract print(): void;
  sort() {
    for (let i = 0; i < this.length; i++)
      for (let j = i + 1; j < this.length; j++)
        this.compare(i, j) && this.swap(i, j);
  }
}
