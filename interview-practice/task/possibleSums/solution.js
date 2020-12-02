function possibleSums(coins, quantities) {
    const sums = new Set([0]);
    coins.forEach((coin, i) => {
        for (let sum of [...sums]) {
            for (let amount = 1; amount <= quantities[i]; amount++) {
                const newSum = sum + coin * amount
                sums.add(newSum)
            }
        }
    })
    return sums.size - 1
}
