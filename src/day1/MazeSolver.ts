const direction: Point[] = [
    { x: 0, y: 1 },
    { x: 1, y: 0 },
    { x: 0, y: -1 },
    { x: -1, y: 0 }
]

const walk = (maze: string[], wall: string, current: Point, end: Point, seen: boolean[][], path: Point[]) => {
    if (current.y < 0 || current.y >= maze.length ||
        current.x < 0 ||
        current.x >= maze[0].length) return false;
        
    if (maze[current.y][current.x] == wall) return false;

    if (end.y === current.y && end.x === current.x)
    {
        path.push(current);
        return true;
    } 
    if (seen[current.y][current.x]) return false;
    seen[current.y][current.x] = true;
    path.push(current);

    for (let index = 0; index < direction.length; index++) {
        const element = direction[index];
        if (walk(maze, wall, {
            x: current.x + element.x,
            y: current.y + element.y,
        }, end, seen, path)){
            return true;
        }        
    }

    path.pop();
    return false;
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for (let index = 0; index < maze.length; index++) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path)

    return path;
}