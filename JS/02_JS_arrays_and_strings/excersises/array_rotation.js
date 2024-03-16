function solve(array, numberOfRotations) {
    for (i = 0; i < numberOfRotations; i++) {
        removed_elem = array.shift()
        array.push(removed_elem)
    }

    console.log(array.join(' '));
}

solve([51, 47, 32, 61, 21], 2)