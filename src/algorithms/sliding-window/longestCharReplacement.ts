function longestCharReplacement(s: string, k: number) {
    const buffer = new Array(26).fill(0);
    const OFFSET = 65;

    let l = 0;
    let maxF = 0;
    let maxL = 0;

    function getCharBufferIndex(c: string) {
        return c.charCodeAt(0) - OFFSET;
    }

    for (let r = 0; r < s.length; r++) {
        buffer[getCharBufferIndex(s[r])]++;

        maxF = Math.max(maxF, buffer[getCharBufferIndex(s[r])]);

        if (r - l + 1 - maxF > k) {
            buffer[getCharBufferIndex(s[l])]--;
            l++;
        }

        maxL = Math.max(maxL, r - l + 1);
    }

    return maxL;
}

// T: O(n)
// M: O(1)
