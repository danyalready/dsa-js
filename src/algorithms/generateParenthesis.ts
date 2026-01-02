// n = 3
// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

function generateParenthesis(n: number): string[] {
    const result: string[] = [];

    function backtract(current: string, opened: number, closed: number) {
        if (current.length === 2 * n) {
            result.push(current);
            return;
        }

        if (opened < n) {
            backtract(current + "(", opened + 1, closed);
        }

        if (closed < opened) {
            backtract(current + ")", opened, closed + 1);
        }
    }

    backtract("", 0, 0);
    return result;
}
console.log(generateParenthesis(3));
