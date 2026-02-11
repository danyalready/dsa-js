function longestSubstring(str: string) {
    const chars = new Set();

    let l = 0;
    let length = 0;

    for (let r = 0; r < str.length; r++) {
        while (chars.has(str[r])) {
            chars.delete(str[l]);
            l++;
        }

        chars.add(str[r]);

        if (length < r - l + 1) length = r - l + 1;
    }

    return length;
}

// T: O(n)
// M: best case O(k); worst case O(n)

console.log(longestSubstring("abcabcbb"));
