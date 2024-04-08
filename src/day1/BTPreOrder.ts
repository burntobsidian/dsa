function walk(curr: BinaryNode<number> | null, path: number[]): void {
    if (!curr) {
        return;
    }

    // pre
    path.push(curr.value);

    //recurse
    walk(curr.left, path);
    walk(curr.right, path);
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    let path: number[] = [];
    walk(head, path);
    return path;
}
