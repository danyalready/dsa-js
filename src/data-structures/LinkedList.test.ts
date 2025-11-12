import { LinkedList } from './LinkedList';

describe('LinkedList', () => {
    let linkedList: LinkedList<number>;

    beforeEach(() => {
        linkedList = new LinkedList<number>();
    });

    test('`toArray` method transforms list to an array', () => {
        expect(linkedList.toArray()).toEqual([]);
    });

    test('`append` method adds an item to the end', () => {
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);

        expect(linkedList.length).toBe(3);
        expect(linkedList.toArray()).toEqual([1, 2, 3]);
    });

    test('`prepend` method adds an item to the beginning', () => {
        linkedList.prepend(3);
        linkedList.prepend(2);
        linkedList.prepend(1);

        expect(linkedList.length).toBe(3);
        expect(linkedList.toArray()).toEqual([1, 2, 3]);
    });

    test('`get` method returns an item in the given index', () => {
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);

        expect(linkedList.get(0)).toBe(1);
        expect(linkedList.get(1)).toBe(2);
        expect(linkedList.get(2)).toBe(3);
    });

    test('`getIndex` method returns an index of the given value.', () => {
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);

        expect(linkedList.getIndex(1)).toBe(0);
        expect(linkedList.getIndex(2)).toBe(1);
        expect(linkedList.getIndex(3)).toBe(2);
        expect(linkedList.getIndex(4)).toBe(-1);
    });

    test('`isEmpty` method checks if the list is empty', () => {
        expect(linkedList.isEmpty()).toBe(true);

        linkedList.append(1);

        expect(linkedList.isEmpty()).toBe(false);
    });

    test('`delete` method removes nodes correctly from start, end, and middle', () => {
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);

        // Removing an item from the beginning of the list
        linkedList.delete(0);

        expect(linkedList.length).toBe(2);
        expect(linkedList.toArray()).toEqual([2, 3]);
        expect(linkedList.head!.value).toBe(2);
        expect(linkedList.tail!.value).toBe(3);
        expect(linkedList.head!.next).toBe(linkedList.tail);
        expect(linkedList.tail!.prev).toBe(linkedList.head);
        expect(linkedList.head!.prev).toBe(null);

        // Removing an item from the end of the list
        linkedList.prepend(1);
        linkedList.delete(2);

        expect(linkedList.length).toBe(2);
        expect(linkedList.toArray()).toEqual([1, 2]);
        expect(linkedList.head!.value).toBe(1);
        expect(linkedList.tail!.value).toBe(2);
        expect(linkedList.head!.next).toBe(linkedList.tail);
        expect(linkedList.tail!.prev).toBe(linkedList.head);
        expect(linkedList.tail!.next).toBe(null);

        // Removing an item from the middle of the list
        linkedList.append(3);
        linkedList.delete(1);

        expect(linkedList.length).toBe(2);
        expect(linkedList.toArray()).toEqual([1, 3]);
        expect(linkedList.head!.value).toBe(1);
        expect(linkedList.tail!.value).toBe(3);
        expect(linkedList.head!.next).toBe(linkedList.tail);
        expect(linkedList.tail!.prev).toBe(linkedList.head);
    });

    test('`reverse` methods reverses the list', () => {
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.append(4);
        linkedList.append(5);
        linkedList.reverse();

        expect(linkedList.toArray()).toEqual([5, 4, 3, 2, 1]);
        expect(linkedList.head?.value).toBe(5);
        expect(linkedList.tail?.value).toBe(1);
        expect(linkedList.head?.next?.value).toBe(4);
        expect(linkedList.head?.prev).toBe(null);
        expect(linkedList.tail?.next).toBe(null);
        expect(linkedList.tail?.prev?.value).toBe(2);
    });
});
