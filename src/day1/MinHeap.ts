export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {
        this.data.push(value);
        ++this.length;
        this.heapifyUp(this.length - 1); 
    }

    private heapifyUp(currentIndex: number) {
        if (currentIndex === 0) return;
        const swapIndex = this.parent(currentIndex);
        if (this.data[swapIndex] > this.data[currentIndex]) {
            var temp = this.data[swapIndex];
            this.data[swapIndex] = this.data[currentIndex];
            this.data[currentIndex] = temp;
            this.heapifyUp(swapIndex);
        }
    }

    private heapiifyDown(currentIndex: number) {
        const left = this.leftChild(currentIndex);
        const right = this.rightChild(currentIndex);

        if ( currentIndex >= this.length || left >= this.length) return;
        const cv = this.data[currentIndex];
        const lv = this.data[left];
        const rv = this.data[right];

        if (rv > lv && cv > lv) {
            this.data[left] = cv;
            this.data[currentIndex] = lv;
            this.heapiifyDown(left);
        } else if (lv > rv && cv > rv) {
            this.data[right] = cv;
            this.data[currentIndex] = rv;
            this.heapiifyDown(right);
        } 
    }

    private leftChild(idx: number) {
        return 2*idx + 1;
    }

    private rightChild(idx: number) {
        return 2*idx + 2;
    }

    private parent(idx: number) {
        return Math.floor((idx - 1) / 2);
    }

    delete(): number {
        if (this.length == 0) {
            return -1;
        }

        --this.length;
        const out = this.data[0];
        if (this.length === 0) {
            this.data = [];
            return out;
        }
       this.data[0] = this.data[this.length];
       this.heapiifyDown(0);
       return out;
    }
}
