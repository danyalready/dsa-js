function threeSumClosest(nums: number[], target: number) {
    nums.sort((a, b) => a - b); // O(n log(n))

    let closest = nums[0] + nums[1] + nums[2];

    for (let i = 0; i < nums.length - 2; i++) {
        let l = i + 1;
        let r = nums.length - 1;

        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];

            if (Math.abs(sum - target) < Math.abs(closest - target)) {
                closest = sum;
            }

            if (sum === target) return sum;

            if (sum < target) l++;
            else r--;
        }
    }

    return closest;
}

// T: O(n^2)
// M: O(1)

const nums = [-1, 2, 1, -4];
const target = 1;

console.log(threeSumClosest(nums, target));
