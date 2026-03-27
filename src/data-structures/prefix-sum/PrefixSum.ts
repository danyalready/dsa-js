export default class PrefixSum {
    sums: number[];

    constructor(numbers: number[]) {
        this.sums = new Array(numbers.length + 1).fill(0);

        for (let i = 1; i < this.sums.length; i++) {
            this.sums[i] = this.sums[i - 1] + numbers[i - 1];
        }
    }

    sum(l: number, r: number): number {
        if (l > r) {
            throw new Error("Left index cannot be bigger than right index.");
        }

        return this.sums[r + 1] - this.sums[l];
    }
}
