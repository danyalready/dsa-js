const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n;
let candies;

rl.on("line", (input) => {
    if (n === undefined) n = +input;
    else {
        candies = input.trim().split(" ").map(Number);

        rl.close();
    }
});

rl.on("close", () => {
    const map = new Map();

    let l = 0;
    let max = 0;

    for (let r = 0; r < n; r++) {
        map.set(candies[r], (map.get(candies[r]) || 0) + 1);

        while (map.size > 2) {
            map.set(candies[l], (map.get(candies[l]) || 0) - 1);

            if (map.get(candies[l]) === 0) map.delete(candies[l]);

            l++;
        }

        if (map.size === 2) max = Math.max(max, r - l + 1);
    }

    console.log(max);
});
