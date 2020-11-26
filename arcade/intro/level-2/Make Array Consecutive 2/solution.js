function makeArrayConsecutive2(statues) {
    let sortedStatues = statues.sort((a, b) => a - b)
    let statuesNecessary = 0
    let i = 0;
    console.log(sortedStatues)
    for (let nextStatue = statues[0]; nextStatue <= sortedStatues[sortedStatues.length - 1]; nextStatue++) {
        console.log(nextStatue, sortedStatues[i])
        if (nextStatue !== sortedStatues[i]) {
            statuesNecessary++
        } else {
            i++
        }
    }
    console.log(statuesNecessary)
    return statuesNecessary
}
