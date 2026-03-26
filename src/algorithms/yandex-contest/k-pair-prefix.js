const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n;
const words = [];

rl.on("line", (input) => {
    if (n === undefined) n = +input;
    else {
        words.push(input.trim());

        if (words.length === n) rl.close();
    }
});

rl.on("close", () => {
    const sortedWords = words.sort((a, b) => a.localeCompare(b));
    let minK = sortedWords[0].length;

    for (let i = 0; i < sortedWords.length; i += 2) {
        const curr = sortedWords[i];
        const next = sortedWords[i + 1];

        minK = Math.min(minK, getMinPrefixK(curr, next));
    }

    console.log(minK);
});

function getMinPrefixK(a, b) {
    let k = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return k;

        k++;
    }

    return k;
}
