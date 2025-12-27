export function isPalindrome(row: string): boolean {
    let l = 0;
    let r = row.length - 1;

    while (l < r) {
        while (l < r && /[^a-z]/i.test(row[l])) l++;
        while (l < r && /[^a-z]/i.test(row[r])) r--;

        if (row[l].toLowerCase() !== row[r].toLowerCase()) return false;

        l++;
        r--;
    }

    return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
