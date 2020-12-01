function arrayChange(inputArray) {
    let sum = 0        
    for (let i = 0; i < inputArray.length; i++) {
        let curr = inputArray[i]
        const prev = i > 0 ? inputArray[i-1] : -Infinity
        if (prev >= curr) {
            const diff = Math.abs(curr - prev) + 1
            inputArray[i] += diff
            sum += diff
        } 
    }
    return sum;
}
