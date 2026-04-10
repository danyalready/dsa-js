const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin });

let n, m, k;
const commands = [];

rl.on("line", (input) => {
    if (n === undefined) [n, m, k] = input.trim().split(" ").map(Number);
    else {
        commands.push(input.trim());
        if (commands.length === m) rl.close();
    }
});

rl.on("close", () => {
    const tabs = [];
    let curr = 0;
    let buff = "";

    for (let i = 0; i < n; i++) tabs.push("");

    for (const command of commands) {
        if (command === "Backspace") tabs[curr] = tabs[curr].slice(0, tabs[curr].length - 1);
        else if (command === "Copy") buff = tabs[curr].slice(-k);
        else if (command === "Paste") tabs[curr] = tabs[curr].concat(buff);
        else if (command === "Next") curr = (curr + 1) % n;
        else tabs[curr] += command;
    }

    const result = tabs[curr].slice(-k);
    console.log(result || "Empty");
});
