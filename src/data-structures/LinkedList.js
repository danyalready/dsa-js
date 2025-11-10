export default class LinkedList {
  constructor () {
    this.head = null; // first element of the list
    this.tail = null; // lust element of the list
  }

  append (value) {
    const newNode = { value, next: null };

    if (!this.head) this.head = newNode;

    if (this.tail) this.tail.next = newNode;
    this.tail = newNode;
  }

  prepend (value) {
    const newNode = { value, next: this.head };
    this.head = newNode;

    if (!this.tail) this.tail = newNode;
  }

  insertAfter (value, afterValue) {
    const existingNode = this.find(afterValue);

    if (existingNode) {
      const newNode = { value, next: existingNode.next };
      existingNode.next = newNode;
    }
  }

  find (value) {
    if (!this.head) return;

    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) return currentNode;
      currentNode = currentNode.next;
    }

    return;
  }

  delete (value) {
    if (!this.head) return;

    while (this.head && this.head.value === value) return this.head = this.head.next;

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) currentNode.next = currentNode.next.next;
      else currentNode = currentNode.next;
    }

    if (this.tail.value === value) this.tail = currentNode;
  }

  deleteHead () {
    if (!this.head) return;

    const deletedHead = this.head;

    if (this.head.next) this.head = this.head.next;
    else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }

  toArray () {
    const elements = [];

    let currentNode = this.head;
    while(currentNode) {
      elements.push(currentNode);
      currentNode = currentNode.next;
    }

    return elements;
  }
}
