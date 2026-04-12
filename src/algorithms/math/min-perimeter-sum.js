const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin });

rl.on("line", (input) => {
    const N = +input;

    console.log(...minPerimeterSum(N));

    rl.close();
});

function minPerimeterSum(N) {
    let k = Math.floor(Math.sqrt(N));

    while (k > 0) {
        if (N % k === 0) return [k, N / k];

        k--;
    }
}
