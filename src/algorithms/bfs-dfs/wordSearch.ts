function hash(y: number, x: number) {
    return `${y}-${x}`;
}

function wordSearch(board: string[][], word: string): boolean {
    const rows = board.length;
    const cols = board[0].length;

    const dirs = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];

    function dfs(
        y: number,
        x: number,
        index: number,
        visited: Set<string>
    ): boolean {
        if (index === word.length) return true;

        if (
            y < 0 ||
            y >= rows ||
            x < 0 ||
            x >= cols ||
            board[y][x] !== word[index] ||
            visited.has(hash(y, x))
        ) {
            return false;
        }

        visited.add(hash(y, x));

        for (const [dY, dX] of dirs) {
            if (dfs(y + dY, x + dX, index + 1, visited)) return true;
        }

        visited.delete(hash(y, x));
        return false;
    }

    for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board[y].length; x++) {
            if (board[y][x] === word[0]) {
                const visited = new Set<string>();

                if (dfs(y, x, 0, visited)) return true;
            }
        }
    }

    return false;
}

const board = [
    ["A", "B", "C", "E"],
    ["B", "F", "C", "S"],
    ["A", "D", "E", "E"],
];

console.log(wordSearch(board, "ABCCEDFBA")); // true
