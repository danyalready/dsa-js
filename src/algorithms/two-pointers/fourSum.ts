function fourSum(nums: number[], target = 0) {
    nums.sort((a, b) => a - b); // O(n log(n))

    const result = [];

    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;

            let l = j + 1;
            let r = nums.length - 1;

            while (l < r) {
                const sum = nums[i] + nums[j] + nums[l] + nums[r];

                if (sum < target) l++;
                else if (sum > target) r--;
                else {
                    while (l < r && nums[l] === nums[l + 1]) l++;
                    while (l < r && nums[r] === nums[r - 1]) r--;

                    result.push([nums[i], nums[j], nums[l], nums[r]]);

                    l++;
                    r--;
                }
            }
        }
    }

    return result;
}

// T: O(n^3)
// M: O(1)
