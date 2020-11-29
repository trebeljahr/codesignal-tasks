int sumString(string str) {
    int sum = 0;
    for (auto elem : str){
        int digit = std::atoi(&elem);
        sum += digit;
    }
    return sum;
}

bool isLucky(int n) {
    string s = to_string(n);
    string half = s.substr(0, s.length()/2);
    string otherHalf = s.substr(s.length()/2);
    int sum1 = sumString(half);
    int sum2 = sumString(otherHalf);
    return sum1 == sum2;
}
