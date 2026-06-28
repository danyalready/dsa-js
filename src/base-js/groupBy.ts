declare global {
    interface Array<T> {
        groupBy(fn: (item: T) => string): Record<string, T[]>;
    }
}

Array.prototype.groupBy = function <T>(this: T[], fn: (item: T) => string): Record<string, T[]> {
    const result: Record<string, T[]> = {};

    for (const item of this) {
        const key = fn(item);

        if (key in result) {
            result[key].push(item);
        } else {
            result[key] = [item];
        }
    }

    return result;
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const fn = function (n: number) {
    return String(n > 5);
};

console.log(array.groupBy(fn));
