export function getMaxSum(numbers: number[], k: number): number[] {
    let max = 0;
    let window = [];
    let current = 0;
    let l = 0;
    let r = l + k;

    // fill the window
    for (let i = 0; i < r; i++) {
        window.push(numbers[i]);
        current += numbers[i];
        max = current;
    }

    while (r < numbers.length) {
        current -= numbers[l];
        current += numbers[r];

        if (max < current) {
            max = current;
            window = numbers.slice(l + 1, r + 1);
        }

        l++;
        r++;
    }

    return window;
}
