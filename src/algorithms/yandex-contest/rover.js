const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n;
const bases = [];

rl.on("line", (input) => {
    if (n === undefined) n = +input;
    else {
        bases.push(input.trim().split(" ").map(Number));

        if (bases.length === n) rl.close();
    }
});

rl.on("close", () => {
    const segments = [];

    for (const [x, d] of bases) {
        segments.push([x - d, x + d]);
    }

    let result = segments[0];
    for (let i = 1; i < segments.length; i++) {
        result = intersect(result, segments[i]);

        if (result === null) return console.log(-1);
    }

    console.log(result[1]);
});

function intersect(seg1, seg2) {
    const [l1, r1] = seg1;
    const [l2, r2] = seg2;

    const left = Math.max(l1, l2);
    const right = Math.min(r1, r2);

    if (left > right) return null;

    return [left, right];
}
