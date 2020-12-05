function findProfession(level, pos) {
    if (level === 1) return "Engineer"
    if (level === 2 && pos === 1) return "Engineer"
    if (level === 2 && pos === 2) return "Doctor"
    const left = pos % 2 === 1
    const prevPos = Math.ceil(pos / 2)
    const parentWasEngineer = findProfession(level - 1, prevPos) === "Engineer"
    if (parentWasEngineer) return left ? "Engineer" : "Doctor"
    return left ? "Doctor" : "Engineer"
}
