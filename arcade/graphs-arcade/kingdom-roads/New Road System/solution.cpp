bool newRoadSystem(vector<vector<bool>> roadRegister) {
    cout << boolalpha;   
    vector<int> out;   
    for(size_t i = 0; i < roadRegister.size(); i++) {
        int sumOut = 0;
        for(size_t j = 0; j < roadRegister[i].size(); j++) {
            if (roadRegister[i][j]) {
                sumOut++;
            }
        }
        cout << sumOut << endl; 
        out.push_back(sumOut);
    }
    
    vector<int> in;   
    for(size_t i = 0; i < roadRegister[0].size(); i++) {
        int sumIn = 0; 
        for(size_t j = 0; j < roadRegister.size(); j++) {
            if (roadRegister[j][i]) {
                sumIn++;
            }
        }
        cout << sumIn << endl; 
        in.push_back(sumIn);
    }
    return in == out;
}
