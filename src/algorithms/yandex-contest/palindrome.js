const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n, s;

rl.on("line", (input) => {
    if (n === undefined) n = +input;
    else {
        s = input.trim();

        rl.close();
    }
});

rl.on("close", () => {
    const sortedChars = s.split("").sort();
    const singleChars = [];
    let side = "";

    for (let i = 0; i < sortedChars.length; i++) {
        if (sortedChars[i] === sortedChars[i + 1]) {
            side += sortedChars[i];

            i = i + 1;
        } else singleChars.push(sortedChars[i]);
    }

    if (side.length === 0) return console.log(singleChars[0]);

    const sideMirror = side.split("").reverse().join("");

    if (n % 2 === 0) {
        if (singleChars.length) {
            console.log(side + singleChars.shift() + sideMirror);
        } else console.log(side + sideMirror);
    } else {
        console.log(side + singleChars.shift() + sideMirror);
    }
});
