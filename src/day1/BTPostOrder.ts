function walk(node: BinaryNode<number> | null, path: number[]): void {
    if (!node) {
        return;
    }

    //recurse
    walk(node.left, path);
    walk(node.right, path);

    // post
    path.push(node.value);
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    let path: number[] = [];
    walk(head, path);
    return path;
}
