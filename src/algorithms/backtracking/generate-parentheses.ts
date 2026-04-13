const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin });

rl.on("line", (line: string) => {
    const n: number = +line;

    console.log(generateParentheses(n));

    rl.close();
});

function generateParentheses(n: number): string[] {
    const results: string[] = [];

    function backtrack(current: string, opened: number, closed: number) {
        if (closed === n) {
            results.push(current);
            return;
        }

        if (opened < n) backtrack(current + "(", opened + 1, closed);
        if (closed < opened) backtrack(current + ")", opened, closed + 1);
    }

    backtrack("", 0, 0);

    return results;
}
