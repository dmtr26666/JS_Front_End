function solve(words, sentance) {
    let wordsAsArray = words.split(', ')
    let sentanceAsArray = sentance.split(' ')
    let finalSentance = ''

    for (i = 0; i < sentanceAsArray.length; i++) {
        if (sentanceAsArray[i].includes('*')) {
            let wordLength = sentanceAsArray[i].length

            for (z = 0; z < wordsAsArray.length; z++) {
                if (wordsAsArray[z].length == wordLength) {
                    sentanceAsArray[i] = wordsAsArray[z]
                    break;
                }
            }
        }
    }

    finalSentance = sentanceAsArray.join(' ')

    console.log(finalSentance);

}

solve('great, learning','softuni is ***** place for ******** new programming languages')