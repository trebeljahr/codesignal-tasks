def addBorder(picture)
    pad = "*" * (picture[0].length + 2);
    return [pad, *picture.map{|string| "*"+string+"*"}, pad]
end
