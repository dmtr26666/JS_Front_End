function solve(sentance) {
    let validWords = []

    let sentanceAsArray = sentance.split(' ')

    sentanceAsArray.forEach(element => {
        if (element.startsWith('#') && /^[a-zA-Z]+$/.test(element.slice(1, element.length))) {
            validWords.push(element.slice(1, element.length))
        }
    });

    console.log(validWords.join('\n'));

}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia')