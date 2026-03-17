const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lines: number[][] = [];

rl.on("line", (input: string) => {
    const numbers = input.split(" ").map(Number);

    lines.push(numbers);

    if (lines.length === lines[0][0] + 1) rl.close();
});

rl.on("close", () => {
    for (let i = 1; i < lines.length; i++) {
        console.log(foo(lines[i]) ? "YES" : "NO");
    }
});

function foo(vectors: number[]): boolean {
    const v1 = vectors.slice(0, 2);
    const v2 = vectors.slice(2, 4);
    const v3 = vectors.slice(4, 6);
    const v4 = vectors.slice(6, 8);

    const l1 = [Math.abs(v1[0] - v2[0]), Math.abs(v1[1] - v2[1])];
    const l2 = [Math.abs(v3[0] - v4[0]), Math.abs(v3[1] - v4[1])];
    const l3 = [Math.abs(v1[0] - v3[0]), Math.abs(v1[1] - v3[1])];
    const l4 = [Math.abs(v2[0] - v4[0]), Math.abs(v2[1] - v4[1])];

    function isEqual(vA: number[], vB: number[]): boolean {
        return vA[0] === vB[0] && vA[1] === vB[1];
    }

    return (
        isEqual(l1, l2) || isEqual(l3, l4) || isEqual(l1, l3) || isEqual(l2, l4)
    );
}

// 3
// 1 1 4 2 3 0 2 3
// 1 1 5 2 2 3 3 0
// 0 0 5 1 6 3 1 2
