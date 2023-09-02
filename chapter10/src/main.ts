import { NumberCollection } from "./number-collection";
import { StringCollection } from "./string-collection";
import { LinkedList } from "./linked-list";

const numCollections = new NumberCollection([1, -4, 5, -17, 20]);
const stringCollection = new StringCollection(' asW m-"`asdfb Wc dfKOP');
const linkedList = new LinkedList();

linkedList.add(1);
linkedList.add(-1);
linkedList.add(2);
linkedList.add(-2);
linkedList.add(0);

numCollections.sort();
stringCollection.sort();
linkedList.sort();

numCollections.print();
stringCollection.print();
linkedList.print();
