function maxSubarray(nums: number[], k: number) {
    let l = 0;

    let max = 0;
    let sum = 0;

    // 1. compute intial sum
    for (let i = 0; i < k; i++) sum += nums[i];
    max = sum;

    for (let r = k; r < nums.length; r++) {
        sum -= nums[l];
        sum += nums[r];

        if (max < sum) max = sum;

        l++;
    }

    return max;
}

// T: O(n)
// M: O(1)

console.log(maxSubarray([2, 1, 5, 1, 3, 2], 3));
