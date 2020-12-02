function areFollowingPatterns(strings, patterns) {
    for (let i = 0; i<strings.length; i++){
        for (let j = 0; j<strings.length; j++){
            if (strings[i] == strings[j] && patterns[i] !== patterns[j]) return false
            if (strings[i] !== strings[j] && patterns[i] === patterns[j]) return false
        }
    }
    return true
}
