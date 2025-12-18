export function removeDuplicates(sortedArr: number[]): number[] {
    if (sortedArr.length === 0) return [];

    let slow = 0;

    for (let fast = slow + 1; fast < sortedArr.length; fast++) {
        if (sortedArr[fast] !== sortedArr[slow]) {
            slow++;
            sortedArr[slow] = sortedArr[fast];
        }
    }

    return sortedArr.slice(0, slow + 1);
}
