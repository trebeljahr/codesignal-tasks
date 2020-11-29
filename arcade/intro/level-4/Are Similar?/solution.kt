fun areSimilar(a: MutableList<Int>, b: MutableList<Int>): Boolean {
    var unmatching = 0
    var indecesOfUnmatching : MutableList<Int> = ArrayList()
    for ((index, value) in a.withIndex()) {
        if (value != b[index]){
            unmatching += 1
            indecesOfUnmatching.add(index)
        }
    }
    if (unmatching > 2) return false
    if (unmatching == 0) return true
    
    val i1 = indecesOfUnmatching[0] 
    val i2 = indecesOfUnmatching[1]
    if (a[i2] == b[i1] && a[i1] == b[i2]) {
        return true
    } 
    return false
}
