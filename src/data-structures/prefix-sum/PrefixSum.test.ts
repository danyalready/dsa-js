import PrefixSum from "./PrefixSum";

describe("PrefixSum", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7];
    const results = [0, 1, 3, 6, 10, 15, 21, 28];
    const prefixSum = new PrefixSum(numbers);

    test("prefix check", () => {
        for (let i = 0; i < results.length; i++) {
            expect(prefixSum.sums[i]).toBe(results[i]);
        }
    });

    test("`sum` method must return the sum in the given range", () => {
        expect(prefixSum.sum(1, 3)).toBe(9);
        expect(prefixSum.sum(0, 2)).toBe(6);
    });
});
