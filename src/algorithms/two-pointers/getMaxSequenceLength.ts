// [0,0,1,0,1,1]        => 3, [0,0,1,1,1]
// [0,0,0,0,0,0]        => 0, no mutation
// [1,0,1,0,1,0]        => 2, [1,1,0,1,0]
// [1,0,1,0,1,0,1,1]    => 3, [1,0,1,0,1,1,1]

// 0: 1
//        l     r
// [0,0,0,1,0,1,1]
export function getMaxSequenceLength(bits: number[]): number[] {
    let l = 0;
    let zeroCount = 0;
    let bestL = 0;
    let bestR = 0;

    for (let r = 0; r < bits.length; r++) {
        if (bits[r] === 0) zeroCount++;

        if (bits[r] === 1) {
            if (zeroCount > 1) {
                l = r;
                zeroCount = 0;
            } else {
                if (bestR - bestL < r - l) {
                    bestL = l;
                    bestR = r;
                }
            }
        }
    }

    const maxSequence = bits.slice(bestL, bestR + 1).filter((bit) => bit !== 0);
    bits.splice(bestL, bestR + 1 - bestL);
    bits.splice(bestL, 0, ...maxSequence);

    return bits;
}

console.log(getMaxSequenceLength([1, 0, 1, 0, 1, 0, 1, 1]));
