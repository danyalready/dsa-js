function twoSum(sortedNums: number[], target: number) {
    let l = 0;
    let r = sortedNums.length - 1;

    while (l < r) {
        const sum = sortedNums[l] + sortedNums[r];

        if (sum === target) break;

        if (sum > target) r--;
        else l++;
    }

    return [l, r];
}

// T: O(n)
// M: O(1)

console.log(twoSum([2, 7, 11, 15], 9));
