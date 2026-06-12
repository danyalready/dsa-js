const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin });

rl.on("line", (input) => {
    const N = +input;

    console.log(...pack(N));

    rl.close();
});

function pack(N) {
    let k = Math.floor(Math.sqrt(N));
    const result = new Array(2);

    while (k > 0) {
        const a = k;
        const b = N / k;

        if (result[0] === undefined && Number.isInteger(b)) {
            result[0] = a;
            result[1] = b;
        }

        if (Number.isInteger(b) && Math.abs(result[0] - result[1]) > Math.abs(a - b)) {
            result[0] = a;
            result[1] = b;
        }

        k--;
    }

    return result;
}
