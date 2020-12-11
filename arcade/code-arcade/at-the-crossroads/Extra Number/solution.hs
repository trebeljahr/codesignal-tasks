import Data.List
extraNumber a b c = filtered !! 0
    where xs = [a, b, c]    
          filtered = filter (\x -> (length $ elemIndices x xs) < 2) xs