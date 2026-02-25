export function groupAnagrams(words: string[]): string[][] {
    const map = new Map<string, string[]>();

    for (const word of words) {
        const bucket = new Array(26).fill(0);

        for (const char of word) {
            bucket[char.charCodeAt(0) - 97]++;
        }

        const key = bucket.join("");

        map.set(key, [...(map.get(key) || []), word]);
    }

    return Array.from(map.values());
}

// T: O(n * m)
// M: O(n * m)
