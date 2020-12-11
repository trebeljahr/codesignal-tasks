arithmeticExpression a b c
    | a + b == c = True
    | a - b == c = True
    | a * b == c = True
    | mod a b == 0 && div a b == c = True 
    | otherwise = False