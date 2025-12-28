// 100  => 10
// 17   => 5

// log n = 2, base = x
// n = 100, n / 2 = 50,

function findFirstSqrtValue(n: number): number {
    let l = 0;
    let r = n;

    while (l < r) {
        const mid = Math.floor((l + r) / 2);

        if (mid ** 2 >= n) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }

    return l;
}

console.log(findFirstSqrtValue(100));
