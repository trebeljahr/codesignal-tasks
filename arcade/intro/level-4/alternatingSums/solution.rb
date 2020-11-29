def alternatingSums(a)
    sum1 = 0
    sum2 = 0
    a.each_with_index {|value, index| 
        if index % 2 == 0
            sum1 += value
        else 
            sum2 += value
        end
    }
    return [sum1, sum2]
end
