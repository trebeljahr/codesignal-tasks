Tree<int> restoreBinaryTree(List<int> inorder, List<int> preorder) {
    int index = inorder.indexOf(preorder[0]);
    List<int> leftSide = inorder.sublist(0, index);
    List<int> leftSidePreorder = preorder.sublist(1, leftSide.length + 1);
    List<int> rightSide = inorder.sublist(index+1);
    List<int> rightSidePreorder = preorder.sublist(leftSide.length + 1);
    Tree<int> tree = new Tree(preorder[0]);
    tree.right = rightSide.length == 0 ? null : restoreBinaryTree(rightSide, rightSidePreorder);
    tree.left = leftSide.length == 0 ? null : restoreBinaryTree(leftSide, leftSidePreorder);
    return tree;     
}