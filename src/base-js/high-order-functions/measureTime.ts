function measureTime<T extends (...args: any[]) => any>(fn: T): T {
    return function (this: ThisParameterType<T>, ...args: Parameters<T>): ReturnType<T> {
        const start = performance.now();

        try {
            const result = fn.apply(this, args);

            if (result instanceof Promise) {
                return result.finally(() => {
                    console.log(`${fn.name} took ${performance.now() - start}ms`);
                }) as ReturnType<T>;
            }

            console.log(`${fn.name} took ${performance.now() - start}ms`);

            return result;
        } catch (error) {
            console.log(`${fn.name} took ${performance.now() - start}ms`);
            throw error;
        }
    } as T;
}

async function getUsers() {
    await new Promise((r) => setTimeout(r, 250));
    return ["a", "b"];
}

measureTime(getUsers)().then(console.log);
