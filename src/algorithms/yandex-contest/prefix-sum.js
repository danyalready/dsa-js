const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n;
let elements;
let q;
let x0;

rl.on("line", (input) => {
    if (n === undefined) n = +input;
    else if (elements === undefined) elements = input.trim().split(" ").map(Number);
    else if (q === undefined) q = +input;
    else {
        x0 = +input;

        rl.close();
    }
});

rl.on("close", () => {
    const sequence = generateSequence();
    const segments = createSegments(sequence);
    const prefixSum = createPrefixSum(elements);

    let totalSum = 0;

    for (const [l, r] of segments) {
        totalSum += prefixSum[r + 1] - prefixSum[l];
    }

    console.log(totalSum);
});

function generateSequence() {
    const numbers = new Array(2 * q);
    numbers[0] = x0;

    for (let i = 1; i <= 2 * q - 1; i++) {
        numbers[i] = (11173 * numbers[i - 1] + 1) % 1000000007;
    }

    return numbers;
}

function createSegments(sequence) {
    const segments = new Array(q);

    for (let i = 0; i < segments.length; i++) {
        segments[i] = [
            Math.min(sequence[i * 2] % n, sequence[i * 2 + 1] % n),
            Math.max(sequence[i * 2] % n, sequence[i * 2 + 1] % n),
        ];
    }

    return segments;
}

function createPrefixSum(numbers) {
    const prefix = new Array(numbers.length + 1);
    prefix[0] = 0;

    for (let i = 0; i < numbers.length; i++) {
        prefix[i + 1] = prefix[i] + numbers[i];
    }

    return prefix;
}
