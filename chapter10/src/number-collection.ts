import { Sorter } from "./sorter";

export class NumberCollection extends Sorter {
  length: number;

  constructor(public collection: number[]) {
    super();
    this.length = collection.length;
  }

  swap(left: number, right: number) {
    [this.collection[left], this.collection[right]] = [
      this.collection[right],
      this.collection[left],
    ];
  }

  compare(left: number, right: number) {
    return this.collection[left] > this.collection[right];
  }

  print() {
    console.log(this.collection);
  }
}
