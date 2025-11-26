import { binarySearch } from './binarySearch';

describe('binarySearch', () => {
    const arr = [5, 2, 4, 6, 1, 3];

    test('if element is in the arr, `true` is returned.', () => {
        expect(binarySearch(arr, 4)).toBeTruthy();
    });

    test('if element is not in the arr, `false` is returned.', () => {
        expect(binarySearch(arr, 7)).toBeFalsy();
    });
});
