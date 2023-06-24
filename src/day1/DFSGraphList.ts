function walk(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
    seen: boolean[],
    path: number[],
): boolean {
    //if (seen[source]) return false;
    seen[source] = true;
    path.push(source);
    if (source == needle) return true;
    const curr = graph[source];

    for (let i = 0; i < curr.length; i++) {
        const edge = curr[i];
        if (!seen[edge.to] && walk(graph, edge.to, needle, seen, path)) {
            return true;
        }
    }
    path.pop();
    return false;
}

export default function dfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
): number[] | null {
    const seen = new Array(graph.length).fill(false);
    const path: number[] = [];
    walk(graph, source, needle, seen, path);
    if (path.length === 0) return null;

    return path;
}
