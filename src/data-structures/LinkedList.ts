class Node<T> {
    value: T;
    prev: Node<T> | null = null;
    next: Node<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

export class LinkedList<T> {
    public head: Node<T> | null = null;
    public tail: Node<T> | null = null;
    public length: number = 0;

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

        let currentNode = this.head!.next;
        let currentIndex = 1;

        while (currentIndex < index && currentNode) {
            currentNode = currentNode.next;
            currentIndex++;
        }

        if (!currentNode) {
            throw new Error(`Node not found at index: ${index}`);
        }

        return currentNode.value;
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

        // Removing the item from a middle of the list
        let currentNode = this.head!.next;
        let currentIndex = 1;

        while (currentIndex < index && currentNode) {
            currentNode = currentNode.next;

            currentIndex++;
        }

        if (!currentNode) {
            throw new Error(`Node not found at index: ${index}`);
        }

        currentNode.prev!.next = currentNode.next;
        currentNode.next!.prev = currentNode.prev;

        this.length--;
    }

    toArray(): T[] {
        const items: T[] = [];

        let currentNode = this.head;
        let currentIndex = 0;

        while (currentIndex < this.length && currentNode) {
            items.push(currentNode.value);
            currentNode = currentNode.next;
            currentIndex++;
        }

        return items;
    }

    isEmpty(): boolean {
        return this.length === 0;
    }
}
