function solve(number) {
    let evenNums = []
    let oddNums = []

    number = String(number)

    for (let index = 0; index < number.length; index++) {
        let currentNum = Number(number[index])
        if (currentNum % 2 == 0) {
            evenNums.push(currentNum)
        } else {
            oddNums.push(currentNum)
        }  
    }

    function printSumOfOddAndEven(oddNumsArray, evenNumsArray) {
        console.log(`Odd sum = ${oddNumsArray.reduce((partialSum, a) => partialSum + a, 0)}, Even sum = ${evenNumsArray.reduce((partialSum, a) => partialSum + a, 0)}`)
    }

    printSumOfOddAndEven(oddNums, evenNums)
}

solve(3495892137259234)