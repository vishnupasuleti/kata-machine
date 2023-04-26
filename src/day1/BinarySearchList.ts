export default function bs_list(haystack: number[], needle: number): boolean {
    return bs(haystack, needle, 0, haystack.length);
}

function bs(haystack: number[], needle: number, lowIndex: number, highIndex: number): boolean {
    if (lowIndex > highIndex) return false;
    const mid = Math.floor(lowIndex + (highIndex - lowIndex) / 2);
    if (haystack[mid] === needle) return true;
    else if (haystack[mid] < needle) return bs(haystack, needle, mid + 1, highIndex);
    else return bs(haystack, needle, lowIndex, mid -1);    
}