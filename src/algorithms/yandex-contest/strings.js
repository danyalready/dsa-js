const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin });

let n, m;
const events = [];
const string = [];

rl.on("line", (line) => {
    if (n === undefined) [n, m] = line.trim().split(" ").map(Number);
    else if (events.length < n) events.push(line.trim().split(" ").map(Number));
    else {
        string.push(Number(line));

        if (string.length === m) rl.close();
    }
});

rl.on("close", () => {
    const result = new Array(string.length).fill(0);

    for (const [l, r, x] of events) {
        for (let i = 0; i < string.length; i++) {
            const pos = string[i];

            if (l <= pos && pos <= r) {
                if ((pos - l) % 2 === 0) {
                    result[i] += x;
                } else {
                    result[i] -= x;
                }
            }
        }
    }

    result.forEach((e) => console.log(e));
});
