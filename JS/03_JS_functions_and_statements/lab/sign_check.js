function solve(num1, num2, num3) {
    numsInArray = [num1, num2, num3]
    let numberOfNegatives = 0
    let numberOfPositives = 0

    for (let index = 0; index < numsInArray.length; index++) {
        if (numsInArray[index] < 0) {
            numberOfNegatives += 1
        } else {
            numberOfPositives += 1
        }
    }

    let result;

    if (numberOfNegatives == 2 || numberOfNegatives == 0) {
        result = 'Positive'
    } else if (numberOfNegatives == 1 || numberOfNegatives == 3) {
        result = 'Negative'
    } 

    console.log(result);
}

solve(-6, -12, 14)