-- Singly-linked lists are already defined with this interface:
-- data ListNode a = ListNode { val :: a
--                            , next :: ListNode a
--                            } | Nil deriving Show

import Data.List

addTwoHugeNumbers a b = returnValue 
    where numberA = read $ formatToNumber a 
          numberB = read $ formatToNumber b
          result = split $ reverse $ show $ numberA + numberB
          returnValue = convertBack $ map reverse (reverse result)

convertBack [] = Nil 
convertBack (val: rest) = ListNode (read val) (convertBack rest)

convert Nil = []
convert (ListNode val next) = val : convert next
      
split :: String -> [String] 
split "" = []
split str = first : split rest
    where parts = splitAt 4 str
          first = fst parts 
          rest = snd parts 
          
formatToNumber l = number
    where list = convert l 
          paddedList = getString (head $ list) : map (pad . getString) (tail $ list) 
          number = intercalate "" paddedList 
          
getString elem = show elem

pad ::  String -> String 
pad elem  = if (length elem < 4) then pad("0" ++ elem) else elem

