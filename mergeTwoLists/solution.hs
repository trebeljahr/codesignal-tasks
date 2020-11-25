-- Singly-linked lists are already defined with this interface:
-- data ListNode a = ListNode { val :: a
--                            , next :: ListNode a
--                            } | Nil deriving Show

import Data.List

mergeTwoLinkedLists l1 l2 = convertBack $ sort $ list1 ++ list2 
    where list1 = makeList l1
          list2 = makeList l2

convertBack [] = Nil 
convertBack (x:xs) = ListNode x (convertBack xs)

makeList Nil = []
makeList (ListNode val next) = val : makeList next