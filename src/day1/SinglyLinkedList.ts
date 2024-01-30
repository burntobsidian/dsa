type Node<T> = {
    value: T;
    next: Node<T> | undefined;
};

export default class SinglyLinkedList<T> {
    public length: number;
    private head: Node<T> | undefined;
    private tail: Node<T> | undefined;

    constructor() {
        this.length = 0;
    }

    prepend(item: T): void {
        this.head = { value: item, next: this.head };
        if (!this.tail) {
            this.tail = this.head;
        }
        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (idx === 0) {
            this.head = { value: item, next: this.head };
            this.length++;
            if (this.length === 1) {
                this.tail = this.head;
            }
            return;
        }
        let currNode = this.head;
        for (let i = 0; i < idx - 1 && !!currNode; i++) {
            currNode = currNode.next;
        }
        if (!currNode) return;

        currNode.next = { value: item, next: currNode.next };
        this.length++;
        if (currNode.next === undefined) {
            this.tail = currNode;
        }
    }

    append(item: T): void {
        const node = { value: item, next: undefined };
        if (this.tail) {
            this.tail.next = node;
            this.tail = this.tail.next;
        } else {
            this.head = this.tail = node;
        }
        this.length++;
    }

    remove(item: T): T | undefined {
        if (!this.head || !this.tail) return;

        if (this.head.value === item) {
            const deletedNode = this.head;
            this.head = this.head.next;
            this.length--;
            if (this.length === 0) {
                this.tail = undefined;
            }
            return deletedNode.value;
        }

        let currNode = this.head;

        while (currNode.next !== undefined && currNode.next.value !== item) {
            currNode = currNode.next;
        }

        const deletedNode = currNode.next;

        if (deletedNode === undefined) return;

        currNode.next = deletedNode.next;
        this.length--;
        if (this.tail === deletedNode) {
            this.tail = currNode;
        }

        return deletedNode.value;
    }

    get(idx: number): T | undefined {
        let i = 0;
        let currNode = this.head;
        while (i <= idx && !!currNode) {
            if (i === idx) break;
            i++;
            currNode = currNode.next;
        }
        return currNode?.value;
    }

    removeAt(idx: number): T | undefined {
        if (!this.head || !this.tail) return;
        if (idx === 0) {
            const deletedNode = this.head;
            this.head = this.head.next;
            this.length--;
            if (this.length === 0) {
                this.tail = undefined;
            }
            return deletedNode.value;
        }

        let currNode: Node<T> = this.head;
        for (let i = 0; i < idx - 1 && currNode?.next !== undefined; i++) {
            currNode = currNode.next;
        }

        const deletedNode = currNode.next;
        if (deletedNode === undefined) return;

        currNode.next = deletedNode.next;
        this.length--;
        if (this.tail === deletedNode) {
            this.tail = currNode;
        }

        return deletedNode.value;
    }
}
