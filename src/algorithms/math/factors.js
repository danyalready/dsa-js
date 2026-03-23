const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin });

rl.on("line", (input) => {
    const N = +input;

    console.log(...factors(N));

    rl.close();
});

function factors(N) {
    let k = Math.floor(Math.sqrt(N));

    while (k > 0) {
        const a = k;
        const b = N / a;

        if (Number.isInteger(b)) return [a, b];

        k--;
    }

    return [-1, -1];
}
