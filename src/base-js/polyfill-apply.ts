declare global {
    interface Function {
        myApply<T, A extends any[], R>(
            this: (this: T, ...args: A) => R,
            thisArg: T,
            args?: A,
        ): R;
    }
}

Function.prototype.myApply = function <T, A extends any[], R>(
    this: (this: T, ...args: A) => R,
    thisArg: T,
    args?: A,
): R {
    const context = thisArg ?? globalThis;

    const fnKey = Symbol();
    (context as any)[fnKey] = this;

    const result = args
        ? (context as any)[fnKey](...args)
        : (context as any)[fnKey]();

    delete (context as any)[fnKey];

    return result;
};
