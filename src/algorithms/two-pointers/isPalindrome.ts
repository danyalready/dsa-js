function isPalindrome(row: string) {
    let l = 0;
    let r = row.length - 1;

    const regEx = /[a-z0-9]/;

    while (l < r) {
        const lChar = row[l].toLowerCase();
        const rChar = row[r].toLowerCase();

        if (!regEx.test(lChar)) {
            l++;
            continue;
        }

        if (!regEx.test(rChar)) {
            r--;
            continue;
        }

        if (lChar !== rChar) return false;

        l++;
        r--;
    }

    return true;
}

// T: O(n)
// M: O(1)

console.log(isPalindrome("race a car"));
