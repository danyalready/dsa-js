export class Stack<T> {
    private items: Array<T> = [];

    get length(): number {
        return this.items.length;
    }

    pop(): T {
        if (this.isEmpty()) {
            throw new Error('No items in a stack to pop.');
        }

        return this.items.pop()!;
    }

    push(item: T): void {
        this.items.push(item);
    }

    peek(): T {
        return this.items[this.length - 1];
    }

    isEmpty(): boolean {
        return this.length === 0;
    }
}
