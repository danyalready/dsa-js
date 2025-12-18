import { removeDuplicates } from "./removeDuplicates";

describe("removeDuplicates", () => {
    test("removes duplicates", () => {
        const sortedArray = [1, 1, 2, 2, 3];
        expect(removeDuplicates(sortedArray)).toEqual([1, 2, 3]);
    });

    test("returns an empty array if input is empty", () => {
        const sortedArray: number[] = [];
        expect(removeDuplicates(sortedArray)).toEqual([]);
    });
});
