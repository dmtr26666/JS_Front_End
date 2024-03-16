function solve(sentance, word) {
    let sentance_as_array = sentance.split(' ')
    occurances = 0

    for (i = 0; i < sentance_as_array.length; i++) {
        if (sentance_as_array[i] == word) {
            occurances += 1
        }
    }
    console.log(occurances)
}

solve('This is a word and it also is a sentence', 'is')