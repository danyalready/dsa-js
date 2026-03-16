const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lines: number[] = [];

rl.on("line", (input: string) => {
    lines.push(+input);

    if (lines.length === 3) rl.close();
});

rl.on("close", () => {
    console.log(foo(lines[0], lines[1], lines[2]));
});

function foo(a: number, b: number, c: number) {
    if (c < 0) return "NO SOLUTION";

    if (a === 0) {
        if (Math.sqrt(b) === c) return "MANY SOLUTIONS";
        return "NO SOLUTION";
    }

    const x = (c ** 2 - b) / a;

    if (a * x + b < 0 || !Number.isInteger(x)) return "NO SOLUTION";

    return x;
}
