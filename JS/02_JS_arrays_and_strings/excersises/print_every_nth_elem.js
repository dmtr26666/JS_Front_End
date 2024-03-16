function solve(array, increment) {
    let result = []
    for (i = 0; i < array.length; i+= increment) {
        result.push(array[i])
    }

    return result
}
