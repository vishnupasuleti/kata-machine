export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
    if (a === null && b === null) return true;
    if (a === null || b === null) return false;
    if (a.value !== b.value) return false;

    return compare(a.left, b.left) && compare(a.right, b.right);
}

const reverseTree = (node: BinaryNode<Number> | null) => {
    if (!node) return;
    const temp = node.right;
    node.right = node.left;
    node.left = temp;
    reverseTree(node.left);
    reverseTree(node.right);
}