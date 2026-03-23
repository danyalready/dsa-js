const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin });

rl.on("line", (input) => {
    const N = +input;

    console.log(...minPerimeterSum(N));

    rl.close();
});

function minPerimeterSum(N) {
    let k = Math.floor(Math.sqrt(N));
    const minSides = [Infinity, Infinity];

    while (k > 0) {
        const a = k;
        const b = N / k;

        if (Number.isInteger(b) && minSides[0] + minSides[1] > a + b) {
            minSides[0] = a;
            minSides[1] = b;
        }

        k--;
    }

    return minSides;
}
