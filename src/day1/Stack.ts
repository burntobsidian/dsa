type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        this.length++;
        this.head = { value: item, next: this.head };
    }
    pop(): T | undefined {
        if (!this.head) return;
        this.length--;
        const poppedNode = this.head;
        this.head = poppedNode.next;
        return poppedNode.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
