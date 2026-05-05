const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin });

let n, k;
let numbers;

rl.on("line", (input) => {
    if (n === undefined) [n, k] = input.trim().split(" ").map(Number);
    else {
        numbers = input.trim().split(" ").map(Number);

        rl.close();
    }
});

rl.on("close", () => {
    const prefix = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + numbers[i];
    }

    let l = 0;
    let max = -Infinity;

    for (let r = 0; r <= n; r++) {
        const sum = prefix[r] - prefix[l];

        if (sum % k !== 0) max = Math.max(max, sum);
        if (sum < 0) l = r;
    }

    if (max === -Infinity) console.log(0);
    else console.log(max);
});
