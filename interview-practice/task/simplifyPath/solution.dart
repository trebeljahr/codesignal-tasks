String simplifyPath(String path) {
    String result = allOperations(path);
    if (new RegExp(r"\/\.(\w*|$)").hasMatch(result) || result.indexOf("//") != -1) {
       return simplifyPath(result);
    }
    if (result.length > 1) {
        result = result.replaceFirst(new RegExp(r'\/$'),"");
    }
    if (result[0] != "/") {
        result = "/" + result;
    }
    return result;
}

String allOperations(String path) {
    return removeSlashes(goBackDir(goCurrentDir(path)));
}

String removeSlashes(String path) {
    return path.replaceAllMapped(new RegExp(r"(\w*)\/\/(\w*)"), (match){
        return match.group(1) + "/" + match.group(2);
    }); 
}
String goCurrentDir(String path) {
    return path.replaceAllMapped(new RegExp(r"([\w\.]*)\/\.\/([\w\.]*)"), (match){
        return match.group(1) + "/" + match.group(2);
    }); 
}

String goBackDir(String path) {
    RegExp matchPrevDir = new RegExp(r'(\w+\/|^\/)\.\.');   
    return path.replaceFirst(matchPrevDir, "");
}