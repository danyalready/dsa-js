const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n;
const turtles = [];

rl.on("line", (input) => {
    if (n === undefined) n = +input.trim();
    else {
        turtles.push(input.trim().split(" ").map(Number));

        if (turtles.length === n) rl.close();
    }
});

rl.on("close", () => {
    const set = new Set();
    let ans = 0;

    for (let i = 0; i < turtles.length; i++) {
        const [l, r] = turtles[i];

        if (l >= 0 && r >= 0 && l + r === n - 1 && !set.has(`${l}-${r}`)) {
            set.add(`${l}-${r}`);
            ans++;
        }
    }

    console.log(ans);
});
