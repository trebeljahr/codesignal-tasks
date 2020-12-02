function swapLexOrder(str, pairs) {
    let indices = str.split("").map((_, i)=>i)
    const changeIndices = ([first,second]) => {
        indices = indices.map((index)=> {
            const pair1 = indices[second-1]
            const pair2 = indices[first-1]
            return index === pair1 ? pair2 : index 
        })
    }
    pairs.forEach(pair => changeIndices(pair))
    const sets = [];
    indices.forEach((index, i)=>{
        sets[index] = [...(sets[index] || []), str[i]]
    })
    const sortedSets = sets.map( set => set.sort().reverse())
    return indices.map( i => sortedSets[i].shift()).join("")
}