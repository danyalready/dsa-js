function removeTarget(nums: number[], target: number) {
    let l = 0;

    for (let r = 0; r < nums.length; r++) {
        if (nums[r] !== target) {
            nums[l] = nums[r];
            l++;
        }
    }

    return l;
}

// T: O(n)
// M: O(1)

const nums = [3, 2, 2, 3];
console.log(removeTarget(nums, 3));
console.log(nums);
