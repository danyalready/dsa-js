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

            while (stack.length) {
                const node = stack.pop();

                if (visited.has(node)) continue;

                visitFunction(node);
                visited.add(node);

                for (const edgeNode of node.edges) {
                    stack.push(edgeNode);
                }
            }
        }
    },
};
