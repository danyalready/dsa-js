// current: 5
//                     l  r
// nums = [2, 1, 5, 2, 3, 2], S = 7
// ответ: 2 ([5,2])
export function getMinLengthSum(arr: number[], S: number): number[] {
    let current = 0;
    let minLength = Infinity; // 2
    let l = 0;
    let bestL,
        bestR = 0;

    for (let r = 0; r < arr.length; r++) {
        current += arr[r];

        while (current >= S) {
            const curLength = r + 1 - l; // 6-3=3

            if (minLength > curLength) {
                bestL = l;
                bestR = r;
                minLength = curLength; // 2
            }

            current -= arr[l];
            l++;
        }
    }

    return arr.slice(bestL, bestR + 1);
}

console.log(getMinLengthSum([2, 1, 5, 2, 3, 2], 7));
