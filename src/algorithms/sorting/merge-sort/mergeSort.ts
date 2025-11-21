export function mergeSort(arr: number[]): number[] {
    if (arr.length < 2) return arr;

    const middleIndex = Math.floor(arr.length / 2);
    const lArr = arr.slice(0, middleIndex);
    const rArr = arr.slice(middleIndex);

    return merge(mergeSort(lArr), mergeSort(rArr));
}

function merge(lArr: number[], rArr: number[]): number[] {
    const sortedArr: number[] = [];

    let i = 0;
    let j = 0;

    while (lArr[i] && rArr[j]) {
        if (lArr[i] < rArr[j]) {
            sortedArr.push(lArr[i]);
            i++;
        } else {
            sortedArr.push(rArr[j]);
            j++;
        }
    }

    if (lArr[i]) sortedArr.push(...lArr.slice(i));
    if (rArr[j]) sortedArr.push(...rArr.slice(j));

    return sortedArr;
}
