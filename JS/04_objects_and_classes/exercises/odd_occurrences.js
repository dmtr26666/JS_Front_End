function solve(input) {
    let wordsAsArray = input.split(' ');

    let words = {}

    for (let word of wordsAsArray) {

        word = word.toLowerCase()

        if (!words[word]) {
            words[word] = 1
        } else {
            words[word] += 1
        }
    }

    let finalWords = []

    for (const word in words) {
        if (words[word] % 2 != 0) {
            finalWords.push(word)
        }
    }

    console.log(finalWords.join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')