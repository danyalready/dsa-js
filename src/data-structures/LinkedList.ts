class Node<T> {
    value: T;
    prev: Node<T> | null = null;
    next: Node<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

export class LinkedList<T> {
    head: Node<T> | null = null;
    tail: Node<T> | null = null;
    length: number = 0;

    append(value: T): void {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail!.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    prepend(value: T): void {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
    }

    get(index: number): T {
        if (index >= this.length || index < 0) {
            throw new Error(`Cannot reach item with index: ${index}.`);
        }

        if (index === 0) return this.head!.value;
        if (index === this.length - 1) return this.tail!.value;

        if (index < this.length / 2) {
            let currentNode = this.head;

            for (let i = 0; i < index; i++) {
                currentNode = currentNode!.next;
            }

            return currentNode!.value;
        } else {
            let currentNode = this.tail;

            for (let i = this.length - 1; i > index; i--) {
                currentNode = currentNode!.prev;
            }

            return currentNode!.value;
        }
    }

    delete(index: number): void {
        if (index >= this.length || index < 0) {
            throw new Error(`Cannot reach item with index: ${index}.`);
        }

        // Removing the first item in the list
        if (index === 0) {
            if (this.length === 1) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head!.next;
                this.head!.prev = null;
            }

            this.length--;
            return;
        }

        // Removing the last item in the list
        if (index === this.length - 1) {
            this.tail = this.tail!.prev;
            this.tail!.next = null;

            this.length--;
            return;
        }

        if (index < this.length / 2) {
            let currentNode = this.head;

            for (let i = 0; i < index; i++) {
                currentNode = currentNode!.next;
            }

            currentNode!.prev!.next = currentNode!.next;
            currentNode!.next!.prev = currentNode!.prev;
        } else {
            let currentNode = this.tail;

            for (let i = this.length - 1; i > index; i--) {
                currentNode = currentNode!.prev;
            }

            currentNode!.prev!.next = currentNode!.next;
            currentNode!.next!.prev = currentNode!.prev;
        }

        this.length--;
    }

    clear() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    toArray(): T[] {
        const items: T[] = [];

        let currentNode = this.head;

        while (currentNode) {
            items.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return items;
    }

    isEmpty(): boolean {
        return this.length === 0;
    }
}
