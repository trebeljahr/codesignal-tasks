import Data.List 
stringsRearrangement xs = True `elem` filtered
    where perms = map possibleArrangement (permutations xs)
          filtered = map legit perms 

legit xs = length (filter (\x -> not $ differByMoreThanOne (fst x) (snd x)) xs) == 0 
possibleArrangement xs = tail $ init $ [ (i, j) | (i, j) <- zip ([xs !! 0] ++ xs) (xs ++ [last xs])]
unmatchingChars a b = [ (i, j) | (i, j) <- zip a b, i /= j]
differByMoreThanOne a b = length (unmatchingChars a b) == 1
