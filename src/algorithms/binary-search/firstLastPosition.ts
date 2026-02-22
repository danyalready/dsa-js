export function firstLastPosition(nums: number[], target: number) {
    function lowerBound(nums: number[], target: number) {
        let l = 0;
        let r = nums.length;

        while (l < r) {
            const m = Math.floor((l + r) / 2);

            if (nums[m] < target) {
                l = m + 1;
            } else {
                r = m;
            }
        }

        return l;
    }

    const fst = lowerBound(nums, target);

    if (fst === nums.length || nums[fst] !== target) {
        return [-1, -1];
    }

    const lst = lowerBound(nums, target + 1) - 1;

    return [fst, lst];
}

// T: O(log(n))
// M: O(1)
