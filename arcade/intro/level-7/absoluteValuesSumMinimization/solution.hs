import Data.List
absoluteValuesSumMinimization a = result
    where sums = map (\x -> reducer a x) a 
          smallest = foldl1' min sums
          indeces = elemIndices smallest sums  
          numsWithSameSums = [j | (i, j) <- zip [0..] a, i `elem` indeces]
          result = foldl1' min numsWithSameSums
          
reducer a x = foldl (\total y -> sumUp total x y) 0 a
sumUp total x y =  total + (absDiff x y) 
absDiff x y = abs $ x - y 