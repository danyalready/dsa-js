export function myNew<T, A extends any[]>(
    Constructor: new (...args: A) => T,
    ...args: A
): T {
    const obj = Object.create(Constructor.prototype);

    const result = Constructor.apply(obj, args);

    return result !== null &&
        (typeof result === "object" || typeof result === "function")
        ? result
        : obj;
}
