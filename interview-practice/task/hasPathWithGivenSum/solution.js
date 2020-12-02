//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function hasPathWithGivenSum(t, s, acc=0, depth = 0) {
    if (t !== null) {
        acc += t.value;
        if (t.right === null && t.left === null && acc === s) {
        return true
        }
        const left = hasPathWithGivenSum(t.left, s, acc, depth + 1)
        const right = hasPathWithGivenSum(t.right, s, acc, depth + 1)
        return left || right
    }
    return acc === s && depth > 1
}
