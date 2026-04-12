const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin });

rl.on("line", (line: string) => {
    const numbers: number[] = line.trim().split(" ").map(Number);
    const results: number[][] = [];

    numbers.sort((a, b) => a - b); // O(n Log(n))

    function backtrack(start: number, current: number[]) {
        results.push([...current]);

        for (let i = start; i < numbers.length; i++) {
            if (i > start && numbers[i] === numbers[i - 1]) continue;

            current.push(numbers[i]);
            backtrack(i + 1, current);
            current.pop();
        }
    }

    backtrack(0, []);
    console.log(results.join("\n"));

    rl.close();
});
