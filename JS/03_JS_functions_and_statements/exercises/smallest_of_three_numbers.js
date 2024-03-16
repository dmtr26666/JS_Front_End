function solve(num1, num2, num3) {
    let returnSmallestNum = function(a, b, c) {
    let smallestNum = a

    if (b < smallestNum) {
        smallestNum = b
    }
    
    if (c < smallestNum) {
        smallestNum = c
    }

    return smallestNum
    }

    console.log(returnSmallestNum(num1, num2, num3));
}

solve(600, 342, 123)