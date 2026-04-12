const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin });

rl.on("line", (line: string) => {
    const elements = line.trim().split(" ");

    if (elements.length < 1 || 8 < elements.length) return;

    const visited: boolean[] = new Array(elements.length).fill(false);

    function backtrack(path: string[]) {
        if (path.length === elements.length) {
            console.log(path.join(" "));
            return;
        }

        for (let i = 0; i < elements.length; i++) {
            if (visited[i]) continue;

            visited[i] = true;

            path.push(elements[i]);
            backtrack(path);
            path.pop();

            visited[i] = false;
        }
    }

    backtrack([]);

    rl.close();
});
