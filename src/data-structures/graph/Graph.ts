export class Node<T> {
    value: T;
    edges: Node<T>[] = [];

    constructor(value: T) {
        this.value = value;
    }
}

export class Graph<T> {
    directed: boolean;
    nodes: Node<T>[] = [];

    constructor(directed = false) {
        this.directed = directed;
    }

    addNode(value: T) {
        if (this.getNode(value)) return;

        this.nodes.push(new Node(value));
    }

    removeNode(value: T) {
        this.nodes = this.nodes.filter((node) => {
            node.edges = node.edges.filter((edge) => edge.value !== value);

            return node.value !== value;
        });
    }

    getNode(value: T): Node<T> | undefined {
        return this.nodes.find((node) => node.value === value);
    }

    addEdge(valueA: T, valueB: T): boolean {
        const nodeA = this.getNode(valueA);
        const nodeB = this.getNode(valueB);

        if (!nodeA || !nodeB) throw new Error('Nodes are not found.');

        if (!nodeA.edges.includes(nodeB)) nodeA.edges.push(nodeB);
        if (!this.directed && !nodeB.edges.includes(nodeA)) nodeB.edges.push(nodeA);

        return true;
    }
}
