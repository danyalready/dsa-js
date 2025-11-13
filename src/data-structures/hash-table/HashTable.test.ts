import { HashTable } from './HashTable';

describe('HashTable', () => {
    let table: HashTable<number>;

    beforeEach(() => {
        table = new HashTable<number>(5);
    });

    test('`set` add an pair item`', () => {
        table.set('apple', 10);
        table.set('banana', 20);

        expect(table.get('apple')).toBe(10);
        expect(table.get('banana')).toBe(20);
    });

    test('`get` returns undefined if no item was found', () => {
        expect(table.get('missing')).toBeUndefined();
    });

    test('`set` updates an existing pair value', () => {
        table.set('apple', 10);
        table.set('apple', 99);

        expect(table.get('apple')).toBe(99);
    });

    test('`delete` removes a pair', () => {
        table.set('apple', 10);
        const deleted = table.delete('apple');

        expect(deleted).toBe(true);
        expect(table.get('apple')).toBeUndefined();
    });

    test('`delete` returns false when saving a non-existent key', () => {
        expect(table.delete('unknown')).toBe(false);
    });

    test('`set` handles collisions correctly', () => {
        const key1 = 'a';
        const key2 = 'f'; // 'a'.charCodeAt(0) = 97, 'f' = 102 → 97 % 5 = 2, 102 % 5 = 2
        table.set(key1, 10);
        table.set(key2, 20);

        expect(table.get(key1)).toBe(10);
        expect(table.get(key2)).toBe(20);

        table.delete(key1);
        expect(table.get(key1)).toBeUndefined();
        expect(table.get(key2)).toBe(20);
    });

    test('keeps the correct number of buckets', () => {
        expect(table.buckets.length).toBe(5);
    });
});
