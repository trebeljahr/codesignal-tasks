function alphabeticShift(inputString: string): string {
    const codes = []
    for (let i = 0; i < inputString.length; i++ ){
        const char = inputString.charCodeAt(i) + 1
        const nextCode = char === 123 ? "a".charCodeAt(0): char    
        codes.push(nextCode)
    }
    return String.fromCharCode(...codes)
}
