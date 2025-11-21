export function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1];
    const lArr: number[] = [];
    const rArr: number[] = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) lArr.push(arr[i]);
        else rArr.push(arr[i]);
    }

    return [...quickSort(lArr), pivot, ...quickSort(rArr)];
}
