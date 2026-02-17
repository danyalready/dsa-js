function longestUniqueSubstr(s: string) {
    if (s.length === 0) return 0;

    const chars = new Set(s[0]);

    let l = 0;
    let maxL = 1;

    for (let r = 1; r < s.length; r++) {
        while (chars.has(s[r])) {
            chars.delete(s[l]);
            l++;
        }

        chars.add(s[r]);

        maxL = Math.max(maxL, r - l + 1);
    }

    return maxL;
}

// T: O(n)
// M: O(k); worst O(n)

console.log(longestUniqueSubstr("abcabcbb"));
