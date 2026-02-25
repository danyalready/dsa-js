export function longestConsecutive(nums: number[]): number {
    if (nums.length === 0) return 0;

    const set = new Set(nums);
    let max = 0;

    for (const num of set) {
        if (!set.has(num - 1)) {
            let current = num;
            let count = 1;

            while (set.has(current + 1)) {
                current++;
                count++;
            }

            max = Math.max(max, count);
        }
    }

    return max;
}

// T: O(n)
// M: O(n)
