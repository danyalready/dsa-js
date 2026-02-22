export function searchInsertPosition(nums: number[], target: number) {
    let l = 0;
    let r = nums.length;

    while (l < r) {
        const m = Math.floor((l + r) / 2);

        if (nums[m] < target) l = m + 1;
        else r = m;
    }

    return l;
}

// T: O(log(n))
// M: O(1)
