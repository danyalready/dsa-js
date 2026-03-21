const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let N;
const lines = [];

rl.on("line", (input) => {
    if (N === undefined) N = +input;
    else {
        const lastIndex = lines.length - 1;

        if (lastIndex === -1) lines.push([+input, []]);
        else {
            if (Number.isInteger(+input)) lines.push([+input, []]);
            else {
                lines[lastIndex][1].push(input.trim());

                if (
                    lines[lastIndex][0] === lines[lastIndex][1].length &&
                    lines.length === N
                ) {
                    rl.close();
                }
            }
        }
    }
});

rl.on("close", () => {
    const set = new Set();
    const map = new Map();

    const commonL = [];

    for (const el of lines) {
        for (const l of el[1]) {
            map.set(l, 1 + (map.get(l) || 0));
            set.add(l);

            if (map.get(l) === N) commonL.push(l);
        }
    }

    console.log(commonL.length);
    for (const l of commonL) console.log(l);

    console.log(set.size);
    for (const l of set) console.log(l);
});
