const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin });

const SCORE_OFFSET = 90;

function charToScore(char) {
    return SCORE_OFFSET - char.charCodeAt(0);
}

function scoreToChar(code) {
    return String.fromCharCode(SCORE_OFFSET - code);
}

rl.on("line", (input) => {
    const chars = input.trim().split("");

    let total = 0;
    let lChar = chars[0];

    for (const char of chars) {
        total += charToScore(char);

        if (charToScore(lChar) > charToScore(char)) lChar = char;
    }

    const score = Math.round(total / chars.length);
    const a = Math.min(score, charToScore(lChar) + 1);

    console.log(scoreToChar(a));

    rl.close();
});
