export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1);
    const q: number[] = [source];
    seen[source] = true;

    do {
        const curr = q.shift()!;
        if (curr === needle) break;
        const adjs = graph[curr];
        for (let index = 0; index < adjs.length; index++) {
            if (adjs[index] == 0) continue;
            if (seen[index]) continue;
            seen[index] = true;
            prev[index] = curr;
            q.push(index);
        }
    } while (q.length);

    let curr = needle;
    if (prev[needle] === -1) return null;
    let output: number[] = [];
    while(prev[curr] !== -1) {
       output.push(curr);
       curr = prev[curr];
    }

    return [source].concat(output.reverse());
}

