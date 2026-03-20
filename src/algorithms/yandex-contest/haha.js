const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let l;
let row;

rl.on("line", (input) => {
    if (l === undefined) l = Number(input);
    else {
        row = input;
        rl.close();
    }
});

rl.on("close", () => {
    let max = 0;
    let l = 0;

    for (let r = 0; r < row.length; r++) {
        if (row[r] !== "a" && row[r] !== "h") {
            l = r + 1;
            continue;
        }

        if (row[r - 1] === row[r] && r > l) l = r;

        const length = r - l + 1;

        if (length === 1 && row[r] === "h") continue;

        max = Math.max(max, length);
    }

    console.log(max);
});
