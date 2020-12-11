tennisSet score1 score2 
    | score1 == 6 && score2 < 5 = True
    | score2 == 6 && score1 < 5 = True
    | score1 == 7 && score2 < 7 && score2 >= 5 = True
    | score2 == 7 && score1 < 7 && score1 >= 5 = True
    | otherwise = False