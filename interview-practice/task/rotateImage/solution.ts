function rotateImage(a: number[][]): number[][] {
    const b = JSON.parse(JSON.stringify(a))
    for (let i = 0; i < a.length; i++) {
        const row = b[i]
        for (let j = 0; j < a.length; j++) {
            console.log(a.length - 1 - i, j)
            a[j][a.length - 1- i] = row[j]
        }
    }
    return a
}
