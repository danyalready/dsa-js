const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin });

let l, r;
let numbers = [];

rl.on("line", (input) => {
    if (l === undefined) [l, r] = input.trim().split(" ").map(Number);
    else {
        numbers = input.trim().split(" ").map(Number);

        rl.close();
    }
});

rl.on("close", () => {
    const prefixS = new Array(numbers.length + 1).fill(0);

    for (let i = 0; i < numbers.length; i++) {
        prefixS[i + 1] = numbers[i] === 0 ? prefixS[i] + 1 : prefixS[i];
    }

    console.log(prefixS[r + 1] - prefixS[l]);
});
