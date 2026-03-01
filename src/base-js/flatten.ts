export function flatten(array: any[]): any[] {
    const result: any[] = [];
    const stack = [...array];

    while (stack.length) {
        const el = stack.pop();

        if (Array.isArray(el)) stack.push(...el);
        else result.push(el);
    }

    return result;
}

// T: O(n)
// M: O(n)
