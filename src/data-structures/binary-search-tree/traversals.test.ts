import { BINARY_TREE_TRAVERSALS } from './traversals';
import type { Node } from './BinarySearchTree';

function createNode<T>(value: T, leftChild: Node<T> | null = null, rightChild: Node<T> | null = null): Node<T> {
    return { value, leftChild, rightChild };
}

describe('BINARY_TREE_TRAVERSALS', () => {
    /**
     * Test tree structure used in all tests:
     *
     *         A
     *       /   \
     *      B     C
     *     / \   / \
     *    D   E F   G
     */
    let root: Node<string>;

    beforeEach(() => {
        const D = createNode('D');
        const E = createNode('E');
        const F = createNode('F');
        const G = createNode('G');

        const B = createNode('B', D, E);
        const C = createNode('C', F, G);

        root = createNode('A', B, C);
    });

    test('inOrder traversal (Left → Node → Right)', () => {
        const visited: string[] = [];

        BINARY_TREE_TRAVERSALS.inOrder(root, (node) => {
            visited.push(node.value);
        });

        expect(visited).toEqual(['D', 'B', 'E', 'A', 'F', 'C', 'G']);
    });

    test('preOrder traversal (Node → Left → Right)', () => {
        const visited: string[] = [];

        BINARY_TREE_TRAVERSALS.preOrder(root, (node) => {
            visited.push(node.value);
        });

        expect(visited).toEqual(['A', 'B', 'D', 'E', 'C', 'F', 'G']);
    });

    test('postOrder traversal (Left → Right → Node)', () => {
        const visited: string[] = [];

        BINARY_TREE_TRAVERSALS.postOrder(root, (node) => {
            visited.push(node.value);
        });

        expect(visited).toEqual(['D', 'E', 'B', 'F', 'G', 'C', 'A']);
    });

    test('should handle null root safely', () => {
        const visited: string[] = [];

        BINARY_TREE_TRAVERSALS.inOrder<string>(null, (node) => visited.push(node.value));
        BINARY_TREE_TRAVERSALS.preOrder<string>(null, (node) => visited.push(node.value));
        BINARY_TREE_TRAVERSALS.postOrder<string>(null, (node) => visited.push(node.value));

        expect(visited).toEqual([]);
    });
});
