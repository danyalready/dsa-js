function longestAtMostKDistinct(s: string) {
    let l = 0;
    let maxL = 0;

    const map = new Map();

    for (let r = 0; r < s.length; r++) {
        map.set(s[r], (map.get(s[r]) || 0) + 1);

        while (map.size > 2) {
            map.set(s[l], map.get(s[l]) - 1);

            if (map.get(s[l]) === 0) map.delete(s[l]);

            l++;
        }

        maxL = Math.max(maxL, r - l + 1);
    }

    return maxL;
}

// T: O(n)
// M: O(1)

console.log(longestAtMostKDistinct("eceba"));
