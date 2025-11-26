import { Stack } from './Stack';

describe('Stack', () => {
    let stack: Stack<number>;

    beforeEach(() => {
        stack = new Stack<number>();
    });

    test('initializes empty', () => {
        expect(stack.length).toBe(0);
        expect(stack.isEmpty()).toBe(true);
    });

    test('push adds items to the top of the stack', () => {
        stack.push(10);
        stack.push(20);

        expect(stack.length).toBe(2);
        expect(stack.isEmpty()).toBe(false);
    });

    test('pop removes items in LIFO order', () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);

        expect(stack.pop()).toBe(3);
        expect(stack.pop()).toBe(2);
        expect(stack.length).toBe(1);
    });

    test('pop throws an error when stack is empty', () => {
        expect(() => stack.pop()).toThrow('No items in a stack to pop.');
    });

    test('peek returns the top element without removing it', () => {
        stack.push(100);
        stack.push(200);

        expect(stack.peek()).toBe(200);
        expect(stack.length).toBe(2);
    });

    test('peek returns undefined for empty stack', () => {
        expect(stack.peek()).toBeUndefined();
    });

    test('isEmpty returns true only when stack has no items', () => {
        expect(stack.isEmpty()).toBe(true);

        stack.push(5);
        expect(stack.isEmpty()).toBe(false);

        stack.pop();
        expect(stack.isEmpty()).toBe(true);
    });
});
