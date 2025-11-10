import LinkedList from "./LinkedList.js";

export default class Stack { // LIFO (lust in, first out)
  constructor () {
    this.list = new LinkedList();
  }

  push (value) {
    this.list.prepend(value);
  }

  pop () {
    return this.list.deleteHead();
  }

  isEmpty () {
    return !this.list.head;
  }

  toArray () {
    return this.list.toArray();
  }
}
