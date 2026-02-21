function subarrayProductLessThanK(nums: number[], k: number) {
    if (k <= 1) return 0;

    let l = 0;
    let product = 1;
    let count = 0;

    for (let r = 0; r < nums.length; r++) {
        product *= nums[r];

        while (product >= k) {
            product /= nums[l];
            l++;
        }

        count += r - l + 1;
    }

    return count;
}

// T: O(n)
// M: O(1)
