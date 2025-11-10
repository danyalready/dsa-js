export class Stack {
    private stack: Array<any>;

    constructor() {
        this.stack = [];
    }

    get length(): number {
        return this.stack.length;
    }

    pop() {
        return this.stack.pop();
    }

    push(item: any) {
        return this.stack.push(item);
    }

    peek() {
        return this.stack[this.length - 1];
    }

    isEmpty() {
        return this.length === 0;
    }
}
