function withRetry<T extends (this: ThisParameterType<any>, ...args: any[]) => any>(
    fn: T,
    maxRetries: number,
): (this: ThisParameterType<T>, ...args: Parameters<T>) => Promise<Awaited<ReturnType<T>>> {
    return async function (this: ThisParameterType<T>, ...args: Parameters<T>) {
        let lastError: unknown;

        for (let i = 0; i < maxRetries; i++) {
            try {
                return await fn.apply(this, args);
            } catch (error) {
                lastError = error;
            }
        }

        throw lastError;
    };
}

const o = {
    i: 0,
    f: async function () {
        if (this.i < 3) {
            this.i++;
            throw new Error();
        }
        return this.i;
    },
};

const fooWithRetries = withRetry(o.f, 4);
fooWithRetries.call(o).then(console.log);
