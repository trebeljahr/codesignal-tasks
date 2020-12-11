knapsackLight value1 weight1 value2 weight2 maxW = 
    if weight1 + weight2 <= maxW then value1 + value2
    else if (weight1 > maxW) && (weight2 <= maxW) then value2 
    else if (weight2 > maxW) && (weight1 <= maxW) then value1 
    else if (weight1 <= maxW) && (weight2 <= maxW) then max value1 value2
    else 0
