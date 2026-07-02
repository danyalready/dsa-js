function findSafePath(grid: number[][], health: number): boolean {
    const gridRows: number = grid.length;
    const gridCols: number = grid[0].length;

    function hash([y, x, h]: [number, number, number]) {
        return `${y}:${x}:${h}`;
    }

    const queue: Array<[number, number, number]> = [[0, 0, health - grid[0][0]]]; // [y, x, health]
    const visited: Set<string> = new Set(hash([0, 0, health - grid[0][0]]));
    const offsets: Array<[number, number]> = [
        [-1, 0], // up
        [1, 0], // down
        [0, -1], // left
        [0, 1], // right
    ];

    while (queue.length) {
        const [y, x, health] = queue.shift()!;

        if (health === 0) continue;

        if (y === gridRows - 1 && x === gridCols - 1 && health > 0) return true;

        for (const [oY, oX] of offsets) {
            const [dY, dX] = [y + oY, x + oX];

            if (grid[dY] === undefined || grid[dY][dX] === undefined) continue;

            const dHealth = health - grid[dY][dX];
            const key = hash([dY, dX, dHealth]);

            if (visited.has(key) || dHealth === 0) continue;

            queue.push([dY, dX, dHealth]);
            visited.add(key);
        }
    }

    return false;
}

const grid = [
    [0, 0],
    [1, 0],
    [0, 0],
    [0, 1],
    [0, 0],
];
console.log(findSafePath(grid, 1));
