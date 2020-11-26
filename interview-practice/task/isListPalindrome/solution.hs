-- Singly-linked lists are already defined with this interface:
-- data ListNode a = ListNode { val :: a
--                            , next :: ListNode a
--                            } | Nil deriving Show
    
isListPalindrome l = makeList l == reverse (makeList l)

makeList Nil = []
makeList (ListNode value next) = value : makeList next

