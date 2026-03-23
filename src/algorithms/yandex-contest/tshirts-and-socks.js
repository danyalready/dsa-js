const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const inputs = [];

rl.on("line", (input) => {
    inputs.push(+input);

    if (inputs.length === 4) rl.close();
});

rl.on("close", () => {
    const [A, B, C, D] = inputs;
    const results = [];

    if (A + B >= B + 1 && C + D >= D + 1) results.push([B + 1, D + 1]); // blue set
    if (A + B >= A + 1 && C + D >= C + 1) results.push([A + 1, C + 1]); // red set
    if (A + B >= Math.max(A, B) + 1) results.push([Math.max(A, B) + 1, 1]); // both colors of tshirst
    if (C + D >= Math.max(C, D) + 1) results.push([1, Math.max(C, D) + 1]); // both colors of socks

    let minS = results[0][0] + results[0][1];
    let minI = 0;

    for (let i = 1; i < results.length; i++) {
        const curS = results[i][0] + results[i][1];

        if (minS > curS) {
            minS = curS;
            minI = i;
        }
    }

    console.log(results[minI][0], results[minI][1]);
});
