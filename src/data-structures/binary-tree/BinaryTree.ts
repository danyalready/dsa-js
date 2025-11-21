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

    removeNode(value: T): void {
        if (!this.root) {
            throw new Error('The tree is empty.');
        }

        let parentNode = null;
        let currentNode = this.root;
        let nodeToRemove = null;
        let isFound = false;

        while (!isFound) {
            if (!currentNode || currentNode.value === null || currentNode.value === undefined) {
                throw new Error('The node was not found.');
            }

            if (value === currentNode.value) {
                nodeToRemove = currentNode;
                isFound = true;
            } else if (value < currentNode.value) {
                if (!currentNode.leftChild) {
                    throw new Error('The node was not found.');
                }

                parentNode = currentNode;
                currentNode = currentNode.leftChild;
            } else {
                if (!currentNode.rightChild) {
                    throw new Error('The node was not found.');
                }

                parentNode = currentNode;
                currentNode = currentNode.rightChild;
            }
        }

        if (!nodeToRemove) {
            throw new Error('The node was not found.');
        }

        // The `nodeToRemove` is a leaf node.
        if (nodeToRemove.leftChild === null && nodeToRemove.rightChild === null) {
            if (parentNode) {
                if (parentNode.leftChild === nodeToRemove) {
                    parentNode.leftChild = null;
                } else {
                    parentNode.rightChild = null;
                }
            } else {
                this.root = null;
            }

            // The `nodeToRemove` has a one child.
        } else if (nodeToRemove.leftChild !== null && nodeToRemove.rightChild === null) {
            if (parentNode) {
                if (parentNode.leftChild === nodeToRemove) {
                    parentNode.leftChild = nodeToRemove.leftChild;
                } else {
                    parentNode.rightChild = nodeToRemove.leftChild;
                }
            } else {
                this.root = nodeToRemove.leftChild;
            }
        } else if (nodeToRemove.leftChild === null && nodeToRemove.rightChild !== null) {
            if (parentNode) {
                if (parentNode.leftChild === nodeToRemove) {
                    parentNode.leftChild = nodeToRemove.rightChild;
                } else {
                    parentNode.rightChild = nodeToRemove.rightChild;
                }
            } else {
                this.root = nodeToRemove.rightChild;
            }

            // The `nodeToRemove` has two children.
        } else {
            const leftSubTree = nodeToRemove.leftChild;
            const rightSubTree = nodeToRemove.rightChild;

            let currentLeftParent = null;
            let currentLeftNode = rightSubTree;
            let isSpaceFound = false;

            if (parentNode) {
                if (parentNode.leftChild === nodeToRemove) {
                    parentNode.leftChild = rightSubTree;
                } else {
                    parentNode.rightChild = rightSubTree;
                }
            } else {
                this.root = rightSubTree;
            }

            while (!isSpaceFound) {
                if (currentLeftNode === null) {
                    isSpaceFound = true;
                } else {
                    currentLeftParent = currentLeftNode;
                    currentLeftNode = currentLeftNode.leftChild;
                }
            }

            currentLeftParent!.leftChild = leftSubTree;
        }
    }
}
