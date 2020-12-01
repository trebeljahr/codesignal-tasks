bool evenDigitsOnly(int n) {
    string str = to_string(n);
    for (char c : str) {
        if (std::atoi(&c) % 2 == 1) {
            return false;
        } 
    }
    return true;
}
