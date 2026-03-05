declare global {
    interface Function {
        myBind<T extends (...args: any[]) => any>(
            this: T,
            boundThis: ThisParameterType<T>,
            ...boundArgs: any[]
        ): (...args: any[]) => ReturnType<T>;
    }
}

Function.prototype.myBind = function <T extends (...args: any[]) => any>(
    this: T,
    boundThis: ThisParameterType<T>,
    ...boundArgs: any[]
) {
    const fn = this;

    function bound(this: any, ...args: any[]) {
        const isNew = this instanceof bound;
        const context = isNew ? this : boundThis;

        return fn.apply(context, [...boundArgs, ...args]);
    }

    bound.prototype = Object.create(fn.prototype);

    return bound;
};
