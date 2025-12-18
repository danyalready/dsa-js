import { getMaxConsecutiveElements } from "./getMaxConsecutiveElements";

// qwerfffqwer => 3
// 11234535556 => 3
// qqerqwerqwe => 2

describe("getMaxConsecutiveElements", () => {
    test("given a valid row", () => {
        const row = "qwerfffqwer";
        expect(getMaxConsecutiveElements(row)).toBe(3);
    });

    test("no consecutive letters in row", () => {
        const row = "qwer";
        expect(getMaxConsecutiveElements(row)).toBe(1);
    });
});
