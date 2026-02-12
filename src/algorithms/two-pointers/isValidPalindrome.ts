function isValidPalindrome(s: string) {
    let l = 0;
    let r = s.length - 1;

    function isPalindrome(l: number, r: number) {
        while (l < r) {
            if (s[l] !== s[r]) return false;

            l++;
            r--;
        }

        return true;
    }

    while (l < r) {
        if (s[l] !== s[r]) {
            return isPalindrome(l + 1, r) || isPalindrome(l, r - 1);
        }

        l++;
        r--;
    }

    return true;
}

// T: O(n)
// M: O(1)

console.log(isValidPalindrome("cupuuc"));
