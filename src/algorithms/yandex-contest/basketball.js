const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n, m;
const players = [];
const matches = [];

rl.on("line", (input) => {
    if (n === undefined) n = +input;
    else if (players.length < n) players.push(input.trim());
    else if (players.length === n && m === undefined) m = +input;
    else if (matches.length < m) {
        matches.push(input.trim().split(" "));

        if (matches.length === m) rl.close();
    }
});

rl.on("close", () => {
    let bestPlayer;
    const currentScore = [0, 0];
    const playersScore = new Map(); // player => points

    for (const player of players) playersScore.set(player, 0);

    for (const [updatedScore, player] of matches) {
        const parsedScore = updatedScore.split(":").map(Number);
        const playerScore = [
            parsedScore[0] - currentScore[0],
            parsedScore[1] - currentScore[1],
        ];
        const score = playerScore[0] + playerScore[1];

        playersScore.set(player, playersScore.get(player) + score);

        currentScore[0] = parsedScore[0];
        currentScore[1] = parsedScore[1];

        if (bestPlayer === undefined) bestPlayer = player;
        else {
            if (playersScore.get(bestPlayer) < playersScore.get(player)) {
                bestPlayer = player;
            }
        }
    }

    console.log(bestPlayer, playersScore.get(bestPlayer));
});
