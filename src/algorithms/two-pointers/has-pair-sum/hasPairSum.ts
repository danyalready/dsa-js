export function hasPairSum(sortedArr: number[], target: number): boolean {
    let left = 0;
    let right = sortedArr.length;

    while (left < right) {
        const sum = sortedArr[left] + sortedArr[right];

        if (sum === target) return true;

        if (sum < target) left++;
        else right--;
    }

    return false;
}
