import type { Node } from './BinarySearchTree';

export const BINARY_TREE_TRAVERSALS = {
    inOrder: function <T>(node: Node<T> | null, visitFunction: (node: Node<T>) => void) {
        if (node) {
            BINARY_TREE_TRAVERSALS.inOrder(node.leftChild, visitFunction);
            visitFunction(node);
            BINARY_TREE_TRAVERSALS.inOrder(node.rightChild, visitFunction);
        }
    },
    preOrder: function <T>(node: Node<T> | null, visitFunction: (node: Node<T>) => void) {
        if (node) {
            visitFunction(node);
            BINARY_TREE_TRAVERSALS.preOrder(node.leftChild, visitFunction);
            BINARY_TREE_TRAVERSALS.preOrder(node.rightChild, visitFunction);
        }
    },
    postOrder: function <T>(node: Node<T> | null, visitFunction: (node: Node<T>) => void) {
        if (node) {
            BINARY_TREE_TRAVERSALS.postOrder(node.leftChild, visitFunction);
            BINARY_TREE_TRAVERSALS.postOrder(node.rightChild, visitFunction);
            visitFunction(node);
        }
    },
};
