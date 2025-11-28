import { Queue } from '../queue/Queue';
import { Stack } from '../stack/Stack';
import type { Node } from './Graph';

export const GRAPH_TRAVERSALS = {
    // Depth-First Traversals (DFS)
    dfs: function <T>(nodes: Node<T>[], visitFunction: (node: Node<T>) => void) {
        const visited = new Set<Node<T>>();

        function explore(node: Node<T>) {
            if (visited.has(node)) return;

            visitFunction(node);
            visited.add(node);

            for (const edgeNode of node.edges) {
                explore(edgeNode);
            }
        }

        for (const node of nodes) explore(node);
    },
    dfsIterative: function <T>(nodes: Node<T>[], visitFunction: (node: Node<T>) => void) {
        const visited = new Set<Node<T>>();

        for (const node of nodes) {
            if (visited.has(node)) continue;

            const stack = new Stack<Node<T>>();

            stack.push(node);

            while (!stack.isEmpty()) {
                const stackNode = stack.pop();

                if (visited.has(stackNode)) continue;

                visitFunction(stackNode);
                visited.add(stackNode);

                for (const edgeNode of stackNode.edges) {
                    stack.push(edgeNode);
                }
            }
        }
    },
};
