export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;
    do {
        const mid = Math.floor(low + (high - low) /2);
        if (haystack[mid] === needle) return true;
        else if (haystack[mid] > needle) high = mid;
        else low = mid + 1;
    } while(low < high)
    return false;
    ///return bs(haystack, needle, 0, haystack.length);
}

function bs(haystack: number[], needle: number, lowIndex: number, highIndex: number): boolean {
    if (lowIndex > highIndex) return false;
    const mid = Math.floor(lowIndex + (highIndex - lowIndex) / 2);
    if (haystack[mid] === needle) return true;
    else if (haystack[mid] < needle) return bs(haystack, needle, mid + 1, highIndex);
    else return bs(haystack, needle, lowIndex, mid -1);    
}