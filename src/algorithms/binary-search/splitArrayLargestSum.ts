export function splitArrayLargestSum(nums: number[], k: number) {
    let l = Math.max(...nums); // T: O(n)
    let r = nums.reduce((a, c) => a + c, 0); // T: O(n)

    function canSplit(maxSum: number) {
        let pieces = 1;
        let currentSum = 0;

        for (let i = 0; i < nums.length; i++) {
            if (currentSum + nums[i] <= maxSum) {
                currentSum += nums[i];
            } else {
                pieces++;
                currentSum = nums[i];
            }
        }

        return pieces <= k;
    } // T: O(n)

    while (l < r) {
        const m = Math.floor((l + r) / 2);

        if (canSplit(m)) {
            // O(n)
            r = m;
        } else {
            l = m + 1;
        }
    } // T: O(log(S))

    return l;
}

// T: O(n log(S))
// M: O(1)
