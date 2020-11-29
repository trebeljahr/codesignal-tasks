int commonCharacterCount(string s1, string s2) {
    int out = 0;
    for (auto letter : s1){
        size_t index = s2.find(letter);
        if (index < s2.length()) {
            out++;
            s2.erase(index, 1);
        }
    }
    return out;
}

