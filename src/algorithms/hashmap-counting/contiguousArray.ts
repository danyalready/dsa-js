export function contiguousArray(nums: number[]) {
    const map = new Map<number, number>(); // prefix -> index
    map.set(0, -1);

    let maxLen = 0;
    let prefix = 0;

    for (let i = 0; i < nums.length; i++) {
        prefix += nums[i] === 1 ? 1 : -1;

        if (map.has(prefix)) {
            maxLen = Math.max(maxLen, i - map.get(prefix)!);
        } else {
            map.set(prefix, i);
        }
    }

    return maxLen;
}

// T: O(n)
// M: O(n)
