//
// Binary trees are already defined with this interface:
// class Tree<T> {
//   value: T;
//   left: Tree<T>;
//   right: Tree<T>;
//
//   constructor(value: T) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
interface Tree {
    value: number;
    left: Tree;
    right: Tree;
}

function kthSmallestInBST(t: Tree, k: number): number {
    const sum = collapseTree(t);
    return sum[k-1]
}

function collapseTree(t) {
    if (t === null) return []
    return [...collapseTree(t.left), t.value, ...collapseTree(t.right)]
}
