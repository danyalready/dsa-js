export function binarySearchRecursive(
    sortedArr: number[],
    value: number,
): boolean {
    if (sortedArr.length <= 1) {
        return sortedArr[0] === value;
    }

    const midIndex = Math.floor(sortedArr.length / 2);

    if (value < sortedArr[midIndex]) {
        return binarySearchRecursive(sortedArr.slice(0, midIndex), value);
    } else {
        return binarySearchRecursive(sortedArr.slice(midIndex), value);
    }
}

export function binarySearch(arr: number[], target: number) {
    let l = 0;
    let r = arr.length - 1;

    while (l < r) {
        const m = Math.floor((l + r) / 2);

        if (arr[m] === target) return m;

        if (arr[m] < target) l = m + 1;
        else r = m - 1;
    }

    return -1;
}
