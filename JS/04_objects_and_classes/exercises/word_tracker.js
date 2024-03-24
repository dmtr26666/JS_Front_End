function solve(input) {
    let searchedWords = input.shift().split(' ');

    let words = {}

    for (const word of searchedWords) {
        words[word] = 0
    }

    for (const currentWord of input) {
        for (const key in words) {
            if (key == currentWord) {
                words[key] += 1;
                continue;
            }
            
        }
    }

    const sortedWords = Object.entries(words).sort((a, b) => b[1] - a[1]);

    for (const array of sortedWords) {
        console.log(`${array[0]} - ${array[1]}`);
    }

}

solve([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    )