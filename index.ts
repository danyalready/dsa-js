import { LinkedList } from './src/data-structures/LinkedList';

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);
linkedList.reverse();

console.log(linkedList.toArray());
