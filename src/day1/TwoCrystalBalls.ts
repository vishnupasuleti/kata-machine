export default function two_crystal_balls(breaks: boolean[]): number {
   const jumps = Math.floor(Math.sqrt(breaks.length));
   let i = jumps;
   for(; i < breaks.length; i+= jumps) {
      if (breaks[i]) break;
   }

   i -= jumps;

   for (let index = 0; index < jumps && i < breaks.length; index++, ++i) {
     if (breaks[i]) return i;   
   }

   return -1;
}

function binary_sol(breaks: boolean[]) : number {
    let min = 0;
    let max = breaks.length;
    let ballCount = 2;
    do {
        const mid = Math.floor(min + (max - min) / 2);
        const floor = breaks[mid];
        if (floor) {
            ballCount -= 1;
            max = mid;
        } else {
            min = mid + 1;
        }
    } while (ballCount > 1 && min < max)
    for (let index = min; index < max; index++) {
        if (breaks[index]) return index;        
    }

    return -1;
}