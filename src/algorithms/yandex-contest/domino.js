const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin });

let n, m;
const matrix = [];

rl.on("line", (line) => {
    if (n === undefined) [n, m] = line.split(" ").map(Number);
    else if (matrix.length < n) {
        matrix.push(line.split(""));

        if (matrix.length === n) rl.close();
    }
});

rl.on("close", () => {
    console.log(foo());
});

function foo() {
    let count = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === "#") continue;

            if (matrix[i][j + 1] === ".") count++;
            if (matrix[i + 1]?.[j] === ".") count++;
        }
    }

    return count;
}
