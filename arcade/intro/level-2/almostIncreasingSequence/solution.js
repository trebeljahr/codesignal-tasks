function almostIncreasingSequence(sequence) {
    if (sequence.length <= 2) return true
    
    let secondTry = false
    for (let i = 0; i < sequence.length - 1; i++) {
        const elem1 = sequence[i]
        const elem2 = sequence[i + 1]
        if (elem1 >= elem2) {
            if (secondTry) return false
            const elem3 = i + 2 <= sequence.length - 1 ? sequence[i + 2] : Infinity
            const elem4 = i - 1 >= 0 ? sequence[i - 1] : -Infinity
            console.log(elem4, elem1, elem2, elem3)
            console.log(secondTry)
            if (!(elem3 > elem2 && elem2 > elem4 || elem3 > elem1 && elem1 > elem4)) {
                return false
            } 
            secondTry = true
        }
    }
    
    return true
}
