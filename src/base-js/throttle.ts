export function throttle<T extends (...args: any[]) => any>(
    fn: T,
    delay: number,
): (...args: Parameters<T>) => void {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let lastArgs: Parameters<T> | null = null;
    let lastThis: ThisParameterType<T> | null = null;

    return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
        lastArgs = args;
        lastThis = this;

        if (timeoutId !== null) return;

        timeoutId = setTimeout(() => {
            if (lastArgs) fn.apply(lastThis, lastArgs);

            timeoutId = null;
            lastArgs = null;
            lastThis = null;
        }, delay);
    };
}
