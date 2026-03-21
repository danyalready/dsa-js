const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n;
let s;
const dictionary = [];

rl.on("line", (input) => {
    if (n === undefined) n = +input.trim();
    else {
        if (dictionary.length === n) {
            s = input;
            rl.close();
        } else dictionary.push(input.split(" "));
    }
});

rl.on("close", () => {
    for (const synonyms of dictionary) {
        const [s1, s2] = synonyms;

        if (s1 === s) return console.log(s2);
        if (s2 === s) return console.log(s1);
    }
});
