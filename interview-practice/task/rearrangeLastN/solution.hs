-- Singly-linked lists are already defined with this interface:
-- data ListNode a = ListNode { val :: a
--                            , next :: ListNode a
--                            } | Nil deriving Show

rearrangeLastN l n = out
    where list = reverse $ makeList l
          splits = splitAt n list
          first = reverse $ snd splits
          second = reverse $ fst splits
          out = convertBack $ concat $ second : [first]     

convertBack [] = Nil
convertBack (x:xs) = ListNode x (convertBack xs) 

makeList Nil = []
makeList (ListNode val next) = val : makeList next