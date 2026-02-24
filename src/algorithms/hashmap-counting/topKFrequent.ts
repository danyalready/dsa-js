export function topKFrequent(nums: number[], k: number) {
    // 1. count elements
    const map = new Map<number, number>(); // number, frequency

    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    // 2. store elements in bucket (use value as index)
    const buckets: number[][] = new Array(nums.length).fill(null).map(() => []);

    for (const [number, frequency] of map.entries()) {
        buckets[frequency - 1].push(number);
    }

    // 3. return top k bucket elements
    const result: number[] = [];

    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        for (const num of buckets[i]) {
            result.push(num);

            if (result.length === k) break;
        }
    }

    return result;
}

// T: O(n)
// M: O(n)
