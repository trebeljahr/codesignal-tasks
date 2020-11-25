-- Singly-linked lists are already defined with this interface:
-- data ListNode a = ListNode { val :: a
--                            , next :: ListNode a
--                            } | Nil deriving Show

reverseNodesInKGroups l k = out
    where splits = split (makeList l) k
          reversed = map (\arr -> if length arr >= k then reverse arr else arr) splits 
          out = convertBack $ concat reversed 

split [] k = []
split list k = first : split rest k  
    where parts = splitAt k list
          first = fst parts
          rest = snd parts

convertBack [] = Nil
convertBack (x:xs) = ListNode x (convertBack xs) 

makeList Nil = []
makeList (ListNode val next) = val : makeList next