class Node<T> {
    value: T;
    leftChild: Node<T> | null = null;
    rightChild: Node<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

export class BinaryTree<T> {
    root: Node<T> | null = null;

    addNode(value: T): void {
        if (!this.root) {
            this.root = new Node(value);
            return;
        }

        let currentNode = this.root;
        let isAdded = false;

        while (!isAdded) {
            if (value === currentNode.value) {
                throw new Error('Value already exists in a tree.');
            }

            if (value < currentNode.value) {
                if (currentNode.leftChild) currentNode = currentNode.leftChild;
                else {
                    currentNode.leftChild = new Node(value);
                    isAdded = true;
                }
            } else {
                if (currentNode.rightChild) currentNode = currentNode.rightChild;
                else {
                    currentNode.rightChild = new Node(value);
                    isAdded = true;
                }
            }
        }
    }
}
