function hash(y: number, x: number) {
    return `${y}-${x}`;
}

function getIslandsCount(matrix: number[][]): number {
    let count = 0;

    const visited = new Set();

    function dfsR(y: number, x: number) {
        if (!matrix[y] && !matrix[y][x]) return;

        if (matrix[y][x] === 1 && !visited.has(hash(y, x))) {
            visited.add(hash(y, x));

            for (const [dY, dX] of [
                [-1, 0],
                [1, 0],
                [0, -1],
                [0, 1],
            ]) {
                if (!matrix[y + dY] || !matrix[y + dY][x + dX]) continue;

                dfsR(y + dY, x + dX);
            }
        }
    }

    function bfs(y: number, x: number) {
        const queue = [[y, x]];

        while (queue.length) {
            const [cY, cX] = queue.shift()!;

            if (matrix[cY][cX] === 1 && !visited.has(hash(cY, cX))) {
                visited.add(hash(cY, cX));

                for (const [dY, dX] of [
                    [-1, 0],
                    [1, 0],
                    [0, -1],
                    [0, 1],
                ]) {
                    if (!matrix[cY + dY] || !matrix[cY + dY][cX + dX]) continue;

                    queue.push([cY + dY, cX + dX]);
                }
            }
        }
    }

    function dfs(y: number, x: number) {
        const stack = [[y, x]];

        while (stack.length) {
            const [cY, cX] = stack.pop()!;

            if (matrix[cY][cX] === 1 && !visited.has(hash(cY, cX))) {
                visited.add(hash(cY, cX));

                for (const [dY, dX] of [
                    [-1, 0],
                    [1, 0],
                    [0, -1],
                    [0, 1],
                ]) {
                    if (!matrix[cY + dY] || !matrix[cY + dY][cX + dX]) continue;

                    stack.push([cY + dY, cX + dX]);
                }
            }
        }
    }

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] === 1 && !visited.has(hash(y, x))) {
                count++;
                dfsR(y, x);
            }
        }
    }

    return count;
}

console.log(
    getIslandsCount([
        [1, 1, 0, 0],
        [1, 1, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 1, 1],
    ])
);
