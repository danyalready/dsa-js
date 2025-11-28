import { GRAPH_TRAVERSALS } from './traversals';
import type { Node } from './Graph';

function createNode<T>(value: T): Node<T> {
    return { value, edges: [] };
}

describe('BINARY_TREE_TRAVERSALS', () => {
    /**
     * Test graph structure used in all tests:
     *
     *      A —— H
     *      |     \
     *      B     C
     *     / \   / \
     *    D  E-—F  G
     */
    let nodes: Node<string>[];

    beforeEach(() => {
        const A = createNode('A');
        const B = createNode('B');
        const C = createNode('C');
        const D = createNode('D');
        const E = createNode('E');
        const F = createNode('F');
        const G = createNode('G');
        const H = createNode('H');

        A.edges.push(H);
        H.edges.push(A);

        A.edges.push(B);
        B.edges.push(A);

        B.edges.push(D);
        D.edges.push(B);

        B.edges.push(E);
        E.edges.push(B);

        C.edges.push(F);
        F.edges.push(C);

        C.edges.push(G);
        G.edges.push(C);

        E.edges.push(F);
        F.edges.push(E);

        nodes = [A, B, C, D, E, F, G, H];
    });

    test('dfs traversal (Depth First Search)', () => {
        const visited: string[] = [];

        GRAPH_TRAVERSALS.dfs(nodes, (node) => {
            visited.push(node.value);
        });

        expect(visited).toEqual(['A', 'H', 'B', 'D', 'E', 'F', 'C', 'G']);
    });

    test('should handle null root safely', () => {
        const visited: string[] = [];

        GRAPH_TRAVERSALS.dfs<string>([], (node) => visited.push(node.value));

        expect(visited).toEqual([]);
    });
});
