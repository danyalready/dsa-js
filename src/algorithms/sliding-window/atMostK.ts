function atMostK(s: string, k: number) {
    let buffer = new Array(26).fill(0);
    let l = 0;
    let distinctCount = 0;
    let count = 0;

    function idx(char: string) {
        return char.charCodeAt(0) - 97;
    }

    for (let r = 0; r < s.length; r++) {
        if (++buffer[idx(s[r])] === 1) {
            distinctCount++;
        }

        while (distinctCount > k) {
            if (--buffer[idx(s[l])] === 0) {
                distinctCount--;
            }

            l++;
        }

        count += r - l + 1;
    }

    return count;
}

function exactlyK(s: string, k: number) {
    return atMostK(s, k) - atMostK(s, k - 1);
}
