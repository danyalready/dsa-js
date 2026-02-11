function reverseString(chars: string[]) {
    let l = 0;
    let r = chars.length - 1;

    while (l < r) {
        const lChar = chars[l];
        const rChar = chars[r];

        chars[l] = rChar;
        chars[r] = lChar;

        l++;
        r--;
    }

    return chars;
}

// T: O(n)
// M: O(1)

const s = ["h", "e", "l", "l", "o"];

console.log(reverseString(s));
