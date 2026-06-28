type MultiDimensionalArray<T = unknown> = (T | MultiDimensionalArray<T>)[];

declare global {
    interface Array<T> {
        myFlat(this: MultiDimensionalArray<T>, depth?: number): MultiDimensionalArray<T>;
    }
}

Array.prototype.myFlat = function <T>(
    this: MultiDimensionalArray<T>,
    depth: number = 1,
): MultiDimensionalArray<T> {
    if (depth <= 0) return this;

    const result: MultiDimensionalArray<T> = [];

    for (const thisItem of this) {
        if (Array.isArray(thisItem)) result.push(...thisItem.myFlat(depth - 1));
        else result.push(thisItem);
    }

    return result;
};

const arr = [1, 2, 3, [1, 2, 3], [1, 2, [1, [2]]]];

console.log(arr.myFlat());
