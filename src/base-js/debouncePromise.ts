export function debouncePromise<T extends (...args: any[]) => any>(
    fn: T,
    delay: number,
): (...args: Parameters<T>) => Promise<ReturnType<T>> {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let lastReject: ((reason?: any) => void) | null = null;

    return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
        if (timeoutId !== null) {
            clearTimeout(timeoutId);
            lastReject?.(new Error("Debounced"));
        }

        return new Promise<ReturnType<T>>((resolve, reject) => {
            lastReject = reject;

            timeoutId = setTimeout(() => {
                try {
                    const result = fn.apply(this, args);

                    resolve(result);
                } catch (err) {
                    reject(err);
                }
            }, delay);
        });
    };
}
