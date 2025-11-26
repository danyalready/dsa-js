export class Queue<T> {
    private items: Array<T>;

    constructor() {
        this.items = [];
    }

    get length(): number {
        return this.items.length;
    }

    enqueue(item: T): void {
        this.items.push(item);
    }

    dequeue(): T {
        if (this.isEmpty()) {
            throw new Error('No items in a queue to dequeue.');
        }

        return this.items.shift()!;
    }

    peek(): T {
        return this.items[0];
    }

    isEmpty(): boolean {
        return this.length === 0;
    }
}
