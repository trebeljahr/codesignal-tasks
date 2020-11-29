int[] sortByHeight(int[] a) {
    int tree = -1;
    bool[] placeHolder = a.Select(thing => thing == tree).ToArray();
    int[] personHeights = a.Where(thing => thing != tree).ToArray();
    Array.Sort(personHeights);
    int next = 0;
    int nextPersonHeight() {
        int personHeight = personHeights[next];
        next++;
        return personHeight;
    }
    return placeHolder.Select(isTree => isTree ? tree : nextPersonHeight()).ToArray();
}