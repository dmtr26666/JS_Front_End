function solve(a, b) {

    let arrayOfChars = []

    if (a.charCodeAt(0) > b.charCodeAt(0)) {
        for (let index = a.charCodeAt(0) - 1; index > b.charCodeAt(0); index--) {
            arrayOfChars.push(String.fromCharCode(index))
        }
        const reversed = arrayOfChars.reverse()
        console.log(reversed.join(' '))
    } else {
        for (let index = a.charCodeAt(0) + 1; index < b.charCodeAt(0); index++) {
            arrayOfChars.push(String.fromCharCode(index))  
        }
        console.log(arrayOfChars.join(' '));
    }

    

}

solve('C', '#')