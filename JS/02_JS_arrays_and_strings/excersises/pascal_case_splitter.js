function solve(text) {

    let words = []
    let start

    for (i = 0; i < text.length; i++) {
        if (text[i] == text[i].toUpperCase()) {

            if (start == undefined) {
                start = i
            } else {
                words.push(text.substring(start, i))
                start = i
            }

            
        }
    }
    words.push(text.substring(start))
    console.log(words.join(', '))
}

solve('HISIsAnnoyingToDo')