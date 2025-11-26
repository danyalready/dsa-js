export function insertionSort(arr: number[]): number[] {
    const sortedArr = [...arr];

    for (let i = 1; i < sortedArr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (sortedArr[i] < sortedArr[j]) {
                const [key] = sortedArr.splice(i, 1);
                sortedArr.splice(j, 0, key);
            }
        }
    }

    return sortedArr;
}
