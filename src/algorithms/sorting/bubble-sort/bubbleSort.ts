// inp: 5,11,6,3,4,7,3,2,6
// out: 2,3,3,4,5,6,6,7,11
export function bubbleSort(arr: number[]): number[] {
    const sortedArr = [...arr];

    for (let i = sortedArr.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            const a = sortedArr[j];
            const b = sortedArr[j + 1];

            if (a > b) {
                sortedArr[j] = b;
                sortedArr[j + 1] = a;
            }
        }
    }

    return sortedArr;
}
