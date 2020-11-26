func isCryptSolution(crypt []string, solution [][]string) bool {
    cryptNum := [3]string{"", "", ""}
    lettersToNumbers := map[string]int{}
    for _, value := range(solution) {
        lettersToNumbers[value[0]], _ = strconv.Atoi(value[1])
    }
    for i, word := range(crypt) {
        for _, letter := range(word) {
            digit := strconv.Itoa(lettersToNumbers[string(letter)])
            cryptNum[i] += digit
        }
    }
    fmt.Println(cryptNum)
    cryptInts := [3]int{0, 0, 0}
    for i, number := range(cryptNum) {
        firstDigit := string(number[0])
        if firstDigit == "0" && len(number) > 1 {return false} 
        cryptInts[i], _ = strconv.Atoi(number)
    }
    if cryptInts[0] + cryptInts[1] != cryptInts[2] {return false}
    return true; 
}
