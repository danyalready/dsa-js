const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (input) => {
    let [n, m, h, w] = input.split(" ").map(BigInt);

    function calc(a, limit) {
        let folds = 0;

        while (a > limit) {
            a = (a + 1n) / 2n;
            folds++;
        }

        return folds;
    }

    const v1 = calc(n, h) + calc(m, w);
    const v2 = calc(n, w) + calc(m, h);

    console.log(Math.min(v1, v2));
    rl.close();
});
