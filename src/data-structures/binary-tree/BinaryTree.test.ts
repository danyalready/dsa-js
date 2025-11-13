import { BinaryTree } from './BinaryTree';

describe('BinaryTree', () => {
    let binaryTree: BinaryTree<number>;

    beforeEach(() => {
        binaryTree = new BinaryTree<number>();
    });

    test('`addNode` adds an item to a tree.', () => {
        binaryTree.addNode(4);
        binaryTree.addNode(2);
        binaryTree.addNode(5);
        binaryTree.addNode(3);
        binaryTree.addNode(11);
        binaryTree.addNode(9);
        binaryTree.addNode(6);
        binaryTree.addNode(12);

        expect(binaryTree.root?.value).toBe(4);
        expect(binaryTree.root?.leftChild?.value).toBe(2);
        expect(binaryTree.root?.rightChild?.value).toBe(5);
        expect(binaryTree.root?.leftChild?.rightChild?.value).toBe(3);
        expect(binaryTree.root?.rightChild?.rightChild?.value).toBe(11);
        expect(binaryTree.root?.rightChild?.rightChild?.leftChild?.value).toBe(9);
        expect(binaryTree.root?.rightChild?.rightChild?.leftChild?.leftChild?.value).toBe(6);
        expect(binaryTree.root?.rightChild?.rightChild?.rightChild?.value).toBe(12);
    });
});
