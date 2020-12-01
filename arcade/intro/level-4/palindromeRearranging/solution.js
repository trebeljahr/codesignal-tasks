function palindromeRearranging(inputString) {
    const that = inputString.split("").reduce((agg, curr)=>{
        if (curr in agg) {
            return { ...agg, [curr]: agg[curr]+1}
        } 
        return { ...agg, [curr]: 1}
    }, {})
    return Object.values(that).reduce((agg, curr)=> {
        return curr % 2 === 0 ? agg : agg + 1
    }, 0) < 2
}
