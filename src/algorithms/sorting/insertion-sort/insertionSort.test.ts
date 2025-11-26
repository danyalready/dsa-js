import { insertionSort } from './insertionSort';

describe('insertionSort', () => {
    test('should sort an array of numbers in ascending order', () => {
        const input = [5, 3, 8, 4, 2];
        const result = insertionSort(input);
        expect(result).toEqual([2, 3, 4, 5, 8]);
    });

    test('should return an empty array when input is empty', () => {
        const input: number[] = [];
        const result = insertionSort(input);
        expect(result).toEqual([]);
    });

    test('should handle an already sorted array', () => {
        const input = [1, 2, 3, 4];
        const result = insertionSort(input);
        expect(result).toEqual([1, 2, 3, 4]);
    });

    test('should handle a reversed array', () => {
        const input = [9, 7, 5, 3, 1];
        const result = insertionSort(input);
        expect(result).toEqual([1, 3, 5, 7, 9]);
    });

    test('should handle an array with duplicate values', () => {
        const input = [4, 1, 3, 1, 2];
        const result = insertionSort(input);
        expect(result).toEqual([1, 1, 2, 3, 4]);
    });

    test('should not mutate the original array', () => {
        const input = [3, 2, 1];
        const copy = [...input];

        insertionSort(input);

        expect(input).toEqual(copy); // original must stay unchanged
    });
});
