import (
	"math"
)

func arrayMaximalAdjacentDifference(inputArray []int) int {
    max := 0
    
    for i, val := range inputArray {
        prev := val
        if i > 0 { 
            prev = inputArray[i-1]
        }
        diff := val - prev
        absDiff := int(math.Abs(float64(diff)))
        if absDiff > max {
            max = absDiff
        }
    }
    return max
}
