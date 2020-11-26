function firstNotRepeatingCharacter(s) {
    const allChars = new Set()
    const nonRepeatingChars = new Set()
    s.split("").forEach((elem, index) => {
        if (allChars.has(elem)) {
            nonRepeatingChars.delete(elem)
        } else {
            allChars.add(elem)
            nonRepeatingChars.add(elem)
        }
    })
    console.log(nonRepeatingChars)
    if (nonRepeatingChars.size === 0) return "_"
    return nonRepeatingChars.values().next().value
}
