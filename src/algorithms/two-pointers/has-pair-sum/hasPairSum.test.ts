import { hasPairSum } from "./hasPairSum";

describe("hasPairSum", () => {
    test("given array has a pair sum", () => {
        const sortedArray = [1, 2, 3, 4, 5, 6];
        expect(hasPairSum(sortedArray, 7)).toBeTruthy();
    });

    test("given array doesn't have a pair sum", () => {
        const sortedArray = [1, 2, 3, 4, 5, 6];
        expect(hasPairSum(sortedArray, 12)).toBeFalsy();
    });
});
