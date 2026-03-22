const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let g, c;
let W, S;

rl.on("line", (input) => {
    if (g === undefined) [g, c] = input.trim().split(" ").map(Number);
    else {
        if (W === undefined) W = input.trim();
        else {
            S = input.trim();

            rl.close();
        }
    }
});

rl.on("close", () => {
    const map = new Map();
    const cur = new Map();
    let l = 0;
    let count = 0;

    for (let i = 0; i < g; i++) {
        if (!map.has(W[i])) map.set(W[i], 0);

        map.set(W[i], map.get(W[i]) + 1);
    }

    for (let r = 0; r < c; r++) {
        if (!map.has(S[r])) {
            l = r + 1;
            cur.clear();

            continue;
        }

        while (cur.has(S[r]) && cur.get(S[r]) + 1 > map.get(S[r])) {
            cur.set(S[l], cur.get(S[l]) - 1);

            if (cur.get(S[l]) === 0) cur.delete(S[l]);

            l++;
        }

        if (!cur.has(S[r])) cur.set(S[r], 1);
        else cur.set(S[r], cur.get(S[r]) + 1);

        if (r - l + 1 === g) count++;
    }

    console.log(count);
});
