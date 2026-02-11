function removeDuplicates(sortedNums: number[]) {
    if (sortedNums.length === 0) return 0;

    let l = 0;

    for (let r = 1; r < sortedNums.length; r++) {
        if (sortedNums[l] !== sortedNums[r]) {
            l++;
            sortedNums[l] = sortedNums[r];
        }
    }

    return l + 1;
}

// T: O(n)
// M: O(1)

const arr = [1, 1, 2, 2, 3];
console.log(removeDuplicates(arr));
console.log(arr);
