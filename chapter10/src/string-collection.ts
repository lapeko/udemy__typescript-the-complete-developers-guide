import { Sorter } from "./sorter";

export class StringCollection extends Sorter {
  length: number;
  private _collection: string[];

  constructor(public collection: string) {
    super();
    this.length = collection.length;
    this._collection = Array.from(collection);
  }

  swap(left: number, right: number): void {
    [this._collection[left], this._collection[right]] = [
      this._collection[right],
      this._collection[left],
    ];
    this.collection = this._collection.join("");
  }

  compare(left: number, right: number): boolean {
    return (
      this._collection[left].toLocaleLowerCase() >
      this.collection[right].toLowerCase()
    );
  }

  print() {
    console.log(`"${this.collection}"`);
  }
}
