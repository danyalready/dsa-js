export function subarraySumEqualsK(nums: number[], k: number): number {
    const map = new Map();
    map.set(0, 1);

    let count = 0;
    let prefix = 0;

    for (const num of nums) {
        prefix += num;

        if (map.has(prefix - k)) {
            count += map.get(prefix - k);
        }

        map.set(prefix, (map.get(prefix) || 0) + 1);
    }

    return count;
}

// T: O(n)
// M: O(n)
