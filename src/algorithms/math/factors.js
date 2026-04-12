const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin });

rl.on("line", (input) => {
    const n = +input;

    console.log(...factors(n));

    rl.close();
});

function factors(n) {
    let k = Math.floor(Math.sqrt(n));

    while (k > 0) {
        const a = k;
        const b = n / k;

        if (Number.isInteger(b)) return [a, b];

        k--;
    }

    return [-1, -1];
}
