//
//     .l
// s = "abcabcbbqwert";
// ответ: 3 ("abc")

export function getLongestUniqueRow(row: string): string {
    const set = new Set<string>();
    let l = 0;
    let bestL = 0;
    let bestR = 0;

    for (let r = 0; r < row.length; r++) {
        while (set.has(row[r])) {
            set.delete(row[l]);
            l++;
        }

        set.add(row[r]);
        if (bestR + 1 - bestL < r + 1 - l) {
            bestL = l;
            bestR = r;
        }
    }

    return row.slice(bestL, bestR + 1);
}
//                                  l r
console.log(getLongestUniqueRow("abcabcbbqwert"));
