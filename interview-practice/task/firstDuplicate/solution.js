function firstDuplicate(a) {
    const obj = {}
    a.forEach((elem, index) => {
        if (elem in obj) {
            console.log(index);
            if (obj[elem] === 0) {
                obj[elem] = index
            }
        } else { 
            obj[elem] = 0 
        }
    })
    
    const duplicates = Object.entries(obj).filter(a => a[1] !== 0)
    console.log(duplicates)
    const noDuplicates = duplicates.length === 0
    
    if (noDuplicates) return -1
    
    const biggest = duplicates.sort((a,b) => a[1]-b[1])[0][0]
    console.log(biggest)
    return parseInt(biggest)
}
