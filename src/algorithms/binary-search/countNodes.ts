class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

const treeNode = new TreeNode(1);
treeNode.left = new TreeNode(2);
treeNode.right = new TreeNode(3);
treeNode.left.left = new TreeNode(4);
treeNode.left.right = new TreeNode(5);
// treeNode.right.left = new TreeNode(6);
// treeNode.right.right = new TreeNode(7);
// treeNode.left.left.left = new TreeNode(8);
// treeNode.left.left.right = new TreeNode(9);

function countNodes(root: TreeNode | null): number {
    if (!root) return 0;

    let h = 1;
    let curr = root;

    // Count levels
    while (curr) {
        if (!curr.left) break;

        curr = curr.left;
        h++;
    } // T: O(log(n)) where n is amount of nodes

    if (h === 1) return 1;

    // Find the last falsy node on `h` level
    let l = 0; // the most left node index on `h` level
    let r = 2 ** (h - 1) - 1; // the most right node index on `h` level

    while (l <= r) {
        const m = Math.floor((l + r) / 2);

        if (checkNodeOnLastLevel(m)) l = m + 1;
        else r = m - 1;
    }

    function checkNodeOnLastLevel(nodeIndex: number): boolean {
        let curr: TreeNode = root!;
        let l = 0;
        let r = 2 ** (h - 1) - 1;

        for (let i = 1; i < h; i++) {
            const m = Math.floor((l + r) / 2);

            if (nodeIndex <= m) {
                r = m;
                curr = curr.left!;
            } else {
                l = m + 1;
                curr = curr.right!;
            }
        }

        return curr !== null;
    }

    const volumeT = 2 ** h - 1;
    const volumeH = 2 ** (h - 1);

    return volumeT - (volumeH - (r + 1));
}

console.log(countNodes(treeNode));
