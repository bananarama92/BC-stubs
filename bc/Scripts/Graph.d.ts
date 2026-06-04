/**
 * @template {string} T
 * @typedef DirectedGraphVertex
 * @property {T} vertex
 * @property {number} [index]
 * @property {number} [lowLink]
 * @property {boolean} [onStack]
 */
/**
 * A class representing a directed graph. The graph consists of string nodes, and edges defined by string to/from
 * 2-tuples
 * @template {string} T
 */
declare class DirectedGraph<T extends string> {
    /**
     * @param {T[]} vertices
     * @param {[T, T][]} edges
     */
    constructor(vertices: T[], edges: [T, T][]);
    vertices: T[];
    size: number;
    edges: [T, T][];
    adjacencyList: Record<string, string[]>;
    /**
     * Constructs and sets the adjacency list for this graph based on its edge definitions
     * @returns {Record<string, string[]>} - The adjacency list for the graph
     */
    buildAdjacencyList(): Record<string, string[]>;
    /**
     * Creates a new subgraph of this graph by removing a given vertex, along with all edges attached to that vertex
     * @param {T} vertex - The vertex to remove
     * @returns {DirectedGraph<T>} - The subgraph of this graph obtained by removing the given vertex and all attached
     * edges
     */
    removeVertex(vertex: T): DirectedGraph<T>;
    /**
     * Creates a new subgraph of this graph by keeping only the given vertices and any edges between them
     * @param {T[]} vertices - The vertices to keep
     * @returns {DirectedGraph<T>} - The subgraph of this graph obtained by only keeping the given vertices and any edges
     * between them
     */
    subgraphFromVertices(vertices: T[]): DirectedGraph<T>;
    /**
     * Calculates the strongly connected components of the graph using Tarjan's strongly connected components algorithm.
     * See https://en.wikipedia.org/wiki/Tarjan%27s_strongly_connected_components_algorithm
     * @returns {T[][]} - An array containing the strongly connected components of this graph, each represented as
     * an array of vertex numbers
     */
    getStronglyConnectedComponents(): T[][];
    /**
     * Finds all simple cycles in this graph using Johnson's algorithm (see https://epubs.siam.org/doi/10.1137/0204007)
     * @returns {T[][]}
     */
    findCycles(): T[][];
}
type DirectedGraphVertex<T extends string> = {
    vertex: T;
    index?: number | undefined;
    lowLink?: number | undefined;
    onStack?: boolean | undefined;
};
