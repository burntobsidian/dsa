type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    enqueue(item: T): void {
        this.length++;
        if (!this.tail) {
            this.head = this.tail = { value: item };
            return;
        }

        this.tail.next = { value: item };
        this.tail = this.tail?.next;
    }

    deque(): T | undefined {
        if (!this.head || !this.tail) return;

        this.length--;
        const deletedNode = this.head;
        this.head = this.head.next;
        if (this.length === 0) {
            this.tail = undefined;
        }
        return deletedNode.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
