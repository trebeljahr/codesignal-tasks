isInfiniteProcess a b = (a > b) || (mod diff 2 == 1)
    where diff = b - a