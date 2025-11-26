import { Queue } from './Queue';

describe('Queue', () => {
    let queue: Queue<number>;

    beforeEach(() => {
        queue = new Queue<number>();
    });

    test('initializes empty', () => {
        expect(queue.length).toBe(0);
        expect(queue.isEmpty()).toBe(true);
    });

    test('enqueue adds items to the queue', () => {
        queue.enqueue(10);
        queue.enqueue(20);

        expect(queue.length).toBe(2);
        expect(queue.isEmpty()).toBe(false);
    });

    test('dequeue removes items in FIFO order', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        expect(queue.dequeue()).toBe(1);
        expect(queue.dequeue()).toBe(2);
        expect(queue.length).toBe(1);
    });

    test('dequeue throws an error when empty', () => {
        expect(() => queue.dequeue()).toThrow('No items in a queue to dequeue.');
    });

    test('peek returns the first element without removing it', () => {
        queue.enqueue(42);
        queue.enqueue(100);

        expect(queue.peek()).toBe(42);
        expect(queue.length).toBe(2);
    });

    test('peek returns undefined for an empty queue', () => {
        expect(queue.peek()).toBeUndefined();
    });

    test('isEmpty returns true only when queue is empty', () => {
        expect(queue.isEmpty()).toBe(true);
        queue.enqueue(5);
        expect(queue.isEmpty()).toBe(false);
        queue.dequeue();
        expect(queue.isEmpty()).toBe(true);
    });
});
