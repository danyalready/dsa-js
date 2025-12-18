// qwerfffqwer => 3
// 11234535556 => 3
// qqerqwerqwe => 2
export function getMaxConsecutiveElements(row: string): number {
    let result = 0;
    let currentLetterIndex = 0;

    while (currentLetterIndex < row.length) {
        let nextLetterIndex = currentLetterIndex + 1;

        while (
            nextLetterIndex < row.length &&
            row[currentLetterIndex] === row[nextLetterIndex]
        ) {
            nextLetterIndex++;
        }

        result = Math.max(result, nextLetterIndex - currentLetterIndex);
        currentLetterIndex = nextLetterIndex;
    }

    return result;
}
