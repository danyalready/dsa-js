const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let K1, M, K2, P2, N2;

rl.on("line", (input) => {
    [K1, M, K2, P2, N2] = input.split(" ").map(Number);

    rl.close();
});

rl.on("close", () => {
    if (N2 > M) return console.log("-1 -1");

    const setP = new Set();
    const setN = new Set();

    for (let X = 1; X < 10 ** 6; X++) {
        const l = (P2 - 1) * X * M + (N2 - 1) * X;
        const r = (P2 - 1) * X * M + N2 * X;

        if (l < K2 && K2 <= r) {
            const P1 = Math.ceil(K1 / (X * M));
            const N1 = Math.ceil((K1 - (P1 - 1) * X * M) / X);

            setP.add(P1);
            setN.add(N1);
        }
    }

    let P = 0;
    let N = 0;

    if (setP.size === 1) P = [...setP][0];
    if (setN.size === 1) N = [...setN][0];

    if (setP.size === 0 || setN.size === 0) console.log("-1 -1");
    else console.log(P + " " + N);
});
