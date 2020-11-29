def reverseInParentheses(str)
    matches = str.scan /\([^\(^\)]*\)/
    matches.each do |item|
        puts item 
        str.sub!(item, item[1..-2].reverse())        
    end 
    if str.index("(") 
        return reverseInParentheses(str)
    end 
    return str
end
