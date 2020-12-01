import "regexp"

func isIPv4Address(inputString string) bool {
    numRange := "([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])"
    isIP4 := "^" + numRange + `\.` + numRange + `\.` + numRange + `\.` + numRange + "$"
    val, _ := regexp.MatchString(isIP4, inputString)
    return val
}
