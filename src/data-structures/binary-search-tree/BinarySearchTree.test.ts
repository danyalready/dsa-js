import { BinarySearchTree } from './BinarySearchTree';

describe('BinarySearchTree', () => {
    let binaryTree: BinarySearchTree<number>;

    beforeEach(() => {
        binaryTree = new BinarySearchTree<number>();
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

    test('`removeNode` removes an item from the tree', () => {
        let tree: BinarySearchTree<number>;

        beforeEach(() => {
            tree = new BinarySearchTree<number>();
        });

        function buildTree() {
            // Строим дерево:
            //         8
            //       /   \
            //      3     10
            //     / \      \
            //    1   6      14
            //       / \     /
            //      4   7   13
            tree.addNode(8);
            tree.addNode(3);
            tree.addNode(10);
            tree.addNode(1);
            tree.addNode(6);
            tree.addNode(14);
            tree.addNode(4);
            tree.addNode(7);
            tree.addNode(13);
        }

        // --- 1. Удаление листа ---------------------------------------------------

        test('removes a leaf node', () => {
            buildTree();

            tree.removeNode(7); // лист
            expect(tree.root?.leftChild?.rightChild?.rightChild).toBeNull();
        });

        // --- 2. Удаление узла с одним ребёнком -----------------------------------

        test('removes a node with one child (left)', () => {
            tree.addNode(5);
            tree.addNode(3);
            tree.addNode(2); // у 3 только один левый ребёнок

            tree.removeNode(3);

            expect(tree.root?.leftChild?.value).toBe(2);
            expect(tree.root?.leftChild?.leftChild).toBeNull();
            expect(tree.root?.leftChild?.rightChild).toBeNull();
        });

        test('removes a node with one child (right)', () => {
            tree.addNode(5);
            tree.addNode(7);
            tree.addNode(9); // у 7 только правый ребёнок

            tree.removeNode(7);

            expect(tree.root?.rightChild?.value).toBe(9);
        });

        // --- 3. Удаление узла с двумя детьми -------------------------------------

        test('removes a node with two children using inorder successor', () => {
            buildTree();

            // удаляем 3 (имеет детей: 1 и 6)
            tree.removeNode(3);

            // successor = 4, значит 3 заменится на 4
            expect(tree.root?.leftChild?.value).toBe(4);

            // 1 остаётся слева
            expect(tree.root?.leftChild?.leftChild?.value).toBe(1);

            // 6 остаётся справа
            expect(tree.root?.leftChild?.rightChild?.value).toBe(6);
        });

        // --- 4. Удаление корня (во всех вариантах) --------------------------------

        test('removes the root when it is a leaf', () => {
            tree.addNode(5);
            tree.removeNode(5);
            expect(tree.root).toBeNull();
        });

        test('removes the root with one child', () => {
            tree.addNode(5);
            tree.addNode(3);

            tree.removeNode(5);
            expect(tree.root?.value).toBe(3);
        });

        test('removes the root with two children', () => {
            buildTree();
            tree.removeNode(8);

            // successor = 10 → root.value = 10
            expect(tree.root?.value).toBe(10);

            // левое поддерево должно остаться валидным
            expect(tree.root?.leftChild?.value).toBe(3);
            expect(tree.root?.rightChild?.value).toBe(14);
        });

        // --- 5. Ошибки -------------------------------------------------------------

        test('throws an error when removing from empty tree', () => {
            expect(() => tree.removeNode(5)).toThrow('The tree is empty.');
        });

        test('throws an error when node is not found', () => {
            tree.addNode(4);
            tree.addNode(2);
            tree.addNode(6);

            expect(() => tree.removeNode(100)).toThrow('The node was not found.');
        });

        // --- 6. Проверка структуры после сложных удалений --------------------------

        test('removes multiple nodes and keeps BST structure valid', () => {
            buildTree();

            tree.removeNode(14);
            tree.removeNode(6);
            tree.removeNode(3);

            // дерево должно оставаться валидным
            expect(tree.root?.value).toBe(8);

            // 3 → successor 4
            expect(tree.root?.leftChild?.value).toBe(4);

            // 6 удалён, его место должно занять 7
            expect(tree.root?.leftChild?.rightChild?.value).toBe(7);

            // 14 удалён, 10 становится родителем 13
            expect(tree.root?.rightChild?.rightChild?.value).toBe(13);
        });
    });
});
