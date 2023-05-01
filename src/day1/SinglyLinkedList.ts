export default class SinglyLinkedList<T> {
    public length: number;
    head: ListNode<T> | undefined;
    tail: ListNode<T> | undefined;

    constructor() {
        this.length = 0;
    }

    prepend(item: T): void {
        if (!this.head) {
            this.head = { value: item };
            this.length += 1;
            return;
        }

        const currentNode: ListNode<T> = { value: item, next: this.head };
        this.head = currentNode;
        this.length += 1;
    }

    insertAt(item: T, idx: number): void {
        if (idx === 0) {
            return this.prepend(item);
        }

        if (this.length === idx) {
            return this.append(item);
        }

        if (this.length < idx + 1) return;
        if (!this.head) return;
        let currentCount = 0;
        let node = this.head;
        let prevNode: ListNode<T> | undefined;
        while(node.next && currentCount++ !== idx) {
            node = node.next;
            prevNode = node;
        }

        if (prevNode && node) {
            const newNode: ListNode<T> = { value: item, next: node };
            prevNode.next = newNode;
            this.length += 1;
        }
    }

    append(item: T): void {
        if (!this.head) {
            this.head = { value: item };
            this.length += 1;
            return;
        }

        const tailNode: ListNode<T> = { value: item };
        (this.tail || this.head).next = tailNode;
        this.tail = tailNode;
        this.length += 1;
    }

    remove(item: T): T | undefined {
        if (!this.head) return;
        let node = this.head;

        if (this.head.value === item) {
            this.head = this.head.next;
            node.next = undefined;
            this.length -= 1;
            return node.value;
        }

        let prevNode: ListNode<T> | undefined;

        while (node.next && node.value !== item) {
            prevNode = node;
            node = node.next;
        }

        if (node && prevNode && node.value === item) {
            const isTail = !node.next;
            prevNode.next = node.next;
            node.next = undefined;
            if (isTail) this.tail = prevNode;
            this.length -= 1;
            return node.value;
        }

        return undefined;
    }

    get(idx: number): T | undefined {
        if (idx === 0) return this.head?.value;
        if (!this.head) return undefined;
        let currentCount = 0;
        let node = this.head;
        while(node.next && currentCount++ !== idx) {
            node = node.next;
        }

        return node?.value;
    }
    removeAt(idx: number): T | undefined {
        if(!this.head) return undefined;
        let node = this.head;
        let prevNode: ListNode<T> | undefined;
        var currentIndex = 0;
        while(node.next && currentIndex++ != idx) {
            prevNode = node;
            node = node.next;
        }

        if (node) {
            if (!prevNode) {
                this.head = node.next;
                node.next = undefined;
            } 
            else {
                prevNode.next = node.next;
                node.next = undefined;
            }

            this.length -= 1;
            return node.value;
        }

        return undefined;
    }

    iterate() {
        var node = this.head;
        while(node) {
            console.log(node.value);
            node = node.next;
        }
    }
}
