function chessBoardCellColor(cell1: string, cell2: string): boolean {
    const convert1 = convertCell(cell1)
    const convert2 = convertCell(cell2)
    const xDiff = Math.abs(convert1[0] - convert2[0])
    const yDiff =  Math.abs(convert1[1] - convert2[1])
    const distance = xDiff + yDiff
    return distance % 2 === 0
}

function convertCell(cell: string):[number, number] {
    switch (cell[0]) {
        case "A": 
            return [1,  parseInt(cell[1])]
        case "B": 
            return [2,  parseInt(cell[1])]
        case "C": 
            return [3,  parseInt(cell[1])]
        case "D": 
            return [4,  parseInt(cell[1])]
        case "E": 
            return [5,  parseInt(cell[1])]
        case "F": 
            return [6,  parseInt(cell[1])]
        case "G": 
            return [7,  parseInt(cell[1])]
        case "H": 
            return [8,  parseInt(cell[1])]
    } 
    return [-1,  parseInt(cell[1])]
}
