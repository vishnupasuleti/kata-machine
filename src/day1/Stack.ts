type SNode<T> = {
    item: T;
    next?: SNode<T>;
    prev?: SNode<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: SNode<T>;
    private tail?: SNode<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    push(item: T): void {
        ++this.length;
        const node: SNode<T> = { item: item };
        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }
    
    pop(): T | undefined {
        if (!this.tail) {
            return undefined;
        }
        --this.length;
        const tail = this.tail;
        this.tail = this.tail.prev;
        if (this.tail) this.tail.next = undefined;
        else {
            this.head = undefined;
        }
        tail.prev = undefined;
        return tail.item;
    }
    peek(): T | undefined {
        return this.head?.item;
    }
}
