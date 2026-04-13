const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin });

rl.on("line", (line: string) => {
    const n: number = +line;

    for (const board of solveNQueens(n)) {
        console.log(board.join("\n"), "\n");
    }

    rl.close();
});

function solveNQueens(n: number): string[][] {
    const results: string[][] = [];
    const board: string[][] = Array.from({ length: n }, () => new Array(n).fill("#"));

    const cols = new Set<number>();
    const dgnlD = new Set<number>(); // row - col
    const dgnlU = new Set<number>(); // row + col

    (function backtrack(row: number) {
        if (row === n) {
            results.push(board.map((r) => r.join("")));
            return;
        }

        for (let col = 0; col < n; col++) {
            const d1 = row - col;
            const d2 = row + col;

            if (cols.has(col) || dgnlD.has(d1) || dgnlU.has(d2)) continue;

            board[row][col] = "Q";
            cols.add(col);
            dgnlD.add(d1);
            dgnlU.add(d2);

            backtrack(row + 1);

            board[row][col] = "#";
            cols.delete(col);
            dgnlD.delete(d1);
            dgnlU.delete(d2);
        }
    })(0);

    return results;
}
