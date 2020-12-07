int findAndRemoveRightMost(Tree<int> *& t) {
    if (t -> right== NULL) {
        int rightMost = t -> value;
        t = t -> left; 
        return rightMost; 
    }
    return findAndRemoveRightMost(t -> right);
}

void handleRootRemoval(Tree<int> *& t, int elem) {
    if (t -> left) {
        t -> value = findAndRemoveRightMost(t -> left); 
    } else if (t -> right) {
        t = t -> right;
    } else {
        t = NULL; 
    }
}

void deleteOneFrom(Tree<int> *& t, int elem) {
    if (!t) {
        return; 
    }
    int root = t -> value;
    if (elem == root) {
        handleRootRemoval(t, elem);
    }
    if (elem > root) {
        deleteOneFrom(t -> right, elem);
    }
    if (elem < root) {
        deleteOneFrom(t -> left, elem); 
    }
}

Tree<int> * deleteFromBST(Tree<int> * t, vector<int> queries) {
    for(auto elem : queries) {
        deleteOneFrom(t, elem);
    }
    return t; 
}