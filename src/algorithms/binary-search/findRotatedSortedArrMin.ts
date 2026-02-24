export function findRotatedSortedArrMin(nums: number[]) {
    let l = 0;
    let r = nums.length;

    while (l < r) {
        const m = Math.floor((r + l) / 2);

        if (nums[m] > nums[r]) {
            l = m + 1;
        } else {
            r = m;
        }
    }

    return l;
}
