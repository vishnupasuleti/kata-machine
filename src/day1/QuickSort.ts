const qs = (arr: number[], low: number, high: number) : void => {
    if (low >= high) return;
    const pivotIdx = partition(arr, low, high);
    qs(arr, low, pivotIdx - 1);
    qs(arr, pivotIdx + 1, high); 
}

const partition = (arr: number[], low: number, high: number) : number => {
    const pivot = arr[high]; // 6
    let idx = low - 1;
    for (let index = low; index < high; index++) {
        if (arr[index] <= pivot) { // 1 <= 6
            idx++; //0
            const temp = arr[index];
            arr[index] = arr[idx];
            arr[idx] = temp;
        }
    }

    idx++;
    arr[high] = arr[idx];
    arr[idx] = pivot;
    var x = '';
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        x += element.toString() + ' ';
    }
    console.log(x);
    console.log(idx);
    return idx;
}


export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}