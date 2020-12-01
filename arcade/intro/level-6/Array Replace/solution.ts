function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
    return inputArray.map((elem) => elem === elemToReplace ? substitutionElem : elem)
}
