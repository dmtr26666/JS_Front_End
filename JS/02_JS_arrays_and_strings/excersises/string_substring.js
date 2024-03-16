function solve(word, text) {
    let textAsArray = text.split(' ')
    let Found = false

    for (i = 0; i < textAsArray.length; i++) {
        if (word.toLowerCase() == textAsArray[i].toLowerCase()) {
            console.log(word);
            Found = true
            break;
        }
    } 

    if (Found == false) {
        console.log(`${word} not found!`)
    }
}

solve('python', 'JavaScript is the best programming language')