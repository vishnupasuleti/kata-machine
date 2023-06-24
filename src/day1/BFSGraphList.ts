export default function bfs(
    list: WeightedAdjacencyList,
    source: number,
    needle: number,
): number[] | null {
    const seen = new Array(list.length).fill(false);
    const prev = new Array(list.length).fill(-1);
    const q: number[] = [source];
    seen[source] = true;
    do {
        const curr = q.shift()!;
        if (curr === needle) break;
        const currentList = list[curr] || [];
        for (let i = 0; i < currentList.length; i++) {
            const element = currentList[i];
            if (seen[element.to]) continue;
            seen[element.to] = true;
            q.push(element.to);
            prev[element.to] = curr; // keep track of the previous
        }
    } while (q.length);
    let curr = needle;
    if (prev[curr] === -1) return null;
    const out: number[] = [];
    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr];
    }

    return [source].concat(out.reverse());
}
