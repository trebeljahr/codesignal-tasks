function groupingDishes(dishes) {
    const ingredientArray = dishes.map(dish => dish.filter((_, index) => index !== 0)).reduce((prev, curr)=>[...prev, ...curr], [])
    const ingredients = [...new Set(ingredientArray)]
    const result = ingredients.reduce((prev, ingredient, index) => {
        const includedIn = dishes.filter(dish => dish.slice(1).includes(ingredient)).map(dish => dish[0]).sort()
        if (includedIn.length < 2) return prev 
        return [...prev, [ingredient, ...includedIn]]
    }, [])
    return result.sort((a, b) => a[0] < b[0] ? -1 : a[0] > b[0])
}
