vector<string> allLongestStrings(vector<string> inputArray) {
   vector<string> out = {};
   size_t max = 0;
   for (auto line : inputArray) {
        if (line.length() > max) {
            max = line.length();
        }
    }
   for (auto line : inputArray) {
        if (line.length() == max) {
           out.insert(out.end(), line);
        }
    }
   return out;
}



