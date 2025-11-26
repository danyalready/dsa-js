export function binarySearch(sortedArr: number[], value: number): boolean {
    if (sortedArr.length <= 1) {
        return sortedArr[0] === value;
    }

    const midIndex = Math.floor(sortedArr.length / 2);

    if (value < sortedArr[midIndex]) {
        return binarySearch(sortedArr.slice(0, midIndex), value);
    } else {
        return binarySearch(sortedArr.slice(midIndex), value);
    }
}
