function hash(y: number, x: number): string {
    return `${y}-${x}`;
}

function getShortestPathLength(matrix: number[][]): number {
    const rows = matrix.length;
    const cols = matrix[0].length;

    const queue: Array<[number, number, number]> = [[0, 0, 1]]; // [y, x, dist]
    const visited = new Set<string>(hash(0, 0));

    if (matrix[0][0] === 1 || matrix[rows - 1][cols - 1] === 1) return -1;

    while (queue.length) {
        const [y, x, dist] = queue.shift()!;

        if (y === rows - 1 && x === cols - 1) return dist;

        for (const [dY, dX] of [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ]) {
            if (
                matrix[y + dY] === undefined ||
                matrix[y + dY][x + dX] === undefined
            ) {
                continue;
            }

            const key = hash(y + dY, x + dX);

            if (matrix[y + dY][x + dX] === 0 && !visited.has(key)) {
                queue.push([y + dY, x + dX, dist + 1]);
                visited.add(key);
            }
        }
    }

    return -1;
}

const grid = [
    [0, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 1, 0],
    [0, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 1, 0],
    [0, 0, 0, 1, 1, 0],
]; // :11

console.log(getShortestPathLength(grid));
