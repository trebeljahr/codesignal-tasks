//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function isTreeSymmetric(t) {
    if (t === null) return true
    return check(t.left, t.right)
}

const check = (left, right) => {
    if (left === null && right === null) return true
    if (left !== null && right !== null) {
        if (left.value !== right.value) return false
        return check(left.left, right.right) && check(left.right, right.left)
    }
    return false
}