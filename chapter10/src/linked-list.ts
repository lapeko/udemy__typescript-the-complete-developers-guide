import { Sorter } from "./sorter";

export class LinkedListItem {
  next: LinkedListItem | null;
  constructor(public value: number) {}
}

export class LinkedList extends Sorter {
  length = 0;
  private head: LinkedListItem | null;

  add(value: number) {
    this.length++;
    const newLinkedListItem = new LinkedListItem(value);
    if (!this.head) {
      this.head = newLinkedListItem;
      return;
    }

    let tail = this.head;
    while (tail.next) tail = tail.next;
    tail.next = newLinkedListItem;
  }

  swap(left: number, right: number) {
    if (!this.head) return;

    const nodes = new Array(right + 1)
      .fill(null)
      .reduce<LinkedListItem[]>((acc) => {
        if (!acc.length) return [this.head] as LinkedListItem[];
        const tail = acc.at(-1);
        tail?.next && acc.push(tail.next);
        return acc;
      }, [] as LinkedListItem[]);

    [nodes[left].value, nodes[right].value] = [
      nodes[right].value,
      nodes[left].value,
    ];
  }

  compare(left: number, right: number) {
    const headOrigin = this.head;
    const [leftValue, rightValue] = new Array(right + 1).fill(null).reduce(
      (acc, _, index) => {
        const value = this.getNext();
        if (index === left) acc[0] = value;
        else if (index === right) acc[1] = value;
        return acc;
      },
      [null, null]
    );
    this.head = headOrigin;
    return leftValue > rightValue;
  }

  getNext(): number | null {
    if (!this.head) return null;
    const returnItem = this.head;
    this.head = this.head.next;
    return returnItem.value;
  }

  print() {
    let tail = this.head;
    if (!tail) return console.log("Empty linked list");
    const arr = [];
    arr.push(tail.value);
    while (tail.next) {
      tail = tail.next;
      arr.push(tail.value);
    }
    console.log(arr);
  }
}
