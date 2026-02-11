function threeSum(nums: number[]) {
    nums.sort((a, b) => a - b); // O(n log(n))

    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let l = i + 1;
        let r = nums.length - 1;

        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];

            if (sum === 0) {
                result.push([nums[i], nums[l], nums[r]]);

                l++;
                r--;

                while (l < r && nums[l] === nums[l - 1]) l++;
                while (l < r && nums[r] === nums[r + 1]) r--;
            } else if (sum < 0) l++;
            else r--;
        }
    }

    return result;
}

// T: O(n^2)
// M: O(k); O(n^2)

const nums = [-1, 0, 1, 2, -1, -4];

console.log(threeSum(nums));
