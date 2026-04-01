const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin });

rl.on("line", (input) => {
    const numbers = input.trim().split(" ").map(Number);
    const prefixS = new Array(numbers.length + 1).fill(0);
    const prefixM = new Map();
    prefixM.set(0, 1);

    // 1. fill the prefix
    for (let i = 0; i < numbers.length; i++) {
        prefixS[i + 1] = prefixS[i] + numbers[i];
    }

    // 2. count identical prefixes
    let count = 0;

    for (let i = 1; i < prefixS.length; i++) {
        if (prefixM.has(prefixS[i])) count += prefixM.get(prefixS[i]);

        prefixM.set(prefixS[i], (prefixM.get(prefixS[i]) || 0) + 1);
    }

    console.log(count);

    rl.close();
});

// T: O(n^3) -> O(n^2) -> O(n)
// M: O(n)
