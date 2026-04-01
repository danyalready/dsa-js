const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin });

let n;
let numbers;

rl.on("line", (input) => {
    if (n === undefined) n = +input;
    else {
        numbers = input.trim().split(" ").map(Number);

        rl.close();
    }
});

rl.on("close", () => {
    let curr = numbers[0];
    let maxSum = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        curr = Math.max(numbers[i], curr + numbers[i]);
        maxSum = Math.max(maxSum, curr);
    }

    console.log(maxSum);
});
