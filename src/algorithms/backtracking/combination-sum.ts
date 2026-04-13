const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin });

let target: number;
let numbers: number[];

rl.on("line", (line: string) => {
    if (target === undefined) target = +line;
    else {
        numbers = line.trim().split(" ").map(Number);
        rl.close();
    }
});

rl.on("close", () => {
    console.log(combinationSum(numbers, target));
});

function combinationSum(numbers: number[], target: number): number[][] {
    const results: number[][] = [];

    numbers.sort((a, b) => a - b); // O(n Log(n))

    function backtrack(start: number, current: number[], sum: number) {
        if (sum === target) {
            results.push([...current]);
            return;
        }

        if (sum > target) return;

        for (let i = start; i < numbers.length; i++) {
            current.push(numbers[i]);
            backtrack(i, current, sum + numbers[i]);
            current.pop();
        }
    }

    backtrack(0, [], 0);

    return results;
}
