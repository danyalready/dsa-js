import { Graph } from './Graph';

describe('Graph', () => {
    let graph: Graph<string>;

    beforeEach(() => {
        graph = new Graph<string>();
    });

    test('adds nodes', () => {
        graph.addNode('A');
        graph.addNode('B');

        expect(graph.nodes.map((n) => n.value)).toEqual(['A', 'B']);
    });

    test('does not add duplicate nodes', () => {
        graph.addNode('A');
        graph.addNode('A');

        expect(graph.nodes.length).toBe(1);
    });

    test('finds node by value', () => {
        graph.addNode('A');
        const node = graph.getNode('A');

        expect(node).toBeDefined();
        expect(node?.value).toBe('A');
    });

    test('returns undefined if node not found', () => {
        expect(graph.getNode('Z')).toBeUndefined();
    });

    test('adds edge (undirected graph)', () => {
        graph.addNode('A');
        graph.addNode('B');
        graph.addEdge('A', 'B');

        const nodeA = graph.getNode('A')!;
        const nodeB = graph.getNode('B')!;

        expect(nodeA.edges.map((e) => e.value)).toContain('B');
        expect(nodeB.edges.map((e) => e.value)).toContain('A');
    });

    test('adds edge (directed graph)', () => {
        const directedGraph = new Graph<string>(true);
        directedGraph.addNode('A');
        directedGraph.addNode('B');
        directedGraph.addEdge('A', 'B');

        const nodeA = directedGraph.getNode('A')!;
        const nodeB = directedGraph.getNode('B')!;

        expect(nodeA.edges.map((e) => e.value)).toContain('B');
        expect(nodeB.edges.map((e) => e.value)).not.toContain('A');
    });

    test('throws error if nodes not found when adding edge', () => {
        graph.addNode('A');
        expect(() => graph.addEdge('A', 'X')).toThrow('Nodes are not found.');
    });

    test('removes node and its edges', () => {
        graph.addNode('A');
        graph.addNode('B');
        graph.addNode('C');

        graph.addEdge('A', 'B');
        graph.addEdge('B', 'C');
        graph.removeNode('B');

        const nodeA = graph.getNode('A')!;
        const nodeC = graph.getNode('C')!;

        expect(graph.getNode('B')).toBeUndefined();
        expect(nodeA.edges.map((e) => e.value)).not.toContain('B');
        expect(nodeC.edges.map((e) => e.value)).not.toContain('B');
    });
});
