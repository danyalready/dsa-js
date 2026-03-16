const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (input: string) => {
    const buildings = input.split(" ").map(Number) as (0 | 1 | 2)[];

    console.log(foo(buildings));

    rl.close();
});

function foo(buildings: (0 | 1 | 2)[]) {
    let maxD = 0;

    for (let i = 0; i < buildings.length; i++) {
        if (buildings[i] !== 1) continue;

        let closestD = Infinity;
        let l = i - 1;
        let r = i + 1;

        while (l >= 0 || r <= buildings.length - 1) {
            const lB = buildings[l];
            const rB = buildings[r];

            if (lB === 2) {
                closestD = Math.min(closestD, i - l);
                break;
            }

            if (rB === 2) {
                closestD = Math.min(closestD, r - i);
                break;
            }

            if (l >= 0) l--;
            if (r <= buildings.length - 1) r++;
        }

        maxD = Math.max(maxD, closestD);
    }

    return maxD;
}
