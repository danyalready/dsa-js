const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin });

rl.on("line", (line: string) => {
    const elements = line.trim().split(" ");

    if (elements.length < 1 || 8 < elements.length) return;

    function backtrack(start: number, elements: string[]) {
        if (start === elements.length) {
            console.log(elements.join(" "));
            return;
        }

        for (let i = start; i < elements.length; i++) {
            [elements[start], elements[i]] = [elements[i], elements[start]];
            backtrack(start + 1, elements);
            [elements[start], elements[i]] = [elements[i], elements[start]];
        }
    }

    backtrack(0, elements);

    rl.close();
});
