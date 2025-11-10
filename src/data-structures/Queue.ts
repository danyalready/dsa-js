export class Queue {
    private items: Array<any>;

    constructor() {
        this.items = [];
    }

    get length(): number {
        return this.items.length;
    }

    enqueue(item: any) {
        return this.items.push(item);
    }

    dequeue() {
        return this.items.shift();
    }

    peek() {
        return this.items[0];
    }

    isEmpty() {
        return this.length === 0;
    }
}
