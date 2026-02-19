function minSubarrSum(nums: number[], target: number) {
    let l = 0;
    let sum = 0;
    let minL = Infinity;

    for (let r = 0; r < nums.length; r++) {
        sum += nums[r];

        while (sum >= target) {
            minL = Math.min(minL, r - l + 1);
            sum -= nums[l];
            l++;
        }
    }

    return minL === Infinity ? 0 : minL;
}

// T: O(n)
// M: O(1)

console.log(minSubarrSum([2, 3, 1, 2, 4, 3], 7));
