// | Case                           | Complexity |
// | ------------------------------ | ---------- |
// | **Best case (already sorted)** | **O(n)**   |
// | **Average case**               | **O(n²)**  |
// | **Worst case**                 | **O(n²)**  |
export function bubbleSort(arr: number[]): number[] {
    const sortedArr = [...arr];

    for (let i = sortedArr.length - 1; i >= 0; i--) {
        let isSwapped = false;

        for (let j = 0; j < i; j++) {
            const a = sortedArr[j];
            const b = sortedArr[j + 1];

            if (a > b) {
                sortedArr[j] = b;
                sortedArr[j + 1] = a;
                isSwapped = true;
            }
        }

        if (!isSwapped) break;
    }

    return sortedArr;
}
