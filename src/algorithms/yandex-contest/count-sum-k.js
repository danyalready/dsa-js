const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin });

let n, k;
let cars;

rl.on("line", (input) => {
    if (n === undefined) [n, k] = input.trim().split(" ").map(Number);
    else {
        cars = input.trim().split(" ").map(Number);

        rl.close();
    }
});

rl.on("close", () => {
    console.log(countSumK(cars, k));
});

function countSumK(numbers, k) {
    const prefixS = new Array(numbers.length + 1).fill(0);

    for (let i = 0; i < numbers.length; i++) {
        prefixS[i + 1] = prefixS[i] + numbers[i];
    }

    let count = 0;
    let l = 0;

    for (let r = 1; r < prefixS.length; r++) {
        while (prefixS[r] - prefixS[l] >= k) {
            if (prefixS[r] - prefixS[l] === k) count++;

            l++;
        }
    }

    return count;
}
