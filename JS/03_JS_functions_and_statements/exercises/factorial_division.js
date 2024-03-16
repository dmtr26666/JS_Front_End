function solve(num1, num2) {
    function calculateFactorial(num) {
        let factorial = 1
        for (let index = 1; index <= num; index++) {
            factorial *= index 
        }

        return factorial
    }

    let factorialOfFirstNum = calculateFactorial(num1)
    let factorialOfSecondNum = calculateFactorial(num2)

    console.log((factorialOfFirstNum / factorialOfSecondNum).toFixed(2));
}

solve(6, 2)