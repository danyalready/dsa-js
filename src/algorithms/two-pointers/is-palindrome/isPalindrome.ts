export function isPalindrome(row: string): boolean {
    const trimmed = row.replace(" ", "");

    let left = 0;
    let right = trimmed.length - 1;

    while (left < right) {
        if (trimmed[left] !== trimmed[right]) return false;

        left++;
        right--;
    }

    return true;
}
