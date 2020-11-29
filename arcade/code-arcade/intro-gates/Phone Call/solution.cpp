int phoneCall(int min1, int min2_10, int min11, int s) {
    int mins = 1;
    s -= min1;
    if (s < 0) {return 0;}
    while (true) {
        if (mins < 10) {
            s -= min2_10;
        } else {
            s -= min11;
        }
        if (s >= 0){
            mins++;
        } else {
            break;
        }
    }
    return mins;
}
