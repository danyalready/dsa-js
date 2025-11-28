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

        A.edges.push(B);
        B.edges.push(A);

        A.edges.push(H);
        H.edges.push(A);

        B.edges.push(D);

        B.edges.push(E);

        E.edges.push(F);

        F.edges.push(C);
        C.edges.push(F);

        C.edges.push(H);
        H.edges.push(C);

        C.edges.push(G);
        G.edges.push(C);

        nodes = [A, B, C, D, E, F, G, H];
    });

    // test('dfs traversal (Depth First Search)', () => {
    //     const visited: string[] = [];

    //     GRAPH_TRAVERSALS.dfs(nodes, (node) => {
    //         visited.push(node.value);
    //     });

    //     expect(visited).toEqual(['A', 'B', 'D', 'E', 'F', 'C', 'H', 'G']);
    // });

    test('dfs-iterative traversal (Depth First Search)', () => {
        const visited: string[] = [];

        GRAPH_TRAVERSALS.dfsIterative(nodes, (node) => {
            visited.push(node.value);
        });

        expect(visited).toEqual(['A', 'H', 'C', 'G', 'F', 'B', 'E', 'D']);
    });

    test('should handle null root safely', () => {
        const visited: string[] = [];

        GRAPH_TRAVERSALS.dfs<string>([], (node) => visited.push(node.value));

        expect(visited).toEqual([]);
    });
});
